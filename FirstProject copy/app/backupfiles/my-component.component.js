System.register(['angular2/core', "./test.component"], function(exports_1) {
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
            })();
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});
//# sourceMappingURL=my-component.component.js.map