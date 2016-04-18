System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var StructuralDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StructuralDirectives = (function () {
                function StructuralDirectives() {
                    this.listt = ['Apple', 'Milk', 'Bread'];
                }
                StructuralDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-structural-directives',
                        template: "\n        <section class=\"directive\">\n            <h2>*ngidf</h2>\n            <div>\n                <h2>Input a number higher than 10:</h2>\n                <input type=\"text\" #number (keyup)=\"0\">\n            </div>\n\n            <div *ngIf = \"number.value > 10\">\n               <h5>A heading</h5>\n               <h2>Number is greater than 10.</h2>\n            </div>\n        </section>\n\n        <section class=\"directive\">\n            <h2>*ngFor</h2>\n            <div>\n               <ul>\n               <li *ngFor =\"#itemm of listt, #i = index   \">{{itemm}} {{i}}</li>\n               </ul>\n            </div>\n        </section>\n\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructuralDirectives);
                return StructuralDirectives;
            }());
            exports_1("StructuralDirectives", StructuralDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyYWwtZGlyZWN0aXZlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4QkE7Z0JBQUE7b0JBQ0ksVUFBSyxHQUFFLENBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsQ0FBQTtnQkFFbkMsQ0FBQztnQkEvQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsMEJBQTBCO3dCQUNwQyxRQUFRLEVBQUUsNnBCQXVCVDtxQkFFSixDQUFDOzt3Q0FBQTtnQkFJRiwyQkFBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSEQsdURBR0MsQ0FBQSIsImZpbGUiOiJzdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXN0cnVjdHVyYWwtZGlyZWN0aXZlcycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJkaXJlY3RpdmVcIj5cbiAgICAgICAgICAgIDxoMj4qbmdpZGY8L2gyPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+SW5wdXQgYSBudW1iZXIgaGlnaGVyIHRoYW4gMTA6PC9oMj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbnVtYmVyIChrZXl1cCk9XCIwXCI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiAqbmdJZiA9IFwibnVtYmVyLnZhbHVlID4gMTBcIj5cbiAgICAgICAgICAgICAgIDxoNT5BIGhlYWRpbmc8L2g1PlxuICAgICAgICAgICAgICAgPGgyPk51bWJlciBpcyBncmVhdGVyIHRoYW4gMTAuPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJkaXJlY3RpdmVcIj5cbiAgICAgICAgICAgIDxoMj4qbmdGb3I8L2gyPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgIDxsaSAqbmdGb3IgPVwiI2l0ZW1tIG9mIGxpc3R0LCAjaSA9IGluZGV4ICAgXCI+e3tpdGVtbX19IHt7aX19PC9saT5cbiAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgYCxcblxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmFsRGlyZWN0aXZlcyB7XG4gICAgbGlzdHQgPVsnQXBwbGUnLCdNaWxrJywnQnJlYWQnXVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
