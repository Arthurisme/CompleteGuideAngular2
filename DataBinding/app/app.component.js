System.register(['angular2/core', "./property-binding.component"], function(exports_1, context_1) {
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
    var core_1, property_binding_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (property_binding_component_1_1) {
                property_binding_component_1 = property_binding_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = "";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\n\n<section class=\"parent\">\n  <h2>This is the parent component</h2>\n    <p>Please enter your name</p>\n    <input type=\"text\" [(ngModel)]=\"name\">\n    <p>{{name}}</p>\n\n       <p>Please enter your age</p>\n    <input type=\"text\" [(ngModel)]=\"age\">\n    <p>{{age}}</p>\n\n<section class=\"child\">\n<my-property-binding [myName]=\"name\" [myAge]=\"age\" ></my-property-binding>\n\n</section>\n\n</section>\n\n\n\n\n\n    ",
                        directives: [property_binding_component_1.PropertyBindingComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQ0E7Z0JBQUE7b0JBRUksU0FBSSxHQUFHLEVBQUUsQ0FBQztnQkFFZCxDQUFDO2dCQXBDRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsc2JBd0JUO3dCQUNELFVBQVUsRUFBQyxDQUFDLHFEQUF3QixDQUFDO3FCQUV4QyxDQUFDOztnQ0FBQTtnQkFPRixtQkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsdUNBSUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQcm9wZXJ0eUJpbmRpbmdDb21wb25lbnR9IGZyb20gXCIuL3Byb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50XCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG5cblxuPHNlY3Rpb24gY2xhc3M9XCJwYXJlbnRcIj5cbiAgPGgyPlRoaXMgaXMgdGhlIHBhcmVudCBjb21wb25lbnQ8L2gyPlxuICAgIDxwPlBsZWFzZSBlbnRlciB5b3VyIG5hbWU8L3A+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJuYW1lXCI+XG4gICAgPHA+e3tuYW1lfX08L3A+XG5cbiAgICAgICA8cD5QbGVhc2UgZW50ZXIgeW91ciBhZ2U8L3A+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJhZ2VcIj5cbiAgICA8cD57e2FnZX19PC9wPlxuXG48c2VjdGlvbiBjbGFzcz1cImNoaWxkXCI+XG48bXktcHJvcGVydHktYmluZGluZyBbbXlOYW1lXT1cIm5hbWVcIiBbbXlBZ2VdPVwiYWdlXCIgPjwvbXktcHJvcGVydHktYmluZGluZz5cblxuPC9zZWN0aW9uPlxuXG48L3NlY3Rpb24+XG5cblxuXG5cblxuICAgIGAsXG4gICAgZGlyZWN0aXZlczpbUHJvcGVydHlCaW5kaW5nQ29tcG9uZW50XVxuXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG4gICAgbmFtZSA9IFwiXCI7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
