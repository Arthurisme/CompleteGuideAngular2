System.register(['angular2/core', "./property-binding.component"], function(exports_1) {
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
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map