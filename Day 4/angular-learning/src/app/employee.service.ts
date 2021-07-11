import { Injectable } from '@angular/core';
import { Employee } from './employee-list/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

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

    getAllEmployees():Employee[] 
    {
         return this.employeeList;
    }
    getEmployee(employeeId: number)
    {
      this.employeeList.forEach(element =>{
        if(element.id==employeeId)
        return element;
      });
    }
}
