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
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = "Bush";
                    this.value = "";
                }
                AppComponent.prototype.testFunc = function () {
                    return "1 === 1 ";
                };
                AppComponent.prototype.onKeyup = function (value) {
                    this.value += value + '|';
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\n       hello!\n          {{testFunc()}}\n       {{\"Please!\"}}\n        {{name}}\n\n        <br> Event binding <br>\n        <input type=\"text\" [value]=\"name\" [ngClass]=\" {red: true}\" (keyup)=\"onKeyup(inputElement.value)\" #inputElement>\n        <p>{{value}}</p>\n        <br>\n             <br> sample binding <br>\n        <input type=\"text\"   #inputElementS>\n        <p>(inputElementS.value)</p>\n                <br>\n\n        Two way binding\n        <br>\n                <input type=\"text\"  [(ngModel)]=\"name\">\n        <p>Your name: {{name}}</p>\n\n\n\n    ",
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