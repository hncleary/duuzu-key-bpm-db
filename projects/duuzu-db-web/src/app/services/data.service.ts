import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly _dbJsonUrl =
    'https://raw.githubusercontent.com/hncleary/duuzu-key-bpm-db/main/projects/duuzu-db-parser/keybpmdb.json';

  constructor(private _apiSvc: ApiService) {}

  /** Retrieve the entirety of the duuzu db database json file */
  public async getDatabaseContent(): Promise<SongDetails[]> {
    const json = await firstValueFrom(this._apiSvc.getUrl(this._dbJsonUrl));
    return json as SongDetails[];
  }
}

export class SongDetails {
  public sourceLine: string = '';
  public name: string = '';
  public artist: string = '';
  public source: string = '';
  public mainKeys: string[] = [];
  public subKeys: string[] = [];
  public bpms: string[] = [];
  public type: string = '';
}
