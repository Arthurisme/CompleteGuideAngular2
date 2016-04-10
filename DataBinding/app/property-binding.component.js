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
    var core_1, core_2, core_3;
    var PropertyBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            }],
        execute: function() {
            PropertyBindingComponent = (function () {
                function PropertyBindingComponent() {
                    this.myName = " ";
                    this.age = 20;
                    this.HobbiesChanged = new core_3.EventEmitter();
                }
                PropertyBindingComponent.prototype.onHobbiesChanged = function (hobbies) {
                    this.HobbiesChanged.emit(hobbies);
                };
                __decorate([
                    core_2.Input('myAge'), 
                    __metadata('design:type', Object)
                ], PropertyBindingComponent.prototype, "age", void 0);
                PropertyBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'my-property-binding',
                        template: "\n<h2>This is the child component</h2>\n<p>Hey {{name}}! I am {{age}} </p>\n<br>\n<h2>What is your hobbies?</h2>\n<input type=\"text\" (keyup)=\"onHobbiesChanged(hobbies.value)\" #hobbies>\n\n\n\n    ",
                        inputs: ['name: myName'],
                        outputs: ['HobbiesChanged'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyBindingComponent);
                return PropertyBindingComponent;
            }());
            exports_1("PropertyBindingComponent", PropertyBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBQUE7b0JBRUksV0FBTSxHQUFHLEdBQUcsQ0FBQztvQkFDSSxRQUFHLEdBQUksRUFBRSxDQUFDO29CQUUxQixtQkFBYyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO2dCQVVqRCxDQUFDO2dCQVBHLG1EQUFnQixHQUFoQixVQUFpQixPQUFjO29CQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFQRDtvQkFBQyxZQUFLLENBQUUsT0FBTyxDQUFDOztxRUFBQTtnQkFyQnBCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjt3QkFDL0IsUUFBUSxFQUFFLDBNQVNUO3dCQUNELE1BQU0sRUFBQyxDQUFDLGNBQWMsQ0FBQzt3QkFDdkIsT0FBTyxFQUFDLENBQUMsZ0JBQWdCLENBQUM7cUJBRTdCLENBQUM7OzRDQUFBO2dCQWtCRiwrQkFBQztZQUFELENBZkEsQUFlQyxJQUFBO1lBZkQsK0RBZUMsQ0FBQSIsImZpbGUiOiJwcm9wZXJ0eS1iaW5kaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SW5wdXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXByb3BlcnR5LWJpbmRpbmcnLFxuICAgIHRlbXBsYXRlOiBgXG48aDI+VGhpcyBpcyB0aGUgY2hpbGQgY29tcG9uZW50PC9oMj5cbjxwPkhleSB7e25hbWV9fSEgSSBhbSB7e2FnZX19IDwvcD5cbjxicj5cbjxoMj5XaGF0IGlzIHlvdXIgaG9iYmllcz88L2gyPlxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGtleXVwKT1cIm9uSG9iYmllc0NoYW5nZWQoaG9iYmllcy52YWx1ZSlcIiAjaG9iYmllcz5cblxuXG5cbiAgICBgLFxuICAgIGlucHV0czpbJ25hbWU6IG15TmFtZSddLFxuICAgIG91dHB1dHM6WydIb2JiaWVzQ2hhbmdlZCddLFxuXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eUJpbmRpbmdDb21wb25lbnQge1xuXG4gICAgbXlOYW1lID0gXCIgXCI7XG4gICAgQElucHV0ICgnbXlBZ2UnKSBhZ2UgID0gMjA7XG5cbiAgICAgSG9iYmllc0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXG4gICAgb25Ib2JiaWVzQ2hhbmdlZChob2JiaWVzOnN0cmluZyl7XG4gICAgICAgIHRoaXMuSG9iYmllc0NoYW5nZWQuZW1pdChob2JiaWVzKTtcbiAgICB9XG5cblxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
