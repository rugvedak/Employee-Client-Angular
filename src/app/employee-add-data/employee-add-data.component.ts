import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-employee-add-data',
  templateUrl: './employee-add-data.component.html',
  styleUrls: ['./employee-add-data.component.css']
})
export class EmployeeAddDataComponent implements OnInit {

  message;
  constructor(private service:EmployeeDataService) { }

  ngOnInit() 
  {
    
  }

  Add(DataFromUI:any)
  {
    console.log(DataFromUI.form.value);
    let resultstate=this.service.AddEmployeeData(DataFromUI.form.value);
    console.log(resultstate);
    resultstate.subscribe((data:any)=>{
      console.log(data);
      if(data.error==null)
      {
      this.message = "Record Inserted!"
      }
      else{
        console.log(data);
        this.message = "Something Wrong";
      }
    }); 
  }
}