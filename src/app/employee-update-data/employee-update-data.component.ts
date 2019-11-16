import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-update-data',
  templateUrl: './employee-update-data.component.html',
  styleUrls: ['./employee-update-data.component.css']
})
export class EmployeeUpdateDataComponent implements OnInit {
  emp = { no: 0, name: "", address: "" };
  message;
  constructor(public routes: ActivatedRoute, public service: EmployeeDataService,
    public router: Router) { }

  ngOnInit() {
    let parameterArrivalStatus = this.routes.paramMap;

    parameterArrivalStatus.subscribe((params) => {
      let No = params.get("no");
      console.log(No);
      let StatusofEmpSearched = this.service.GetEmployeeDataByID(No);
      console.log(StatusofEmpSearched);
      StatusofEmpSearched.subscribe((result: any) => {
        if (result != null) {
          this.emp = result;
          //console.log(this.emp.name);
          this.message = "Record found!"

        }
        else {
          this.message = "Record not found!"
        }
      });

    });
  }

  UpdateEmployeeData() {
    let statusOfUpdate = this.service.UpdateEmployeeData(this.emp);
    statusOfUpdate.subscribe((result: any) => {
      console.log(result);
      if (result.affectedRows > 0) {
        this.router.navigate(['employee/showRecords']);
      }
      else {
        this.message = "Something went wrong!";
      }
    });
  }
}
