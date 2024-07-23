import { Component, OnInit } from '@angular/core';
import { DataService, SongDetails } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public songDetailsList: SongDetails[] = [];

  constructor(private _dataSvc: DataService) {}

  ngOnInit(): void {
    void this.getData();
  }

  /** Retrieve the entirety of the song db and set values to current component */
  public async getData() {
    const data = await this._dataSvc.getDatabaseContent();
    this.songDetailsList = data;
  }
}
