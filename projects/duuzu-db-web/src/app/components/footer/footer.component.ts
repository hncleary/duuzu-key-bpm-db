import { Component } from '@angular/core';
import { environment } from '../../../environment/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public version = environment.version;
}
