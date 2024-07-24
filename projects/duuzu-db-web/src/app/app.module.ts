import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxMatSearchbarModule } from 'ngx-mat-searchbar';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { GenericFilterPipe } from './pipes/generic-filter.pipe';
import { SongDetailsComponent } from './pages/home/song-details/song-details.component';
import { TruncationTipDirective } from './directives/truncation-tip.directive';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        FooterComponent,
        HeaderComponent,
        GenericFilterPipe,
        SongDetailsComponent,
        TruncationTipDirective,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatDividerModule,
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatTooltipModule,
        MatTabsModule,
        AppRoutingModule,
        NgxMatSearchbarModule,
        ScrollingModule,
        MatChipsModule,
    ],
    providers: [
        MatTooltip,
        MatIconRegistry,
        provideAnimationsAsync(),
        provideHttpClient(withInterceptorsFromDi()),
        TruncationTipDirective,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
