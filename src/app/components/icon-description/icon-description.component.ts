import { Component, Input } from '@angular/core';
import { IconMessageComponent } from '../icon-message/icon-message.component';

@Component({
  selector: 'app-icon-description',
  standalone: true,
  imports: [IconMessageComponent],
  templateUrl: './icon-description.component.html',
  styleUrl: './icon-description.component.css',
})
export class IconDescriptionComponent {
  @Input() addObjetivo: Icon = {
    name: '',
    message: '',
    classIcon: '',
  };
}

interface Icon {
  name: string;
  message: string;
  classIcon: string;
}
