import {Component} from 'angular2/core';
import {LoggingService} from "./services/logging.service";
import {CalculatorService} from "./services/calculator.service";
import {DataService} from "./services/data.service";

@Component({
    selector: 'my-component2',
    template: `
        <h1>Component 2</h1>
        <input type="text" #message>
        <button (click)="onLog(message.value)">Send</button>

         <input type="text" #num1>
         <input type="text" #num2>
        <button (click)="onMultiply(num1.value,num2.value)">Multiply</button>
        <button (click)="onAdd(num1.value,num2.value)">Add</button>
        <br>
        <p>Result: {{result}}</p>
        <br>
          <p>Random string from service is: {{random}}</p>
        <button (click)="onGetData()">ShowRandom</button>
                <br>
         <input type="text" #newData>
        <button (click)="onInsert(newData.value)">Insert new Data</button>





    `,
    providers:[LoggingService,CalculatorService,DataService]
})
export class Component2Component {

    result = "";
    random :string;

    constructor(private _loggingService: LoggingService, private _calculatorService: CalculatorService, private _dataService: DataService){}

    onLog(massage:string){

        this._loggingService.log(massage);
    }

    onMultiply (num1:number, num2:number) {

        this.result = ""+this._calculatorService.multiply(+num1,+num2)
    }

    onAdd(num1:number, num2:number) {

        this.result = ""+this._calculatorService.add(+num1, +num2)
    }


    onGetData(){
        this.random = this._dataService.getRandomString();
    }

    onInsert( value:string) {
        this._dataService.insert(value);


    }

}
