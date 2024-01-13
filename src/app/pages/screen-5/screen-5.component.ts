import { Component } from '@angular/core';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { AddDocComponent } from '../../components/add-doc/add-doc.component';

@Component({
  selector: 'app-screen-5',
  standalone: true,
  imports: [ButtonsComponent, AddDocComponent],
  templateUrl: './screen-5.component.html',
  styleUrl: './screen-5.component.css',
})
export class Screen5Component {}
