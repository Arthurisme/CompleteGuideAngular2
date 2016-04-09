import {Component} from 'angular2/core';


@Component({
    selector: 'my-app',
    template: `

       hello!
          {{testFunc()}}
       {{"Please!"}}
        {{name}}

        <input type="text" [value]="name" [ngClass]=" {red: true}">

    `,

})




export class AppComponent {

    name = "Bush"

    testFunc(){
        return '23';
    }

}
