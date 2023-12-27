import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-message',
  standalone: true,
  imports: [],
  templateUrl: './icon-message.component.html',
  styleUrl: './icon-message.component.css'
})
export class IconMessageComponent {


  @Input() icon: Icon={
    name: " ",
    message:" ",
    classIcon:" ",
  }
  title = "icon-message"
}

interface Icon{
  name: string;
  message: string;
  classIcon: string;
}
