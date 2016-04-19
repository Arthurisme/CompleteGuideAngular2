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
    var unlessDirectives;
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
            unlessDirectives = (function () {
                function unlessDirectives(_templateRef, _viewContainerRef) {
                    this._templateRef = _templateRef;
                    this._viewContainerRef = _viewContainerRef;
                }
                Object.defineProperty(unlessDirectives.prototype, "myUnless", {
                    set: function (condition) {
                        if (!condition) {
                            this._viewContainerRef.createEmbeddedView(this._templateRef);
                        }
                        else {
                            this._viewContainerRef.clear();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                unlessDirectives = __decorate([
                    core_1.Directive({
                        selector: '[myUnless]',
                        inputs: ['myUnless'],
                    }), 
                    __metadata('design:paramtypes', [core_2.TemplateRef, core_3.ViewContainerRef])
                ], unlessDirectives);
                return unlessDirectives;
            })();
            exports_1("unlessDirectives", unlessDirectives);
        }
    }
});
//# sourceMappingURL=unless.directives.js.map