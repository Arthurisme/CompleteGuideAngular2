import {Component} from 'angular2/core';
import {Component1Component} from "./component1.component";
import {Component2Component} from "./component2.component";

@Component({
    selector: 'my-app',
    template: `
    <my-component1></my-component1>
    <br>
    <my-component2></my-component2>

    `,

    directives:[Component1Component,Component2Component]
})
export class AppComponent {

}
