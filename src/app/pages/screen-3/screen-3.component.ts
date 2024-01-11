import { Component} from '@angular/core';
import { IconDescriptionComponent } from '../../components/icon-description/icon-description.component';
import { ButtonsComponent } from '../../components/buttons/buttons.component'

@Component({
  selector: 'app-screen-3',
  standalone: true,
  imports: [IconDescriptionComponent, ButtonsComponent],
  templateUrl: './screen-3.component.html',
  styleUrl: './screen-3.component.css'
})
export class Screen3Component {

  addObjetivo: Icon = {
    name: 'add_circle',
    message: 'Agregar objetivo',
    classIcon: 'right',
  };
  habilidades: Icon = {
    name: 'add_circle',
    message: 'Habilidades a fortalecer',
    classIcon: 'right',
  };
}

interface Icon {
  name: string;
  message: string;
  classIcon: string;
}
