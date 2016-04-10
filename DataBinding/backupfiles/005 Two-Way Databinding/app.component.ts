import {Component} from 'angular2/core';


@Component({
    selector: 'my-app',
    template: `

       hello!
          {{testFunc()}}
       {{"Please!"}}
        {{name}}

        <br> Event binding <br>
        <input type="text" [value]="name" [ngClass]=" {red: true}" (keyup)="onKeyup(inputElement.value)" #inputElement>
        <p>{{value}}</p>
        <br>
             <br> sample binding <br>
        <input type="text"   #inputElementS>
        <p>(inputElementS.value)</p>
                <br>

        Two way binding
        <br>
                <input type="text"  [(ngModel)]="name">
        <p>Your name: {{name}}</p>



    `,

})


export class AppComponent {

    name = "Bush";
    value = "";

    testFunc() {
        return "1 === 1 ";
    }

    onKeyup(value:string) {
        this.value += value + '|';
    }

}
