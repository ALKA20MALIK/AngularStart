import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'my-simple',
    template:`You entered:{{simpleinput}}`
})
export class SimpleComponent implements OnChanges {
    @Input() simpleinput: string;
    
    ngOnChanges(changes: SimpleChanges) {
        for (let propertyName in changes) {
            let x = changes[propertyName];
            let currentval = JSON.stringify(x.currentValue);
            let priviousval = JSON.stringify(x.previousValue);
            console.log(propertyName + ':currentValue=' + currentval + ',priviousval =' + priviousval)
        }
    }

}