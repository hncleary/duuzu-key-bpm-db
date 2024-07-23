import { Component, Input } from '@angular/core';
import { SongDetails } from '../../../services/data.service';
import { YoutubeQueryService } from '../../../services/youtube-query.service';

@Component({
    selector: 'app-song-details',
    templateUrl: './song-details.component.html',
    styleUrl: './song-details.component.scss',
})
export class SongDetailsComponent {
    @Input({ required: true }) public details: SongDetails = new SongDetails();
    constructor(private _youtubeSvc: YoutubeQueryService) {}

    /** Open a search for the current song in a new window */
    public onYoutubeSearchClick() {
        this._youtubeSvc.openYoutubeSearchForSong(this.details);
    }
}
