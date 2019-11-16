import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeDataService,
    public router: Router) { }

  ngOnInit() {
  }

  ShowEmployees() {
    this.router.navigate(['employee/showRecords']);
  }

  AddEmployee() {
    this.router.navigate(['employee/addRecord']);
  }

}
