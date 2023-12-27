import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Screen1Component } from './screen-1/screen-1.component';
import { Screen2Component } from './pages/screen-2/screen-2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Screen1Component,Screen2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pantallas-curso-master-1';
}
