import { Component } from '@angular/core';
import { IconMessageComponent  } from "../../components/icon-message/icon-message.component";
import { FormCourseComponent } from '../../components/form-course/form-course.component';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { AddDocComponent } from '../../components/add-doc/add-doc.component';

@Component({
  selector: 'app-screen-2',
  standalone: true,
  imports: [FormCourseComponent, IconMessageComponent, ButtonsComponent, AddDocComponent],
  templateUrl: './screen-2.component.html',
  styleUrl: './screen-2.component.css'
})
export class Screen2Component {
  //iconName: string = "add_circle"
  iconMessage: Icon={
    name: "image",
    message:"Agregar tu foto, el tamaño recomendado es 256 x 256 px",
    classIcon: "add-img",
  }


}

interface Icon{
  name: string;
  message: string;
  classIcon: string;
}
