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
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQ0E7Z0JBQUE7b0JBRUksU0FBSSxHQUFHLE1BQU0sQ0FBQztvQkFDZCxVQUFLLEdBQUcsRUFBRSxDQUFDO2dCQVVmLENBQUM7Z0JBUkcsK0JBQVEsR0FBUjtvQkFDSSxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUN0QixDQUFDO2dCQUVELDhCQUFPLEdBQVAsVUFBUSxLQUFZO29CQUNoQixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQzlCLENBQUM7Z0JBekNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSw0a0JBdUJUO3FCQUVKLENBQUM7O2dDQUFBO2dCQWdCRixtQkFBQztZQUFELENBYkEsQUFhQyxJQUFBO1lBYkQsdUNBYUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuXG4gICAgICAgaGVsbG8hXG4gICAgICAgICAge3t0ZXN0RnVuYygpfX1cbiAgICAgICB7e1wiUGxlYXNlIVwifX1cbiAgICAgICAge3tuYW1lfX1cblxuICAgICAgICA8YnI+IEV2ZW50IGJpbmRpbmcgPGJyPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbdmFsdWVdPVwibmFtZVwiIFtuZ0NsYXNzXT1cIiB7cmVkOiB0cnVlfVwiIChrZXl1cCk9XCJvbktleXVwKGlucHV0RWxlbWVudC52YWx1ZSlcIiAjaW5wdXRFbGVtZW50PlxuICAgICAgICA8cD57e3ZhbHVlfX08L3A+XG4gICAgICAgIDxicj5cbiAgICAgICAgICAgICA8YnI+IHNhbXBsZSBiaW5kaW5nIDxicj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgICAjaW5wdXRFbGVtZW50Uz5cbiAgICAgICAgPHA+KGlucHV0RWxlbWVudFMudmFsdWUpPC9wPlxuICAgICAgICAgICAgICAgIDxicj5cblxuICAgICAgICBUd28gd2F5IGJpbmRpbmdcbiAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICBbKG5nTW9kZWwpXT1cIm5hbWVcIj5cbiAgICAgICAgPHA+WW91ciBuYW1lOiB7e25hbWV9fTwvcD5cblxuXG5cbiAgICBgLFxuXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG4gICAgbmFtZSA9IFwiQnVzaFwiO1xuICAgIHZhbHVlID0gXCJcIjtcblxuICAgIHRlc3RGdW5jKCkge1xuICAgICAgICByZXR1cm4gXCIxID09PSAxIFwiO1xuICAgIH1cblxuICAgIG9uS2V5dXAodmFsdWU6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMudmFsdWUgKz0gdmFsdWUgKyAnfCc7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
