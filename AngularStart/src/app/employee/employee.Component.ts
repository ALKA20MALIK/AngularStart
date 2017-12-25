import { Component,Input,OnChanges,SimpleChanges } from '@angular/core';
import {} from ''

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.Component.html',
    styleUrls: ['app/employee/employee.Component.css'],
})
export class EmployeeComponent implements OnChanges{
    colSpan: number = 2;
    @Input() simpleinput: string;
    firstName: string = 'Alka';
    lastName: string = 'Rathore';
    gender: string = 'Female';
    age: number = 25;
    showDetails: boolean = false;

    ngOnChanges(changes: SimpleChanges) {
        for (let propertyName in changes)
        {
            let x = changes[propertyName];
            let currentval = JSON.stringify(x.currentValue);
            let priviousval = JSON.stringify(x.previousValue);
            console.log(propertyName + ':currentValue=' + currentval + ',priviousval =' + priviousval)
        }
    }


    toggleDetails():void {
        this.showDetails = !this.showDetails;
        console.log('alka');
    }
  
}