import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'AngularLearning';
  flag:boolean = true;
  Salary=10000;
  permanent="yes";
  department="Payroll";
  skills=[{"id":1,"name":"HTML"},{"id":2,"name":"CSS"},{"id":3,"name":"JavaScript"}];
  index=1;
  date=new Date("2019-04-21");

}
