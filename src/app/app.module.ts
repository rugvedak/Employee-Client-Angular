import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmployeeDataService } from './employee-data.service';
import { HttpClientModule  } from '@angular/common/http';
import { EmployeeShowDataComponent } from './employee-show-data/employee-show-data.component';
import { EmployeeAddDataComponent } from './employee-add-data/employee-add-data.component';
import { EmployeeUpdateDataComponent } from './employee-update-data/employee-update-data.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    AboutusComponent,
    ContactusComponent,
    EmployeeShowDataComponent,
    EmployeeAddDataComponent,
    EmployeeUpdateDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"" ,component:AppComponent},
      {path:"home" ,component:HomeComponent},
      {path:"employee" ,component:EmployeeComponent},
      {path:"aboutus", component:AboutusComponent},
      {path:"contactus",component:ContactusComponent},
      {path:"employee/showRecords",component:EmployeeShowDataComponent},
      {path:"employee/addRecord",component:EmployeeAddDataComponent},
      {path: "employee/showRecords/edit/:no", component: EmployeeUpdateDataComponent},
      
    ])
  ],
  providers: [HttpClientModule,EmployeeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
