import {Component} from 'angular2/core';


@Component({
    selector: 'my-property-binding',
    template: `
<h2>This is the child component</h2>
<p>Hey {{myName}}! I am {{myAge}} </p>


    `,
    inputs:['myName', 'myAge']

})


export class PropertyBindingComponent {

    myName = " ";


}
