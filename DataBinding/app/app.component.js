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
                        template: "\n\n\n<section class=\"parent\">\n  <h2>This is the parent component</h2>\n    <p>Please enter your name</p>\n    <input type=\"text\" [(ngModel)]=\"name\">\n    <p>{{name}}</p>\n\n  <h2>Test two way binding</h2>\n\n    <input type=\"text\" [(ngModel)]=\"testtwoway\">\n  <input type=\"text\" [(ngModel)]=\"testtwoway\">\n\n    <p>{{testtwoway}}</p>\n    <p>{{testtwoway}}</p>\n    <p>{{testtwoway}}</p>\n\n       <p>Please enter your age</p>\n    <input type=\"text\" [(ngModel)]=\"age\">\n    <p>{{age}}</p>\n\n<section class=\"child\">\n<my-property-binding [myName]=\"name\" [myAge]=\"26\" (HobbiesChanged)=\"hobbies = $event\" ></my-property-binding>\n\n    <p>(in partent page:) {{hobbies}}</p>\n\n\n</section>\n\n</section>\n\n\n\n\n\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnREE7Z0JBQUE7b0JBRUksU0FBSSxHQUFHLEVBQUUsQ0FBQztvQkFDVixZQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUVqQixDQUFDO2dCQWpERDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsNHVCQW9DVDt3QkFDRCxVQUFVLEVBQUMsQ0FBQyxxREFBd0IsQ0FBQztxQkFFeEMsQ0FBQzs7Z0NBQUE7Z0JBUUYsbUJBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELHVDQUtDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UHJvcGVydHlCaW5kaW5nQ29tcG9uZW50fSBmcm9tIFwiLi9wcm9wZXJ0eS1iaW5kaW5nLmNvbXBvbmVudFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuXG5cbjxzZWN0aW9uIGNsYXNzPVwicGFyZW50XCI+XG4gIDxoMj5UaGlzIGlzIHRoZSBwYXJlbnQgY29tcG9uZW50PC9oMj5cbiAgICA8cD5QbGVhc2UgZW50ZXIgeW91ciBuYW1lPC9wPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibmFtZVwiPlxuICAgIDxwPnt7bmFtZX19PC9wPlxuXG4gIDxoMj5UZXN0IHR3byB3YXkgYmluZGluZzwvaDI+XG5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cInRlc3R0d293YXlcIj5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJ0ZXN0dHdvd2F5XCI+XG5cbiAgICA8cD57e3Rlc3R0d293YXl9fTwvcD5cbiAgICA8cD57e3Rlc3R0d293YXl9fTwvcD5cbiAgICA8cD57e3Rlc3R0d293YXl9fTwvcD5cblxuICAgICAgIDxwPlBsZWFzZSBlbnRlciB5b3VyIGFnZTwvcD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImFnZVwiPlxuICAgIDxwPnt7YWdlfX08L3A+XG5cbjxzZWN0aW9uIGNsYXNzPVwiY2hpbGRcIj5cbjxteS1wcm9wZXJ0eS1iaW5kaW5nIFtteU5hbWVdPVwibmFtZVwiIFtteUFnZV09XCIyNlwiIChIb2JiaWVzQ2hhbmdlZCk9XCJob2JiaWVzID0gJGV2ZW50XCIgPjwvbXktcHJvcGVydHktYmluZGluZz5cblxuICAgIDxwPihpbiBwYXJ0ZW50IHBhZ2U6KSB7e2hvYmJpZXN9fTwvcD5cblxuXG48L3NlY3Rpb24+XG5cbjwvc2VjdGlvbj5cblxuXG5cblxuXG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOltQcm9wZXJ0eUJpbmRpbmdDb21wb25lbnRdXG5cbn0pXG5cblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgICBuYW1lID0gXCJcIjtcbiAgICBob2JiaWVzID0gXCJcIjtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
