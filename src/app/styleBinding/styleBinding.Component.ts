import {Component} from '@angular/core';

@Component({
    selector: 'my-style',
    template: `<button [style.fontWeight]="isBold?'bold':'normal'">Style My button</button>
                <button style='color:green' [ngStyle]='addStyles()'>Style 2nd My button</button>
               `
})
export class classStyleBindingComponent {
    isBold: boolean = true;
    fontSize: number = 50;
    isitalic: boolean = true;
    addStyles() {
        let styles = {
            'font-weight': this.isBold ? 'bold' : 'normalize',
            'font-size.px': 10,
            'font-style': this.isitalic ? 'italic' : 'normalize',           
        };

        return styles;
    }
}