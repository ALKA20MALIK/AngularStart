import { Component } from '@angular/core'
@Component({
    selector: 'my-app',
    template: `<div>
                    <h1>{{getFullName()}}</h1>
                    <img src='{{imgPath}}'/>
                    <my-employee></my-employee>
                    <button bind-disabled='isdisabled'>click me</button>                 
                    <input id="txtName" type="text" value="Alka"/>
                    <my-classBinding></my-classBinding>
                    <my-style></my-style>
                    <my-employeeList></my-employeeList>
                    <input type="text" [(ngModel)]='usertext'/>
                    <my-simple [simpleinput]='usertext'></my-simple>                     
               <div>`
})

export class AppComponent {
    isdisabled: boolean = false;
    pageHeader: string = 'Employee Deatils';
    imgPath: string = 'http://www.pragimtech.com/Images/Logo.JPG';
    firstName: string = 'Alka';
    lastName: string = 'Malik';
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
    usertext: string = 'babu';

}