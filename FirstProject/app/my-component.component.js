System.register(['angular2/core', "./test.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, test_component_1;
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                    this.name = 'Max';
                }
                MyComponentComponent.prototype.ngOnInit = function () {
                    this.name = "Max";
                };
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n    <h1>Hi, I'am <span [style.color] = \"inputElement.value === 'yes' ? 'red' : '' \" > {{name}} </span> and this is my first Angular 2 component!<span [class.is-awesome] = \"inputElement.value === 'yes' \" >It's so awesome!</span></h1>\n    <!--<h1>Hi, I'am {{name}} and this is my first Angular 2 component!<span [class.is-awesome] = \"inputElement.value === 'yes' \" >It's so awesome!</span></h1>-->\n    <br>\n    Is it awesome?\n    <input type =\"text\" #inputElement (keyup)=\"3\">\n\n    <!--<button [class.button-display-stauts] = \"inputElement.value === 'yes' \"> Only enabled if \"yes\" was entered. </button>-->\n    <button [disabled] = \"inputElement.value !== 'yes' \"> Only enabled if \"yes\" was entered. </button>\n    <test></test>\n    ",
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [test_component_1.TestComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3QkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFHLEtBQUssQ0FBQTtnQkFPaEIsQ0FBQztnQkFKRyx1Q0FBUSxHQUFSO29CQUNLLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUV2QixDQUFDO2dCQTNCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUVQLFFBQVEsRUFBQyxjQUFjO3dCQUN2QixRQUFRLEVBQUUseXZCQVVUO3dCQUVELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN0QyxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3FCQUUxQixDQUFDOzt3Q0FBQTtnQkFVTiwyQkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsdURBUUMsQ0FBQSIsImZpbGUiOiJteS1jb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtUZXN0Q29tcG9uZW50fSBmcm9tIFwiLi90ZXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuXG4gICAgc2VsZWN0b3I6J215LWNvbXBvbmVudCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8aDE+SGksIEknYW0gPHNwYW4gW3N0eWxlLmNvbG9yXSA9IFwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAneWVzJyA/ICdyZWQnIDogJycgXCIgPiB7e25hbWV9fSA8L3NwYW4+IGFuZCB0aGlzIGlzIG15IGZpcnN0IEFuZ3VsYXIgMiBjb21wb25lbnQhPHNwYW4gW2NsYXNzLmlzLWF3ZXNvbWVdID0gXCJpbnB1dEVsZW1lbnQudmFsdWUgPT09ICd5ZXMnIFwiID5JdCdzIHNvIGF3ZXNvbWUhPC9zcGFuPjwvaDE+XG4gICAgPCEtLTxoMT5IaSwgSSdhbSB7e25hbWV9fSBhbmQgdGhpcyBpcyBteSBmaXJzdCBBbmd1bGFyIDIgY29tcG9uZW50ITxzcGFuIFtjbGFzcy5pcy1hd2Vzb21lXSA9IFwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAneWVzJyBcIiA+SXQncyBzbyBhd2Vzb21lITwvc3Bhbj48L2gxPi0tPlxuICAgIDxicj5cbiAgICBJcyBpdCBhd2Vzb21lP1xuICAgIDxpbnB1dCB0eXBlID1cInRleHRcIiAjaW5wdXRFbGVtZW50IChrZXl1cCk9XCIzXCI+XG5cbiAgICA8IS0tPGJ1dHRvbiBbY2xhc3MuYnV0dG9uLWRpc3BsYXktc3RhdXRzXSA9IFwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAneWVzJyBcIj4gT25seSBlbmFibGVkIGlmIFwieWVzXCIgd2FzIGVudGVyZWQuIDwvYnV0dG9uPi0tPlxuICAgIDxidXR0b24gW2Rpc2FibGVkXSA9IFwiaW5wdXRFbGVtZW50LnZhbHVlICE9PSAneWVzJyBcIj4gT25seSBlbmFibGVkIGlmIFwieWVzXCIgd2FzIGVudGVyZWQuIDwvYnV0dG9uPlxuICAgIDx0ZXN0PjwvdGVzdD5cbiAgICBgLFxuXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvbXljb21wb25lbnQuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW1Rlc3RDb21wb25lbnRdXG5cbiAgICB9KVxuXG5leHBvcnQgY2xhc3MgTXlDb21wb25lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG5hbWUgPSAnTWF4J1xuXG5cbiAgICBuZ09uSW5pdCgpOmFueSB7XG4gICAgICAgICB0aGlzLm5hbWUgPSBcIk1heFwiO1xuXG4gICAgfVxufVxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
