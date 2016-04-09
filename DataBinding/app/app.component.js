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
                }
                AppComponent.prototype.testFunc = function () {
                    return '23';
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\n       hello!\n          {{testFunc()}}\n       {{\"Please!\"}}\n        {{name}}\n\n        <input type=\"text\" [value]=\"name\" [ngClass]=\" {red: true}\">\n\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBQUE7b0JBRUksU0FBSSxHQUFHLE1BQU0sQ0FBQTtnQkFNakIsQ0FBQztnQkFKRywrQkFBUSxHQUFSO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7Z0JBeEJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSw0S0FTVDtxQkFFSixDQUFDOztnQ0FBQTtnQkFhRixtQkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsdUNBUUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuXG4gICAgICAgaGVsbG8hXG4gICAgICAgICAge3t0ZXN0RnVuYygpfX1cbiAgICAgICB7e1wiUGxlYXNlIVwifX1cbiAgICAgICAge3tuYW1lfX1cblxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbdmFsdWVdPVwibmFtZVwiIFtuZ0NsYXNzXT1cIiB7cmVkOiB0cnVlfVwiPlxuXG4gICAgYCxcblxufSlcblxuXG5cblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgICBuYW1lID0gXCJCdXNoXCJcblxuICAgIHRlc3RGdW5jKCl7XG4gICAgICAgIHJldHVybiAnMjMnO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
