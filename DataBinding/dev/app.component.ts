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

  <h2>Test two way binding</h2>

    <input type="text" [(ngModel)]="testtwoway">
  <input type="text" [(ngModel)]="testtwoway">

    <p>{{testtwoway}}</p>
    <p>{{testtwoway}}</p>
    <p>{{testtwoway}}</p>

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
