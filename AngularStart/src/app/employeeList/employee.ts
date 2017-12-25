export interface IEmployeeType {
    code: string;
    name: string;
    gender: string;
    salary: number;
    dob: string;
    profile?: string;
    //computeSalary(sal: number): number;
} 

//export class EMP implements IEmployeeType {
//    constructor(public code: string, public name: string, public gender: string, public salary: number, public dob: string) { }
//    computeSalary(sal: number):number {
//        return 2;
//    }
//}