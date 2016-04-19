import {Component} from 'angular2/core';
import {ShoppingListNewItemComponent} from "./shopping-list-new-item.component";

@Component({
    selector: 'shopping-list',
    template: `
        <section>
            <!--<shopping-list-new-item (itemAdded)="onItemAdded($event)"></shopping-list-new-item>-->
                                                <div class="input">
                                        <label for="item-name">Name</label>
                                        <input type="text" id="item-name"  [(ngModel)]="item.name" #itemname>
                                    </div>

                                    <div class="input">
                                        <label for="item-amt">Amount</label>
                                        <input type="text" id="item-amt"  [(ngModel)]="item.amount" #itemamount>
                                    </div>

                                   <button (click)="onItemAdded(itemname.value, itemamount.value)">Add Item</button>

        </section>

        <section>
            <h3>My List</h3>
            <div class="list">
               <ul>
               <li *ngFor="#listItem of listItems ">{{listItem.name}} ({{listItem.amount}})</li>
               </ul>
            </div>
        </section>

        <section>
            Edit Item
        </section>
    `,
    directives:[ShoppingListNewItemComponent]
})
export class ShoppingListComponent {
    item =  {name: '', amount: 0};


    listItems = new Array<{name: string, amount: number}>();

    onItemAdded(name:string, amount:number ){
        this.listItems.push({name: name, amount:  amount});

    }

}
