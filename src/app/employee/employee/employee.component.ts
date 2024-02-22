import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employees : any[];
  selectedEmployeeCountRadioButtonValue : string = "All";

  constructor(){
    this.employees = [
      {
        ID: 'emp101', Name: 'Rakesh Rout',
        DOB: '12/8/1988', Gender: 'Male', Salary: 1234.56
    },
    {
        ID: 'emp102', Name: 'Anurag Mohanty', 
        DOB: '10/14/1989', Gender: 'Male', Salary: 6666.00
    },
    {
        ID: 'emp103', Name: 'Priyanka Dewangan', 
        DOB: '7/24/1992', Gender: 'Female', Salary: 6543.15
    },
    {
        ID: 'emp104', Name: 'Hina Sharma', 
        DOB: '8/19/1990', Gender: 'Female', Salary: 9000.50
    },
    ];
  }

  getEmployees(){
    this.employees = [
      {
        ID: 'emp101', Name: 'Rakesh Rout',
        DOB: '12/8/1988', Gender: 'Male', Salary: 1234.56
    },
    {
        ID: 'emp102', Name: 'Anurag Mohanty', 
        DOB: '10/14/1989', Gender: 'Male', Salary: 6666.00
    },
    {
        ID: 'emp103', Name: 'Priyanka Dewangan', 
        DOB: '7/24/1992', Gender: 'Female', Salary: 6543.15
    },
    {
        ID: 'emp104', Name: 'Hina Sharma', 
        DOB: '8/19/1990', Gender: 'Female', Salary: 9000.50
    },
    {
        ID: 'emp105', Name: 'Sambit Satapathy',
        DOB: '4/12/1991', Gender: 'Male', Salary: 9876.54
    }
    ];
  }

  trackByEmpCode(index:number,employee:any):string{
    return employee.ID;
  }

  onEmployeeCountRadioBUttonChange(selectedRadioButtonValue:string) : void{
    this.selectedEmployeeCountRadioButtonValue = selectedRadioButtonValue;
  }

  getTotalEmployeesCount():number{
    return this.employees.length;
  }

  getTotalMaleEmployeesCount():number{
    return this.employees.filter(e => e.Gender === "Male").length;
  }

  getTotalFemaleEmployeesCount():number{
    return this.employees.filter(e => e.Gender === "Female").length;
  }
  }
 