System.register(['angular2/core', "./bindings/input.component"], function(exports_1, context_1) {
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
    var core_1, input_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.myself = { name: '', age: '' };
                    this.confirmedMyself = { name: '', age: '' };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <div class=\"container\">\n           <my-input (submitted)=\"onSubmit($event)\"></my-input>\n        </div>\n\n        <div class=\"container\">\n           ...\n        </div>\n\n    ",
                        directives: [input_component_1.InputComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQUE7b0JBQ0ksV0FBTSxHQUFHLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUMsRUFBRSxFQUFDLENBQUM7b0JBQzNCLG9CQUFlLEdBQUcsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBQyxFQUFFLEVBQUMsQ0FBQztnQkFFeEMsQ0FBQztnQkFsQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLHFNQVNUO3dCQUNELFVBQVUsRUFBQyxDQUFDLGdDQUFjLENBQUM7cUJBQzlCLENBQUM7O2dDQUFBO2dCQUtGLG1CQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFKRCx1Q0FJQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0lucHV0Q29tcG9uZW50fSBmcm9tIFwiLi9iaW5kaW5ncy9pbnB1dC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgPG15LWlucHV0IChzdWJtaXR0ZWQpPVwib25TdWJtaXQoJGV2ZW50KVwiPjwvbXktaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgLi4uXG4gICAgICAgIDwvZGl2PlxuXG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOltJbnB1dENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBteXNlbGYgPSB7bmFtZTonJywgYWdlOicnfTtcbiAgICBjb25maXJtZWRNeXNlbGYgPSB7bmFtZTonJywgYWdlOicnfTtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
