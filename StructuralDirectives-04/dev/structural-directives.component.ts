import {Component} from 'angular2/core';
import {unlessDirectives} from "./unless.directives";

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

        <section class="directive">
            <h2>[ngSwitch]</h2>
            <div>
               <input type="text" #color (keyup)="0">
               <div [ngSwitch]="color.value">
               <template [ngSwitchWhen]="'red'" > <span style="color:red" >red</span></template>
               <template [ngSwitchWhen]="'blue'" > <span style="color:blue" >blue</span></template>
               <template [ngSwitchWhen]="'green'" > <span style="color:green" >green</span></template>
               <template [ngSwitchWhen]="'yellow'" > <span style="color:yellow" >yellow</span></template>
               <template  ngSwitchDefault  > <span style="color:black" >It is still difficult to find what color you input</span></template>
               </div>
            </div>
        </section>

        <section class="directive">
            <h2>Custom   directive</h2>
            <div>
               <input type="text" #condition (keyup)="0">
               <div *myUnless = "condition.value != 'false'">             False               </div>
            </div>
        </section>

    `,

    directives:[unlessDirectives]

})
export class StructuralDirectives {
    listt =['Apple','Milk','Bread']

}
