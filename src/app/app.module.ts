import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.Component';
import { classBindingComponent } from './classBinding/classBinding.Component';
import { classStyleBindingComponent } from './styleBinding/styleBinding.Component';
import { classEmployeeListComponent } from './employeeList/employeeList.Component';
import { EmployeeTitlePipe } from './employeeList/employeeTitle.Pipe';
import { employeeCountComponent } from './employeeList/employeeCountComponent';
import { SimpleComponent } from './Others/simple.Component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EmployeeComponent, classBindingComponent, classStyleBindingComponent, classEmployeeListComponent,
        EmployeeTitlePipe, employeeCountComponent, SimpleComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
