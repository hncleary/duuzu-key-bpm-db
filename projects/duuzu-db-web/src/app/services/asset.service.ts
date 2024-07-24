import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AssetService {
    public readonly logoIcon: string = 'assets/duuzu_db_logo.png';
    public readonly logo: string = 'assets/duuzu_db_logo_sm.png';
    constructor() {}
}
