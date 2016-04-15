import {Component} from 'angular2/core';
import {EventEmitter} from "angular2/core";


@Component({
    selector: 'my-confirm',
    template: `

        <h1>Your Submitted the following details, Is it correct?</h1>
        <p>Your name is <span class="highlight">{{myself.name}}</span> and your're <span class="highlight">{{myself.age}}</span> years old. Please click on 'Confirm' if you have made any changes to this informations. </p>
        <div>
          <label for="name">Your Name</label>
          <input type="text" id="name" [(ngModel)]="myself.name" (keyup)="onKeyup()">
        </div>
        <div>
          <label for="age">Your Age</label>
          <input type="text" id="age" [(ngModel)]="myself.age" (keyup)="onKeyup()">
        </div>
        <br>
        <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>
        <div>Filled out: {{isValid ? 'Yes' : 'No'}}</div>
        <br>
        <button [disabled]="!isValid" (click)="onConfirm()">Submit</button>


    `,
    inputs: ['myself'],
    outputs: ['confirmed']
})
export class ConfirmComponent {
    myself = {name:'', age:''};
    isFilled = false;
    isValid = false;
    confirmed = new EventEmitter<{name:string, age:string}>();


    onKeyup(){

        if(this.myself.name != '' && this.myself.age != ''){
            this.isFilled = true;
        }else{
            this.isFilled = false;
        }

        if(this.myself.name != '' && /^\d+$/.test( this.myself.age)){
            this.isValid = true;
        }else{
            this.isValid = false;
        }
    }


    onConfirm(){
        this.confirmed.emit(this.myself);
    }

}
