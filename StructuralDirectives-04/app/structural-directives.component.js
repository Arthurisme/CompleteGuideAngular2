System.register(['angular2/core', "./unless.directives"], function(exports_1, context_1) {
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
    var core_1, unless_directives_1;
    var StructuralDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (unless_directives_1_1) {
                unless_directives_1 = unless_directives_1_1;
            }],
        execute: function() {
            StructuralDirectives = (function () {
                function StructuralDirectives() {
                    this.listt = ['Apple', 'Milk', 'Bread'];
                }
                StructuralDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-structural-directives',
                        template: "\n        <section class=\"directive\">\n            <h2>*ngidf</h2>\n            <div>\n                <h2>Input a number higher than 10:</h2>\n                <input type=\"text\" #number (keyup)=\"0\">\n            </div>\n\n            <div *ngIf = \"number.value > 10\">\n               <h5>A heading</h5>\n               <h2>Number is greater than 10.</h2>\n            </div>\n        </section>\n\n        <section class=\"directive\">\n            <h2>*ngFor</h2>\n            <div>\n               <ul>\n               <li *ngFor =\"#itemm of listt, #i = index   \">{{itemm}} {{i}}</li>\n               </ul>\n            </div>\n        </section>\n\n        <section class=\"directive\">\n            <h2>[ngSwitch]</h2>\n            <div>\n               <input type=\"text\" #color (keyup)=\"0\">\n               <div [ngSwitch]=\"color.value\">\n               <template [ngSwitchWhen]=\"'red'\" > <span style=\"color:red\" >red</span></template>\n               <template [ngSwitchWhen]=\"'blue'\" > <span style=\"color:blue\" >blue</span></template>\n               <template [ngSwitchWhen]=\"'green'\" > <span style=\"color:green\" >green</span></template>\n               <template [ngSwitchWhen]=\"'yellow'\" > <span style=\"color:yellow\" >yellow</span></template>\n               <template  ngSwitchDefault  > <span style=\"color:black\" >It is still difficult to find what color you input</span></template>\n               </div>\n            </div>\n        </section>\n\n        <section class=\"directive\">\n            <h2>Custom   directive</h2>\n            <div>\n               <input type=\"text\" #condition (keyup)=\"0\">\n               <div *myUnless = \"condition.value != 'false'\">             False               </div>\n            </div>\n        </section>\n\n    ",
                        directives: [unless_directives_1.unlessDirectives]
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructuralDirectives);
                return StructuralDirectives;
            }());
            exports_1("StructuralDirectives", StructuralDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyYWwtZGlyZWN0aXZlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1REE7Z0JBQUE7b0JBQ0ksVUFBSyxHQUFFLENBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsQ0FBQTtnQkFFbkMsQ0FBQztnQkF2REQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsMEJBQTBCO3dCQUNwQyxRQUFRLEVBQUUsbXhEQTZDVDt3QkFFRCxVQUFVLEVBQUMsQ0FBQyxvQ0FBZ0IsQ0FBQztxQkFFaEMsQ0FBQzs7d0NBQUE7Z0JBSUYsMkJBQUM7WUFBRCxDQUhBLEFBR0MsSUFBQTtZQUhELHVEQUdDLENBQUEiLCJmaWxlIjoic3RydWN0dXJhbC1kaXJlY3RpdmVzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7dW5sZXNzRGlyZWN0aXZlc30gZnJvbSBcIi4vdW5sZXNzLmRpcmVjdGl2ZXNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XG4gICAgICAgICAgICA8aDI+Km5naWRmPC9oMj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPklucHV0IGEgbnVtYmVyIGhpZ2hlciB0aGFuIDEwOjwvaDI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI251bWJlciAoa2V5dXApPVwiMFwiPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgKm5nSWYgPSBcIm51bWJlci52YWx1ZSA+IDEwXCI+XG4gICAgICAgICAgICAgICA8aDU+QSBoZWFkaW5nPC9oNT5cbiAgICAgICAgICAgICAgIDxoMj5OdW1iZXIgaXMgZ3JlYXRlciB0aGFuIDEwLjwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XG4gICAgICAgICAgICA8aDI+Km5nRm9yPC9oMj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICA8bGkgKm5nRm9yID1cIiNpdGVtbSBvZiBsaXN0dCwgI2kgPSBpbmRleCAgIFwiPnt7aXRlbW19fSB7e2l9fTwvbGk+XG4gICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImRpcmVjdGl2ZVwiPlxuICAgICAgICAgICAgPGgyPltuZ1N3aXRjaF08L2gyPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNjb2xvciAoa2V5dXApPVwiMFwiPlxuICAgICAgICAgICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwiY29sb3IudmFsdWVcIj5cbiAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBbbmdTd2l0Y2hXaGVuXT1cIidyZWQnXCIgPiA8c3BhbiBzdHlsZT1cImNvbG9yOnJlZFwiID5yZWQ8L3NwYW4+PC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBbbmdTd2l0Y2hXaGVuXT1cIidibHVlJ1wiID4gPHNwYW4gc3R5bGU9XCJjb2xvcjpibHVlXCIgPmJsdWU8L3NwYW4+PC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBbbmdTd2l0Y2hXaGVuXT1cIidncmVlbidcIiA+IDxzcGFuIHN0eWxlPVwiY29sb3I6Z3JlZW5cIiA+Z3JlZW48L3NwYW4+PC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBbbmdTd2l0Y2hXaGVuXT1cIid5ZWxsb3cnXCIgPiA8c3BhbiBzdHlsZT1cImNvbG9yOnllbGxvd1wiID55ZWxsb3c8L3NwYW4+PC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAgbmdTd2l0Y2hEZWZhdWx0ICA+IDxzcGFuIHN0eWxlPVwiY29sb3I6YmxhY2tcIiA+SXQgaXMgc3RpbGwgZGlmZmljdWx0IHRvIGZpbmQgd2hhdCBjb2xvciB5b3UgaW5wdXQ8L3NwYW4+PC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImRpcmVjdGl2ZVwiPlxuICAgICAgICAgICAgPGgyPkN1c3RvbSAgIGRpcmVjdGl2ZTwvaDI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2NvbmRpdGlvbiAoa2V5dXApPVwiMFwiPlxuICAgICAgICAgICAgICAgPGRpdiAqbXlVbmxlc3MgPSBcImNvbmRpdGlvbi52YWx1ZSAhPSAnZmFsc2UnXCI+ICAgICAgICAgICAgIEZhbHNlICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgYCxcblxuICAgIGRpcmVjdGl2ZXM6W3VubGVzc0RpcmVjdGl2ZXNdXG5cbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJhbERpcmVjdGl2ZXMge1xuICAgIGxpc3R0ID1bJ0FwcGxlJywnTWlsaycsJ0JyZWFkJ11cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
