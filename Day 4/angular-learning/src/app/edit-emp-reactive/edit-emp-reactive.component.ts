import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employee={"name":"Ilham","Salary":"10000","department":"Payroll","skills":[{"id":1,"name":"HTML"},{"id":2,"name":"CSS"},{"id":3,"name":"Javascript"}]};
  empForm = new FormGroup({
      'name' : new FormControl(this.employee.name,[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
      ])
  
  });
  get name() { return this.empForm.get('name'); }
}