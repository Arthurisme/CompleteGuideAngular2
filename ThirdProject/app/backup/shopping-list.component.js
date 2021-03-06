System.register(['angular2/core', "./shopping-list-new-item.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, shopping_list_new_item_component_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_new_item_component_1_1) {
                shopping_list_new_item_component_1 = shopping_list_new_item_component_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.item = { name: '', amount: 0 };
                    this.listItems = new Array();
                }
                ShoppingListComponent.prototype.onItemAdded = function (name, amount) {
                    this.listItems.push({ name: name, amount: amount });
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n        <section>\n            <!--<shopping-list-new-item (itemAdded)=\"onItemAdded($event)\"></shopping-list-new-item>-->\n                                                <div class=\"input\">\n                                        <label for=\"item-name\">Name</label>\n                                        <input type=\"text\" id=\"item-name\"  [(ngModel)]=\"item.name\" #itemname>\n                                    </div>\n\n                                    <div class=\"input\">\n                                        <label for=\"item-amt\">Amount</label>\n                                        <input type=\"text\" id=\"item-amt\"  [(ngModel)]=\"item.amount\" #itemamount>\n                                    </div>\n\n                                   <button (click)=\"onItemAdded(itemname.value, itemamount.value)\">Add Item</button>\n\n        </section>\n\n        <section>\n            <h3>My List</h3>\n            <div class=\"list\">\n               <ul>\n               <li *ngFor=\"#listItem of listItems \">{{listItem.name}} ({{listItem.amount}})</li>\n               </ul>\n            </div>\n        </section>\n\n        <section>\n            Edit Item\n        </section>\n    ",
                        directives: [shopping_list_new_item_component_1.ShoppingListNewItemComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            })();
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});
//# sourceMappingURL=shopping-list.component.js.map