import {Component} from 'angular2/core';

@Component({
    selector: 'my-structural-directives',
    template: `
        <section class="directive">
            <h2>*ngidf</h2>
            <div>
                <h2>Input a number higher than 10:</h2>
                <input type="text" #number (keyup)="0">
            </div>

            <div *ngIf = "number.value > 10">
               <h5>A heading</h5>
               <h2>Number is greater than 10.</h2>
            </div>
        </section>

        <section class="directive">
            <h2>*ngFor</h2>
            <div>
               <ul>
               <li *ngFor ="#itemm of listt, #i = index   ">{{itemm}} {{i}}</li>
               </ul>
            </div>
        </section>

    `,

})
export class StructuralDirectives {
    listt =['Apple','Milk','Bread']

}
