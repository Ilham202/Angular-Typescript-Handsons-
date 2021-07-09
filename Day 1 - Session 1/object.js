obj=JSON.parse('{"firstname":"John", "lastname":"Stokes","Salary":5000,"PermanentStaff":true,"departmentID":3, "departmentName":"payroll"\
,"skills":[{"id":1,"value":"HTML"},{"id":2,"value":"CSS"},{"id":3,"value":"JavaScript"}]}');

console.log('First name:'+obj.firstname);
console.log('Last name:'+obj.lastname);
console.log('Salary:'+obj.Salary);
console.log('Permanent Staff: '+obj.PermanentStaff);
console.log('Department ID: '+obj.departmentID);
console.log('Department Name: '+obj.departmentName);
console.log('Skill 1: '+obj.skills[0].id+", "+obj.skills[0].value );
console.log('Skill 1: '+obj.skills[1].id+", "+obj.skills[1].value );
console.log('Skill 1: '+obj.skills[2].id+", "+obj.skills[2].value );