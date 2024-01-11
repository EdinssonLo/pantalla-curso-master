import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Screen1Component } from './pages/screen-1/screen-1.component';
import { Screen2Component } from './pages/screen-2/screen-2.component';
import { Screen3Component } from './pages/screen-3/screen-3.component';
import { Screen4Component } from './pages/screen-4/screen-4.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Screen1Component,
    Screen2Component,
    Screen3Component,
    Screen4Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pantallas-curso-master-1';
}
