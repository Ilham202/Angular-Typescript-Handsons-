"use strict";
exports.__esModule = true;
var EmployeeTest = /** @class */ (function () {
    function EmployeeTest(employee, department) {
        var _this = this;
        this.display = function () {
            console.log('ID:' + _this.employee.id);
            console.log('name:' + _this.employee.name);
            console.log('Salary:' + _this.employee.Salary);
            console.log('Permanent Staff: ' + _this.employee.Permanent);
            console.log('Department ID: ' + _this.department.id);
            console.log('Department Name: ' + _this.department.name);
            //console.log('Skill 1: '+this.employee.id+", "+this.employee.name );
            //console.log('Skill 1: '+this.employee.id+", "+this.employee.name);
            //console.log('Skill 1: '+this.employee.id+", "+this.employee.name);
        };
        this.employee = employee;
        this.department = department;
    }
    return EmployeeTest;
}());
var employee = { id: "EM003", name: "john", Salary: 10000,
    Permanent: true };
var department = { id: 1, name: "Payroll" };
var obj = new EmployeeTest(employee, department);
obj.display();
