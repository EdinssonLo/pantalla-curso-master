import { Component } from '@angular/core';
import { IconMessageComponent } from "../../components/icon-message/icon-message.component";
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { ItemListComponent } from "../../components/item-list/item-list.component";

@Component({
  selector: 'app-screen-4',
  standalone: true,
  imports: [IconMessageComponent,ItemListComponent,ButtonsComponent],
  templateUrl: './screen-4.component.html',
  styleUrl: './screen-4.component.css'
})
export class Screen4Component {
  addItem: Icon = {
    name: 'add_circle',
    message: 'Agregar item',
    classIcon: '',
  };

}

interface Icon {
  name: string;
  message: string;
  classIcon: string;
}
