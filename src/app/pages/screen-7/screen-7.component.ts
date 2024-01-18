import { Component } from '@angular/core';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { NgClass } from '@angular/common';
import { SliderQuestionComponent } from '../../components/slider-question/slider-question.component';

@Component({
  selector: 'app-screen-7',
  standalone: true,
  imports: [ButtonsComponent, NgClass, SliderQuestionComponent],
  templateUrl: './screen-7.component.html',
  styleUrl: './screen-7.component.css'
})
export class Screen7Component {

  obtenerElemento = (item: string) =>{
    var elemento = document.getElementsByClassName('question-'+item);
    var otro = document.getElementsByClassName('eliminar')
    for (let index = 0; index < otro.length; index++) {
      otro[index].classList.remove('activo')
    }
    elemento[0].classList.add('activo')
  }
}
