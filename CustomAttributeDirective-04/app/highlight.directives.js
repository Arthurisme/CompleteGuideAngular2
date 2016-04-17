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
    var HighlightDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
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
            }());
            exports_1("HighlightDirectives", HighlightDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodC5kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFJSSw2QkFBb0IsTUFBa0IsRUFBVSxTQUFtQjtvQkFBL0MsV0FBTSxHQUFOLE1BQU0sQ0FBWTtvQkFBVSxjQUFTLEdBQVQsU0FBUyxDQUFVO29CQUgzRCxrQkFBYSxHQUFLLE9BQU8sQ0FBQztnQkFLbEMsQ0FBQztnQkFHRCxrQkFBa0I7Z0JBQ2xCLDZFQUE2RTtnQkFDN0UsMEdBQTBHO2dCQUMxRyxnSUFBZ0k7Z0JBQ2hJLEdBQUc7Z0JBRUgsMENBQVksR0FBWjtvQkFFSSxJQUFJLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUVoRSxDQUFDO2dCQUVELDBDQUFZLEdBQVo7b0JBRUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFekIsQ0FBQztnQkFFTyx1Q0FBUyxHQUFqQixVQUFrQixLQUFhO29CQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFFekYsQ0FBQztnQkF2Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsTUFBTSxFQUFDLENBQUMsNkJBQTZCLENBQUM7d0JBQ3RDLElBQUksRUFBRTs0QkFDRixjQUFjLEVBQUUsZ0JBQWdCOzRCQUNoQyxjQUFjLEVBQUUsZ0JBQWdCO3lCQUNuQztxQkFFSixDQUFDOzt1Q0FBQTtnQkFxQ0YsMEJBQUM7WUFBRCxDQXBDQSxBQW9DQyxJQUFBO1lBcENELHFEQW9DQyxDQUFBIiwiZmlsZSI6ImhpZ2hsaWdodC5kaXJlY3RpdmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1JlbmRlcmVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tteWhpZ2hsaWdodF0nLFxuICAgIGlucHV0czpbJ2hpZ2h0TGlnaHRDb2xvcjpteWhpZ2hsaWdodCddLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJyhtb3VzZWVudGVyKSc6ICdvbk1vdXNlRW50ZXIoKScsXG4gICAgICAgICcobW91c2VsZWF2ZSknOiAnb25Nb3VzZUxlYXZlKCknLFxuICAgIH1cblxufSlcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHREaXJlY3RpdmVzICAge1xuICAgIHByaXZhdGUgX2RlZmF1bHRDb2xvciA9ICAgJ2dyZWVuJztcbiAgICBoaWdodExpZ2h0Q29sb3I6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIpe1xuXG4gICAgfVxuXG5cbiAgICAvL25nT25Jbml0KCk6YW55IHtcbiAgICAvLyAgICAvL3RoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5fZGVmYXVsdENvbG9yO1xuICAgIC8vICAgIC8vdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdiYWNrZ3JvdW5kLWNvbG9yJywgdGhpcy5fZGVmYXVsdENvbG9yKTtcbiAgICAvLyAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmQtY29sb3InLCB0aGlzLmhpZ2h0TGlnaHRDb2xvciB8fCB0aGlzLl9kZWZhdWx0Q29sb3IpO1xuICAgIC8vfVxuXG4gICAgb25Nb3VzZUVudGVyKCl7XG5cbiAgICAgICAgdGhpcy5oaWdobGlnaHQoIHRoaXMuaGlnaHRMaWdodENvbG9yIHx8IHRoaXMuX2RlZmF1bHRDb2xvcik7XG5cbiAgICB9XG5cbiAgICBvbk1vdXNlTGVhdmUoKXtcblxuICAgICAgICB0aGlzLmhpZ2hsaWdodChudWxsKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaGlnaGxpZ2h0KGNvbG9yOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmQtY29sb3InLCBjb2xvcik7XG5cbiAgICB9XG5cblxuXG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
