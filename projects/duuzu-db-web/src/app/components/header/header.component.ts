import { Component, OnInit, ViewChild } from '@angular/core';
import { PAGE_ROUTES } from '../../app-routing.module';
import { MatTabGroup } from '@angular/material/tabs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public currentRoute: string = '';

  public readonly pages: Page[] = [
    {
      route: PAGE_ROUTES.HOME,
      displayName: 'Database',
      icon: 'queue_music',
    },
    {
      route: PAGE_ROUTES.ABOUT,
      displayName: 'About',
      icon: 'info',
    },
  ];
  /** Child tab group component used to handle sub-page navigation */
  @ViewChild('navigationTabGroup') tabGroup: MatTabGroup | undefined;

  constructor(private _location: Location) {}

  ngOnInit() {
    // Add listener for changes in current URL,
    this._location.onUrlChange((url) => {
      this.updateCurrRouteRef(url);
    });
    // Update route once in case this was the first page resolved
    this.updateCurrRouteRef(window.location.href);
  }
  /** Determine which sub page is currently selected and save reference to class variable */
  public updateCurrRouteRef(url: string) {
    const f = this.pages.find((page) => url.includes(page.route));
    if (!!f) {
      this.currentRoute = f.route;
    } else {
      this.currentRoute = PAGE_ROUTES.HOME;
    }
  }
}

export class Page {
  public route: PAGE_ROUTES = PAGE_ROUTES.HOME;
  public displayName: string = '';
  public icon: string = '';
}
