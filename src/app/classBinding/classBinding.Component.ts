import { Component } from '@angular/core';

@Component({
    selector: 'my-classBinding',
    styleUrls: ['app/classBinding/classBinding.Component.css'],
    template: `<button class='colorClass' [class]='classesToApply'>My Button</button>
                <br/><br/>
                <button bind-ngClass='applyClass()'>My Button</button>`
})
export class classBindingComponent{
    //classesToApply: string = 'colorClass italicClass boldClass';
    applyitalicClass: boolean = false; 
    applyboldClass: boolean = true; 
    applycolorClass: boolean = true;
    applyClass() {
        let classes = {
            boldClass: this.applyboldClass,
            colorClass: this.applycolorClass,
            italicClass: this.applyitalicClass
        };
        return classes;
    }
}