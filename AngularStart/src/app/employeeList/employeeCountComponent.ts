import { Component,Input,Output,EventEmitter } from '@angular/core';
@Component({
    selector: 'emp-CountComponent',
    templateUrl: 'app/employeeList/employeeCountComponent.html',
    styleUrls: ['app/employeeList/employeeCountComponent.css']
})
export class employeeCountComponent {
    selectedBtnValue: string = "All";

    @Output()
    radioBtnOnChanged: EventEmitter<string> = new EventEmitter<string>();

    @Input() all: number;
      
    @Input() male: number;

    @Input() female: number;

    radioSelectionChanged(){
        this.radioBtnOnChanged.emit(this.selectedBtnValue);
         console.log(this.selectedBtnValue); 
    }
}