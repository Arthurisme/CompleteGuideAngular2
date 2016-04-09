import {Component} from 'angular2/core';
import {TestComponent} from "./test.component";
import {OnInit} from "angular2/core";

@Component({

    selector:'my-component',
    template: `
    <h1>Hi, I'am <span [style.color] = "inputElement.value === 'yes' ? 'red' : '' " > {{name}} </span> and this is my first Angular 2 component!<span [class.is-awesome] = "inputElement.value === 'yes' " >It's so awesome!</span></h1>
    <!--<h1>Hi, I'am {{name}} and this is my first Angular 2 component!<span [class.is-awesome] = "inputElement.value === 'yes' " >It's so awesome!</span></h1>-->
    <br>
    Is it awesome?
    <input type ="text" #inputElement (keyup)="3">

    <!--<button [class.button-display-stauts] = "inputElement.value === 'yes' "> Only enabled if "yes" was entered. </button>-->
    <button [disabled] = "inputElement.value !== 'yes' "> Only enabled if "yes" was entered. </button>
    <test></test>
    `,

    styleUrls: ['src/css/mycomponent.css'],
    directives: [TestComponent]

    })

export class MyComponentComponent implements OnInit {
    name = 'Max'


    ngOnInit():any {
         this.name = "Max";

    }
}



