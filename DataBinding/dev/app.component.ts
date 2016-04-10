import {Component} from 'angular2/core';
import {PropertyBindingComponent} from "./property-binding.component";


@Component({
    selector: 'my-app',
    template: `


<section class="parent">
  <h2>This is the parent component</h2>
    <p>Please enter your name</p>
    <input type="text" [(ngModel)]="name">
    <p>{{name}}</p>

       <p>Please enter your age</p>
    <input type="text" [(ngModel)]="age">
    <p>{{age}}</p>

<section class="child">
<my-property-binding [myName]="name" [myAge]="26" (HobbiesChanged)="hobbies = $event" ></my-property-binding>

    <p>(in partent page:) {{hobbies}}</p>


</section>

</section>





    `,
    directives:[PropertyBindingComponent]

})


export class AppComponent {

    name = "";
    hobbies = "";

}
