"use strict";
/// <reference path="StringUtility.ts" />
exports.__esModule = true;
exports.Employee23 = void 0;
var Employee23 = /** @class */ (function () {
    function Employee23(name, code) {
        this.empName = StringUtility.ToCapital(name);
        this.empCode = code;
    }
    Employee23.prototype.displayEmployee = function () {
        console.log("Employee Code: " + this.empCode + ", Employee Name: " + this.empName);
    };
    return Employee23;
}());
exports.Employee23 = Employee23;
var obj = new Employee23("TEST", 123);
obj.displayEmployee();
