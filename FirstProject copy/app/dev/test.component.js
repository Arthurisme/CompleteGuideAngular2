System.register(['angular2/core'], function(exports_1) {
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
    var TestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TestComponent = (function () {
                function TestComponent() {
                }
                TestComponent = __decorate([
                    core_1.Component({
                        selector: 'test',
                        templateUrl: 'templates/test.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TestComponent);
                return TestComponent;
            })();
            exports_1("TestComponent", TestComponent);
        }
    }
});
//import {Component} from 'angular2/core';
//import {MyComponentComponent} from "./my-component.component";
//
//@Component({
//    selector: 'my-app',
//    template: `
//        <h1>Angular 2 Boilerplate</h1>
//        <p>Hello World!!!</p>
//        <my-component>Loading...</my-component>
//
//    `,
//    directives: [MyComponentComponent]
//})
//
//
//
//
//export class AppComponent {
//
//}
//# sourceMappingURL=test.component.js.map