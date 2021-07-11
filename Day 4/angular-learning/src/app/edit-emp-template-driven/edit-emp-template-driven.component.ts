import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-emp-template-driven',
  templateUrl: './edit-emp-template-driven.component.html',
  styleUrls: ['./edit-emp-template-driven.component.css']
})
export class EditEmpTemplateDrivenComponent {

  constructor() { }
  name = '';

  onSubmit(data:any)
  {
    console.log("Submitted!");
  }
  }
