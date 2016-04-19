import {Component} from 'angular2/core';
import {EventEmitter} from "angular2/core";
import {ListItem} from "../list-item";

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
    outputs:['itemRemoved'],
    inputs:['item']
})
export class ShoppingListItemComponent {
    item =  {name: '', amount: 0};
    itemRemoved = new EventEmitter<ListItem>();

    onClick(){
        this.itemRemoved.emit(this.item);
    }

}
