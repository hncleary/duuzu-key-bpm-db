const fs = require('fs'); // Built-in filesystem package for Node.js
const util = require('util');
const readFile = util.promisify(fs.readFile);

const FILE_NAME: string = 'keybpm.txt';

/** Get the string contents of a file given location and name */
export async function getFileContents(filename: string): Promise<string> {
    try {
        const data = await readFile(filename, 'utf8');
        return data;
    } catch (err) {
        console.log(`No file found for ${filename}`);
        return '';
    }
}

export async function main() {
    console.log('parse-db is working');
    const keybpmContents: String = await getFileContents(FILE_NAME);
    console.log(keybpmContents);

    // TODO - Parse txt file contents into json array
}

main();

