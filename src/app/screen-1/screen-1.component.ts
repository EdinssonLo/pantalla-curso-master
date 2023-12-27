import { Component } from '@angular/core';
import { CardComponent } from '../components/card/card.component'
import { IconMessageComponent  } from "../components/icon-message/icon-message.component";


@Component({
  selector: 'app-screen-1',
  standalone: true,
  imports: [CardComponent,IconMessageComponent],
  templateUrl: './screen-1.component.html',
  styleUrl: './screen-1.component.css'
})
export class Screen1Component {
  iconMessage: Icon={
    name: "add_circle",
    message:"Agregar nuevo curso",
    classIcon: "add-course",
  }
  title = 'screen-1';
}

interface Icon{
  name: string;
  message: string;
  classIcon: string;
}
