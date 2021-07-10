import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularLearning';
  flag:boolean = true;
  Salary=10000;
  permanent="yes";
  department="Payroll";
  skills=[{"id":1,"name":"HTML"},{"id":2,"name":"CSS"},{"id":3,"name":"JavaScript"}];
  index=1;
  date=new Date("2019-04-21");
  
}