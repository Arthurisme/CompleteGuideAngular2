System.register(['angular2/core', "angular2/core"], function(exports_1) {
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
            },
            function (core_2_1) {
                core_2 = core_2_1;
                core_3 = core_2_1;
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
                        template: "\n<h2>This is the child component</h2>\n<p>Hey {{name}}! I am {{age}} </p>\n<br>\n<h2>What is your hobbies?</h2>\n<!--<input type=\"text\" (keyup)=\"onHobbiesChanged(hobbies.value)\" #hobbies>-->\n<input type=\"text\"#hobbies>\n<button  (click)=\"onHobbiesChanged(hobbies.value)\" >test hobbies changed</button>\n\n\n\n    ",
                        inputs: ['name: myName'],
                        outputs: ['HobbiesChanged'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyBindingComponent);
                return PropertyBindingComponent;
            })();
            exports_1("PropertyBindingComponent", PropertyBindingComponent);
        }
    }
});
//# sourceMappingURL=property-binding.component.js.map