import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
    selector: 'app-changelog',
    standalone: true,
    imports: [MatCardModule, MatDividerModule],
    templateUrl: './changelog.component.html',
    styleUrl: './changelog.component.scss',
})
export class ChangelogComponent {
    public readonly entries: ChangelogEntry[] = [
        {
            date: 'June 17, 2025',
            version: 'v1.0.0',
            updates: ['Generated and updated database from Duuzu KeyBpm DB v10', 'Brought total song count to 19,000+'],
        },
        {
            date: 'June 24, 2024',
            version: 'v0.1.2-alpha.0',
            updates: [
                'Generated and updated database from Duuzu KeyBpm DB v9',
                'Added ability to filter list of every defined song',
                'Added ability to search a song on youtube with one click',
                'Brought total song count to 16,000+',
            ],
        },
    ];
}

export class ChangelogEntry {
    public date: string = '';
    public version: string = '';
    public updates: string[] = [];
}
