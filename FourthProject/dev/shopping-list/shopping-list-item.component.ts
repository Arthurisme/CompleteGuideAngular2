import {Component} from 'angular2/core';
import {EventEmitter} from "angular2/core";
import {ListItem} from "../list-item";
import {ShoppingListService} from "./shopping-list.service";

@Component({
    selector: 'shopping-list-item',
    template: `


        <div class="input">
            <label for="item-name">Name</label>
            <input type="text" id="item-name"  [(ngModel)]="item.name">
        </div>

        <div class="input">
            <label for="item-amt">Amount</label>
            <input type="text" id="item-amt"  [(ngModel)]="item.amount">
        </div>

       <button (click)="onClick()">Remove Item</button>
    `,
    outputs:['removed'],
    inputs:['item']
})
export class ShoppingListItemComponent {
    item =  {name: '', amount: 0};
    removed = new EventEmitter<any>();


    constructor (private _shoppingListService: ShoppingListService ){}


    onClick(){
        this._shoppingListService.deleteItem({name:this.item.name,amount:this.item.amount});
        this.removed.emit(null);


    }

}
