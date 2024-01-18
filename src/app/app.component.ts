import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Screen1Component } from './pages/screen-1/screen-1.component';
import { Screen2Component } from './pages/screen-2/screen-2.component';
import { Screen3Component } from './pages/screen-3/screen-3.component';
import { Screen4Component } from './pages/screen-4/screen-4.component';
import { Screen5Component } from './pages/screen-5/screen-5.component';
import { Screen6Component } from './pages/screen-6/screen-6.component';
import { Screen7Component } from './pages/screen-7/screen-7.component';
import { Screen8Component } from './pages/screen-8/screen-8.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Screen1Component,
    Screen2Component,
    Screen3Component,
    Screen4Component,
    Screen5Component,
    Screen6Component,
    Screen7Component,
    Screen8Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pantallas-curso-master-1';
}
