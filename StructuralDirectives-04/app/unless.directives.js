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
    var unlessDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
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
            }());
            exports_1("unlessDirectives", unlessDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVubGVzcy5kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFHSSwwQkFBb0IsWUFBeUIsRUFBVSxpQkFBbUM7b0JBQXRFLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7Z0JBRTFGLENBQUM7Z0JBRUQsc0JBQUksc0NBQVE7eUJBQVosVUFBYSxTQUFrQjt3QkFDM0IsRUFBRSxDQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDOzRCQUNYLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQ2pFLENBQUM7d0JBQUEsSUFBSSxDQUFBLENBQUM7NEJBQ0YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNuQyxDQUFDO29CQUVMLENBQUM7OzttQkFBQTtnQkFwQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsTUFBTSxFQUFDLENBQUMsVUFBVSxDQUFDO3FCQUd0QixDQUFDOztvQ0FBQTtnQkF1QkYsdUJBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELCtDQXNCQyxDQUFBIiwiZmlsZSI6InVubGVzcy5kaXJlY3RpdmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5pbXBvcnQge1RlbXBsYXRlUmVmfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtWaWV3Q29udGFpbmVyUmVmfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tteVVubGVzc10nLFxuICAgIGlucHV0czpbJ215VW5sZXNzJ10sXG5cblxufSlcbmV4cG9ydCBjbGFzcyB1bmxlc3NEaXJlY3RpdmVzICAge1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWYsIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpe1xuXG4gICAgfVxuXG4gICAgc2V0IG15VW5sZXNzKGNvbmRpdGlvbjogYm9vbGVhbil7XG4gICAgICAgIGlmKCFjb25kaXRpb24pe1xuICAgICAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5fdGVtcGxhdGVSZWYpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuXG5cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
