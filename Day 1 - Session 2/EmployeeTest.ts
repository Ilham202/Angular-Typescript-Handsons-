import {Employee} from"./employee";
import {Department} from "./department";
import {Skills} from "./skills";

class EmployeeTest{
    employee:Employee;
    department:Department;
    constructor(employee:Employee,department:Department){
        this.employee=employee;
        this.department=department;
    }
     display=():void=>{
console.log('ID:'+this.employee.id);
console.log('name:'+this.employee.name);
console.log('Salary:'+this.employee.Salary);
console.log('Permanent Staff: '+this.employee.Permanent);
console.log('Department ID: '+this.department.id);
console.log('Department Name: '+this.department.name);
//console.log('Skill 1: '+this.employee.id+", "+this.employee.name );
//console.log('Skill 1: '+this.employee.id+", "+this.employee.name);
//console.log('Skill 1: '+this.employee.id+", "+this.employee.name);
    }
}
const employee:Employee={id:"EM003",name:"john",Salary:10000,
Permanent:true};
const department:Department={id:1,name:"Payroll"};
let obj=new EmployeeTest(employee,department);
obj.display();