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
                    this.hobbies = "";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\n\n<section class=\"parent\">\n  <h2>This is the parent component</h2>\n    <p>Please enter your name</p>\n    <input type=\"text\" [(ngModel)]=\"name\">\n    <p>{{name}}</p>\n\n       <p>Please enter your age</p>\n    <input type=\"text\" [(ngModel)]=\"age\">\n    <p>{{age}}</p>\n\n<section class=\"child\">\n<my-property-binding [myName]=\"name\" [myAge]=\"26\" (HobbiesChanged)=\"hobbies = $event\" ></my-property-binding>\n\n    <p>(in partent page:) {{hobbies}}</p>\n\n\n</section>\n\n</section>\n\n\n\n\n\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1Q0E7Z0JBQUE7b0JBRUksU0FBSSxHQUFHLEVBQUUsQ0FBQztvQkFDVixZQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUVqQixDQUFDO2dCQXhDRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsMGdCQTJCVDt3QkFDRCxVQUFVLEVBQUMsQ0FBQyxxREFBd0IsQ0FBQztxQkFFeEMsQ0FBQzs7Z0NBQUE7Z0JBUUYsbUJBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELHVDQUtDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UHJvcGVydHlCaW5kaW5nQ29tcG9uZW50fSBmcm9tIFwiLi9wcm9wZXJ0eS1iaW5kaW5nLmNvbXBvbmVudFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuXG5cbjxzZWN0aW9uIGNsYXNzPVwicGFyZW50XCI+XG4gIDxoMj5UaGlzIGlzIHRoZSBwYXJlbnQgY29tcG9uZW50PC9oMj5cbiAgICA8cD5QbGVhc2UgZW50ZXIgeW91ciBuYW1lPC9wPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibmFtZVwiPlxuICAgIDxwPnt7bmFtZX19PC9wPlxuXG4gICAgICAgPHA+UGxlYXNlIGVudGVyIHlvdXIgYWdlPC9wPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiYWdlXCI+XG4gICAgPHA+e3thZ2V9fTwvcD5cblxuPHNlY3Rpb24gY2xhc3M9XCJjaGlsZFwiPlxuPG15LXByb3BlcnR5LWJpbmRpbmcgW215TmFtZV09XCJuYW1lXCIgW215QWdlXT1cIjI2XCIgKEhvYmJpZXNDaGFuZ2VkKT1cImhvYmJpZXMgPSAkZXZlbnRcIiA+PC9teS1wcm9wZXJ0eS1iaW5kaW5nPlxuXG4gICAgPHA+KGluIHBhcnRlbnQgcGFnZTopIHt7aG9iYmllc319PC9wPlxuXG5cbjwvc2VjdGlvbj5cblxuPC9zZWN0aW9uPlxuXG5cblxuXG5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6W1Byb3BlcnR5QmluZGluZ0NvbXBvbmVudF1cblxufSlcblxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuICAgIG5hbWUgPSBcIlwiO1xuICAgIGhvYmJpZXMgPSBcIlwiO1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
