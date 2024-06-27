const fs = require("fs"); // Built-in filesystem package for Node.js
const util = require("util");
const readFile = util.promisify(fs.readFile);

const INPUT_FILE_NAME: string = "keybpm.txt";
const OUTPUT_FILE_NAME: string = "keybpmdb.json";

enum SongTypeKey {
  Instrumental = "inst",
  Acapella = "aca",
  Percussive = "perc",
}

export class SongDetails {
  public sourceLine: string = "";
  public name: string = "";
  public artist: string = "";
  public source: string = "";
  public mainKeys: string[] = [];
  public subKeys: string[] = [];
  public bpms: string[] = [];
  public type: string = "";
}

/** Get the string contents of a file given location and name */
export async function getFileContents(filename: string): Promise<string> {
  try {
    const data = await readFile(filename, "utf8");
    return data;
  } catch (err) {
    console.log(`No file found for ${filename}`);
    return "";
  }
}

/** Write json content to output file */
export async function writeSongDetailsToFile(
  details: SongDetails[]
): Promise<void> {
  fs.writeFile(
    `./${OUTPUT_FILE_NAME}`,
    JSON.stringify(details, undefined, 4),
    (err: unknown) => {
      if (err) throw err;
    }
  );
}

function processSongLine(section: string, line: string): SongDetails {
  const details: SongDetails = new SongDetails();
  details.sourceLine = line;
  details.mainKeys = [section];
  details.name = getSongNameFromLine(line);
  details.artist = getArtistNameFromLine(line);
  details.type = getSongTypeFromLine(line);
  details.source = getSourceFromLine(line);

  // TODO - generate a set of possible bpm structures and determine if they are in the line
  details.bpms = getBpmsFromLine(line);

  // TODO - generate a set of possible sub key structures and determine if they are in the line

  return details;
}

function getSourceFromLine(line: string) {
  const s = line.split("-");
  if (s.length > 2) {
    return s[0].trim();
  }
  return "";
}
function getArtistNameFromLine(line: string): string {
  const s = line.split("-");
  if (s.length > 2) {
    return s[1].trim();
  }
  return s[0].trim();
}

function getSongNameFromLine(line: string): string {
  const regex = /-[^\(-]*\(/gm;
  const matches = line.match(regex);
  if (!!matches && matches.length > 0) {
    return matches[0].slice(1, -1).trim();
  }
  return "";
}

function getSongTypeFromLine(line: string): string {
  if (line.includes(`(${SongTypeKey.Acapella})`)) {
    return "Acapella";
  }
  if (line.includes(`(${SongTypeKey.Instrumental})`)) {
    return "Instrumental";
  }
  if (line.includes(`(${SongTypeKey.Percussive})`)) {
    return "Percussive";
  }
  return "";
}

function getBpmsFromLine(line: string): string[] {
  const regex = /\([^\)]*\)/gm;
  const matches = line.match(regex);
  if (!!matches && matches.length > 0) {
    return [matches[matches.length - 1].slice(1, -1)];
  }
  return [];
}

export async function main() {
  // Get contents of keybpm text file
  const keybpmContents: String = await getFileContents(INPUT_FILE_NAME);

  // Initialize song definitions array
  const songDetails: SongDetails[] = [];
  // Separate out each line of the document
  let lines = keybpmContents.split("\n").map((s) => s.trim());
  console.log(`lines: ${lines.length}`);

  const limit = -1;
  let processed = 0;

  let currentSection = "";
  for (let line of lines) {
    if (limit > 0 && processed >= limit) {
      continue;
    }
    // If line is a section separator line
    if (line.startsWith("[")) {
      // Remove '[' and ']' from section key string
      currentSection = line.replace(/[\[]|[\]]/g, "");
    }
    // If line is a song details line
    if (line.startsWith("•")) {
      // Remove '•' instances from line
      line = line.replace(/•/g, "").trim();
      // Process song details and add to cumulative array
      const song: SongDetails = processSongLine(currentSection, line);
      songDetails.push(song);
      processed++;
    }
  }

  const songLines = lines.filter((l) => l.startsWith("•"));
  console.log(`song lines: ${songLines.length}`);
  console.log(songLines.slice(0, 5));

  console.log(songDetails.slice(0, 10));

  // let songLinesDashCount = 0;
  // songLines.forEach((sl) => {
  //     songLinesDashCount += sl.split('-').length;
  //     if(sl.split('-').length > 2) {
  //         console.log(sl);
  //     }
  // });
  // console.log('split count:', songLinesDashCount / songLines.length);

  const keyLines = lines.filter((l) => l.startsWith("["));
  console.log(`key lines: ${keyLines.length}`);
  console.log(keyLines);

  writeSongDetailsToFile(songDetails);
}

main();
