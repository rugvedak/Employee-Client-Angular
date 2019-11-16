import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  constructor(public http: HttpClient) { }

  GetEmployeeData() {
    return this.http.get("http://localhost:4000/employees");
  }

  AddEmployeeData(empObject) {
    return this.http.post("http://localhost:4000/employees",empObject);
  }
  DeleteEmployeeData(No)
  {
    return this.http.delete("http://localhost:4000/employees/" +No );
  }

  UpdateEmployeeData(empObject)
  {
    console.log(empObject)
    return this.http.put("http://localhost:4000/employees/" + empObject.no,empObject );
  }

  GetEmployeeDataByID(No)
  {
   return this.http.get("http://localhost:4000/employees/" +No );
  }

}
