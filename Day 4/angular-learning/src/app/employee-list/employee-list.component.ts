import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { Department } from './department';
import { Skills } from './skills';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employeeList: Employee[] = [
    {
      id: 1,
      name: "John",
      salary: 55000,
      isPermanent: true,
      dob: new Date("1996-08-12")
    },
    {
      id: 2,
      name: "Smith",
      salary: 100000,
      isPermanent: true,
      dob: new Date("1998-05-18")
    },
    {
      id: 3,
      name: "Mary",
      salary: 50000,
      isPermanent: true,
      dob: new Date("2000-01-18")
    },
    {
      id: 4,
      name: "Lucia",
      salary: 170000,
      isPermanent: true,
      dob: new Date("1997-05-28")
    },
    {
      id: 5,
      name: "Donald",
      salary: 85000,
      isPermanent: true,
      dob: new Date("1985-12-29")
    }];
    searchKey = '';
    //Create a Skills array
    skills: Skills[] = [
      {id : 1, name : "HTML"}, {id : 2, name : "CSS"}, {id : 3, name : "JavaScript"}
    ];
    departments: Department[] = [
      {id : 1, name : "PayRoll"}, {id : 2, name : "Human Resources"}, {id : 3, name : "Development"}
    ];
    fin = '';
    filteredEmployees: Employee[] = [];
    //Create the search method
    search(event:any): void {
      this.fin = event.target.value;
      this.filteredEmployees = this.employeeList.filter(name => name.name.includes(this.fin));
    }
}
