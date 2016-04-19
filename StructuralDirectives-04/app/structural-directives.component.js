System.register(['angular2/core', "./unless.directives"], function(exports_1) {
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
            })();
            exports_1("StructuralDirectives", StructuralDirectives);
        }
    }
});
//# sourceMappingURL=structural-directives.component.js.map