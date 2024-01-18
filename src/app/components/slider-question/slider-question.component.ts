import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-question',
  standalone: true,
  imports: [],
  templateUrl: './slider-question.component.html',
  styleUrl: './slider-question.component.css'
})
export class SliderQuestionComponent {
  slides: number[] = [1, 2, 3, 4, 5,6];
  i = 0;
  next = false;
  prev = true;
  activo: string = 'question-1';
  getSlide(item: number) {
    return this.slides[this.i + item];
  }

  getPrev() {
    if (!this.prev) {
      this.getElement(this.getSlide(0));

      this.i = this.i === 0 ? 0 : this.i - 1;
      this.prev = this.i === 0;
      this.next = false;
    }
  }
  getNext() {
    if (!this.next) {
      this.getElement(this.getSlide(2));
      this.i = this.i === this.slides.length / 2 ? this.i : this.i + 1;
      this.next = this.i === Math.trunc(this.slides.length / 2);
      this.prev = false;
    }
    console.log(this.i)
  }

  getElement (item: number){
    var elemento = document.getElementsByClassName('question-' + item);
    var otro = document.getElementsByClassName('state-initial');
    for (let index = 0; index < otro.length; index++) {
      otro[index].classList.remove('activo');
    }
    elemento[0].classList.add('activo');
  };
}
