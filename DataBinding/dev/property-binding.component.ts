import {Component} from 'angular2/core';
import {Input} from "angular2/core";
import {EventEmitter} from "angular2/core";


@Component({
    selector: 'my-property-binding',
    template: `
<h2>This is the child component</h2>
<p>Hey {{name}}! I am {{age}} </p>
<br>
<h2>What is your hobbies?</h2>
<input type="text" (keyup)="onHobbiesChanged(hobbies.value)" #hobbies>



    `,
    inputs:['name: myName'],
    outputs:['HobbiesChanged'],

})


export class PropertyBindingComponent {

    myName = " ";
    @Input ('myAge') age  = 20;

     HobbiesChanged = new EventEmitter<string>();


    onHobbiesChanged(hobbies:string){
        this.HobbiesChanged.emit(hobbies);
    }




}
