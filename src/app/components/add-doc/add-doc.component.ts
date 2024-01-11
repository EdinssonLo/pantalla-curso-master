import { Component } from '@angular/core';

import { IconMessageComponent  } from "../../components/icon-message/icon-message.component";


@Component({
  selector: 'app-add-doc',
  standalone: true,
  imports: [IconMessageComponent],
  templateUrl: './add-doc.component.html',
  styleUrl: './add-doc.component.css'
})
export class AddDocComponent {
  iconAddDoc: Icon={
    name: "add_circle",
    message:"Adjuntar documentos del curso",
    classIcon: "add-doc",
  }

}

interface Icon{
  name: string;
  message: string;
  classIcon: string;
}
