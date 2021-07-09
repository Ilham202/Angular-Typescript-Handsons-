import { Employee } from "./employee";
import {Department} from "./department";
import {Skills} from "./skills";

const obj1:Employee ={id:"EM003",name:"john",Salary:10000,
Permanent:true}
const obj2:Department ={id:1,name:"payroll"};
const obj3_0:Skills ={id:1,name:"HTML"};
const obj3_1:Skills ={id:2,name:"CSS"};
const obj3_2:Skills ={id:3,name:"JavaScript"};



console.log('ID:'+obj1.id);
console.log('name:'+obj1.name);
console.log('Salary:'+obj1.Salary);
console.log('Permanent Staff: '+obj1.Permanent);
console.log('Department ID: '+obj2.id);
console.log('Department Name: '+obj2.name);
console.log('Skill 1: '+obj3_0.id+", "+obj3_0.name );
console.log('Skill 1: '+obj3_1.id+", "+obj3_1.name);
console.log('Skill 1: '+obj3_2.id+", "+obj3_2.name);