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
    var HighlightDirectives;
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
            HighlightDirectives = (function () {
                function HighlightDirectives(_elRef, _renderer) {
                    this._elRef = _elRef;
                    this._renderer = _renderer;
                    this._defaultColor = 'green';
                }
                //ngOnInit():any {
                //    //this._elRef.nativeElement.style.backgroundColor = this._defaultColor;
                //    //this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', this._defaultColor);
                //    this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', this.hightLightColor || this._defaultColor);
                //}
                HighlightDirectives.prototype.onMouseEnter = function () {
                    this.highlight(this.hightLightColor || this._defaultColor);
                };
                HighlightDirectives.prototype.onMouseLeave = function () {
                    this.highlight(null);
                };
                HighlightDirectives.prototype.highlight = function (color) {
                    this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', color);
                };
                HighlightDirectives = __decorate([
                    core_1.Directive({
                        selector: '[myhighlight]',
                        inputs: ['hightLightColor:myhighlight'],
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseleave)': 'onMouseLeave()',
                        }
                    }), 
                    __metadata('design:paramtypes', [core_2.ElementRef, core_3.Renderer])
                ], HighlightDirectives);
                return HighlightDirectives;
            })();
            exports_1("HighlightDirectives", HighlightDirectives);
        }
    }
});
//# sourceMappingURL=highlight.directives.js.map