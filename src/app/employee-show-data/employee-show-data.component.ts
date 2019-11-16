import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-show-data',
  templateUrl: './employee-show-data.component.html',
  styleUrls: ['./employee-show-data.component.css']
})
export class EmployeeShowDataComponent implements OnInit {
  employees;
  message;
  constructor(private service:EmployeeDataService,
    public router : Router) { }

  ngOnInit() {
    let resultstate=this.service.GetEmployeeData();
    console.log("inseide the employee Details");
    resultstate.subscribe((data)=>{
      console.log(data);
      this.employees = data;
    });
  }
  Delete(empNo)
  {
    console.log(empNo);
    let statusOfDelete= this.service.DeleteEmployeeData(empNo);
  
    statusOfDelete.subscribe((result:any)=>{
      if(result.affectedRows>0)
      {
        this.router.navigate(['employee/showRecords']);
      }
      else
      {
        this.message = "Something went wrong!";
      }
    });
  }

}
