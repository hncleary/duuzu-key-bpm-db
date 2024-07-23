import { Injectable } from '@angular/core';
import { SongDetails } from './data.service';

@Injectable({
    providedIn: 'root',
})
export class YoutubeQueryService {
    private readonly baseUrl = 'https://www.youtube.com/results?search_query=';

    constructor() {}

    /** Generate a url that will search for the referenced song on youtube */
    private generateYoutubeQueryUrl(songDetails: SongDetails) {
        const search = `${songDetails.source ?? ''} ${songDetails.artist} - ${songDetails.name}`.trim();
        return `${this.baseUrl}${search.split(' ').join('+')}`;
    }

    /** Open a search for the referenced song on youtube in a new window */
    public openYoutubeSearchForSong(songDetails: SongDetails) {
        const url = this.generateYoutubeQueryUrl(songDetails);
        window.open(url, '_blank');
    }
}
