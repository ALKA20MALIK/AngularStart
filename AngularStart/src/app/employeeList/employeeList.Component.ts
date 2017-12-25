import { Component } from '@angular/core';
import { IEmployeeType } from './employee';

@Component({
    selector: 'my-employeeList',
    templateUrl: 'app/employeeList/employeeList.Component.html',
    styleUrls: ['app/employee/employee.Component.css']
})

export class classEmployeeListComponent {
    employees: IEmployeeType[];
    selectedEmployeeCountRadioBtn: string = 'All';
    constructor() {
        this.employees = [
            { code: 'emp03', name: 'alka', gender: 'Female', salary: 30000.01, dob: '01/08/97' },
            { code: 'emp02', name: 'bhoop', gender: 'Male', salary: 30000.67, dob: '08/20/90' },
            { code: 'emp01', name: 'shrey', gender: 'Male', salary: 40000.56, dob: '05/15/85' },
            { code: 'emp04', name: 'vinod', gender: 'Male', salary: 90000.6, dob: '10/06/92' },
            { code: 'emp05', name: 'pari', gender: 'Female', salary: 1000000.6, dob: '12/09/88' },
            { code: 'emp06', name: 'Babu', gender: 'Male', salary: 1400000.6, dob: '12/09/88' }
        ];
    }

    onEmployeeCountRadioBtnChanged(x:string):void {
        this.selectedEmployeeCountRadioBtn = x;
    }

    getTotalEmployee(): number {
        return this.employees.length;
    }
    getTotalMaleEmployee(): number {
        return this.employees.filter(e => e.gender==="Male").length;
    }
    getTotalFemaleEmployee(): number {
        return this.employees.filter(e=>e.gender==="Female").length;
    }
    //addEmployee(): void {
    //        this.employees = [
    //            { code: 'emp03', name: 'alka', gender: 'female', salary: 30000.01, dob: '01/08/97' },
    //            { code: 'emp02', name: 'bhoop', gender: 'male', salary: 30000.67, dob: '08/20/90' },
    //            { code: 'emp01', name: 'shrey', gender: 'male', salary: 40000.56, dob: '05/15/85' },
    //            { code: 'emp04', name: 'vinod', gender: 'male', salary: 90000.6, dob: '10/06/92' },
    //            { code: 'emp05', name: 'garima', gender: 'female', salary: 190000.6, dob: '11/06/89' }

    //        ];
    //}
    //trackByEmpCode(index:Number,employee:any):string {
    //    return employee.code;
    //}
  }
