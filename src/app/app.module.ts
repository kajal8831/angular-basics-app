import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { MyTitlePipe } from './employee/employee/mytitle.pipe';
import { EmployeeCountComponent } from './EmployeeCount/employee-count/employee-count.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    MyTitlePipe,
    EmployeeCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
