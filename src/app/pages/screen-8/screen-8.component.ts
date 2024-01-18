import { Component } from '@angular/core';


import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { AddDocComponent } from '../../components/add-doc/add-doc.component';

@Component({
  selector: 'app-screen-8',
  standalone: true,
  imports: [ButtonsComponent, AddDocComponent],
  templateUrl: './screen-8.component.html',
  styleUrl: './screen-8.component.css'
})
export class Screen8Component {

}
