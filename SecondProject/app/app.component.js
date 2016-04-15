System.register(['angular2/core', "./bindings/input.component", "./bindings/confirm.component"], function(exports_1, context_1) {
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
    var core_1, input_component_1, confirm_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (confirm_component_1_1) {
                confirm_component_1 = confirm_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.myself = { name: '', age: '' };
                    this.confirmedMyself = { name: '', age: '' };
                }
                AppComponent.prototype.onSubmit = function (myself) {
                    //this.myself = myself;
                    this.myself = { name: myself.name, age: myself.age };
                };
                AppComponent.prototype.onConfirm = function (myself) {
                    //this.confirmedMyself = myself;
                    this.confirmedMyself = { name: myself.name, age: myself.age };
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <div class=\"container\">\n           <my-input (submitted)=\"onSubmit($event)\" [myself]=\"confirmedMyself\"></my-input>\n        </div>\n\n        <div class=\"container\">\n          <my-confirm (confirmed)=\"onConfirm($event)\" [myself]=\"myself\"></my-confirm>\n\n        </div>\n\n    ",
                        directives: [input_component_1.InputComponent, confirm_component_1.ConfirmComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQUE7b0JBQ0ksV0FBTSxHQUFHLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUMsRUFBRSxFQUFDLENBQUM7b0JBQzNCLG9CQUFlLEdBQUcsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBQyxFQUFFLEVBQUMsQ0FBQztnQkFjeEMsQ0FBQztnQkFYRywrQkFBUSxHQUFSLFVBQVMsTUFBZ0M7b0JBQ3JDLHVCQUF1QjtvQkFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFDLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBQyxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUM7Z0JBRXJELENBQUM7Z0JBRUQsZ0NBQVMsR0FBVCxVQUFVLE1BQWdDO29CQUN0QyxnQ0FBZ0M7b0JBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBQyxJQUFJLEVBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxDQUFDO2dCQUM5RCxDQUFDO2dCQTdCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsK1NBVVQ7d0JBQ0QsVUFBVSxFQUFDLENBQUMsZ0NBQWMsRUFBQyxvQ0FBZ0IsQ0FBQztxQkFDL0MsQ0FBQzs7Z0NBQUE7Z0JBaUJGLG1CQUFDO1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCx1Q0FnQkMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtJbnB1dENvbXBvbmVudH0gZnJvbSBcIi4vYmluZGluZ3MvaW5wdXQuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbmZpcm1Db21wb25lbnR9IGZyb20gXCIuL2JpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgIDxteS1pbnB1dCAoc3VibWl0dGVkKT1cIm9uU3VibWl0KCRldmVudClcIiBbbXlzZWxmXT1cImNvbmZpcm1lZE15c2VsZlwiPjwvbXktaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8bXktY29uZmlybSAoY29uZmlybWVkKT1cIm9uQ29uZmlybSgkZXZlbnQpXCIgW215c2VsZl09XCJteXNlbGZcIj48L215LWNvbmZpcm0+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6W0lucHV0Q29tcG9uZW50LENvbmZpcm1Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgbXlzZWxmID0ge25hbWU6JycsIGFnZTonJ307XG4gICAgY29uZmlybWVkTXlzZWxmID0ge25hbWU6JycsIGFnZTonJ307XG5cblxuICAgIG9uU3VibWl0KG15c2VsZjp7bmFtZTpzdHJpbmcsIGFnZTpzdHJpbmd9KXtcbiAgICAgICAgLy90aGlzLm15c2VsZiA9IG15c2VsZjtcbiAgICAgICAgdGhpcy5teXNlbGYgPSB7bmFtZTpteXNlbGYubmFtZSwgYWdlOm15c2VsZi5hZ2V9O1xuXG4gICAgfVxuXG4gICAgb25Db25maXJtKG15c2VsZjp7bmFtZTpzdHJpbmcsIGFnZTpzdHJpbmd9KXtcbiAgICAgICAgLy90aGlzLmNvbmZpcm1lZE15c2VsZiA9IG15c2VsZjtcbiAgICAgICAgdGhpcy5jb25maXJtZWRNeXNlbGYgPSB7bmFtZTpteXNlbGYubmFtZSwgYWdlOm15c2VsZi5hZ2V9O1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
