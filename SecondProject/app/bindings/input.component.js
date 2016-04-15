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
    var core_1, core_2;
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.submitted = new core_2.EventEmitter();
                }
                InputComponent.prototype.onKeyup = function () {
                    if (this.myself.name != '' && this.myself.age != '') {
                        this.isFilled = true;
                    }
                    else {
                        this.isFilled = false;
                    }
                    if (this.myself.name != '' && /^\d+$/.test(this.myself.age)) {
                        this.isValid = true;
                    }
                    else {
                        this.isValid = false;
                    }
                };
                InputComponent.prototype.onSubmit = function () {
                    this.submitted.emit(this.myself);
                };
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        template: "\n\n        <h1>Your details, Please</h1>\n        <div>\n          <label for=\"name\">Your Name</label>\n          <input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyup()\">\n        </div>\n        <div>\n          <label for=\"age\">Your Age</label>\n          <input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyup()\">\n        </div>\n        <br>\n        <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>\n        <div>Filled out: {{isValid ? 'Yes' : 'No'}}</div>\n        <br>\n        <button [disabled]=\"!isValid\" (click)=\"onSubmit()\">Submit</button>\n\n\n    ",
                        outputs: ['submitted']
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            }());
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEyQkE7Z0JBQUE7b0JBQ0ksV0FBTSxHQUFHLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUMsRUFBRSxFQUFDLENBQUM7b0JBQzNCLGFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7b0JBQ2hCLGNBQVMsR0FBRyxJQUFJLG1CQUFZLEVBQTZCLENBQUM7Z0JBdUI5RCxDQUFDO2dCQXBCRyxnQ0FBTyxHQUFQO29CQUVJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO3dCQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDekIsQ0FBQztvQkFBQSxJQUFJLENBQUEsQ0FBQzt3QkFDRixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsQ0FBQztvQkFFRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksT0FBTyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ3hCLENBQUM7b0JBQUEsSUFBSSxDQUFBLENBQUM7d0JBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3pCLENBQUM7Z0JBQ0wsQ0FBQztnQkFHRCxpQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckMsQ0FBQztnQkFoREw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsUUFBUSxFQUFFLGtuQkFrQlQ7d0JBQ0QsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO3FCQUN6QixDQUFDOztrQ0FBQTtnQkE0QkYscUJBQUM7WUFBRCxDQTNCQSxBQTJCQyxJQUFBO1lBM0JELDJDQTJCQyxDQUFBIiwiZmlsZSI6ImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktaW5wdXQnLFxuICAgIHRlbXBsYXRlOiBgXG5cbiAgICAgICAgPGgxPllvdXIgZGV0YWlscywgUGxlYXNlPC9oMT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPllvdXIgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgWyhuZ01vZGVsKV09XCJteXNlbGYubmFtZVwiIChrZXl1cCk9XCJvbktleXVwKClcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImFnZVwiPllvdXIgQWdlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFnZVwiIFsobmdNb2RlbCldPVwibXlzZWxmLmFnZVwiIChrZXl1cCk9XCJvbktleXVwKClcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGRpdj5GaWxsZWQgb3V0OiB7e2lzRmlsbGVkID8gJ1llcycgOiAnTm8nfX08L2Rpdj5cbiAgICAgICAgPGRpdj5GaWxsZWQgb3V0OiB7e2lzVmFsaWQgPyAnWWVzJyA6ICdObyd9fTwvZGl2PlxuICAgICAgICA8YnI+XG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFpc1ZhbGlkXCIgKGNsaWNrKT1cIm9uU3VibWl0KClcIj5TdWJtaXQ8L2J1dHRvbj5cblxuXG4gICAgYCxcbiAgICBvdXRwdXRzOiBbJ3N1Ym1pdHRlZCddXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IHtcbiAgICBteXNlbGYgPSB7bmFtZTonJywgYWdlOicnfTtcbiAgICBpc0ZpbGxlZCA9IGZhbHNlO1xuICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICBzdWJtaXR0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtuYW1lOnN0cmluZywgYWdlOnN0cmluZ30+KCk7XG5cblxuICAgIG9uS2V5dXAoKXtcblxuICAgICAgICBpZih0aGlzLm15c2VsZi5uYW1lICE9ICcnICYmIHRoaXMubXlzZWxmLmFnZSAhPSAnJyl7XG4gICAgICAgICAgICB0aGlzLmlzRmlsbGVkID0gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmlzRmlsbGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLm15c2VsZi5uYW1lICE9ICcnICYmIC9eXFxkKyQvLnRlc3QoIHRoaXMubXlzZWxmLmFnZSkpe1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25TdWJtaXQoKXtcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQuZW1pdCh0aGlzLm15c2VsZik7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
