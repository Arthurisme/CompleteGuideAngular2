System.register(['angular2/core', "./services/logging.service", "./services/calculator.service", "./services/data.service"], function(exports_1, context_1) {
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
    var core_1, logging_service_1, calculator_service_1, data_service_1;
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            },
            function (calculator_service_1_1) {
                calculator_service_1 = calculator_service_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_loggingService, _calculatorService, _dataService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
                    this._dataService = _dataService;
                    this.result = "";
                }
                Component1Component.prototype.onLog = function (massage) {
                    this._loggingService.log(massage);
                };
                Component1Component.prototype.onMultiply = function (num1, num2) {
                    this.result = "" + this._calculatorService.multiply(+num1, +num2);
                };
                Component1Component.prototype.onAdd = function (num1, num2) {
                    this.result = "" + this._calculatorService.add(+num1, +num2);
                };
                Component1Component.prototype.onGetData = function () {
                    this.random = this._dataService.getRandomString();
                };
                Component1Component.prototype.onInsert = function (value) {
                    this._dataService.insert(value);
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'my-component1',
                        template: "\n        <h1>Component 1</h1>\n        <input type=\"text\" #message>\n        <button (click)=\"onLog(message.value)\">Send</button>\n\n         <input type=\"text\" #num1>\n         <input type=\"text\" #num2>\n        <button (click)=\"onMultiply(num1.value,num2.value)\">Multiply</button>\n        <button (click)=\"onAdd(num1.value,num2.value)\">Add</button>\n        <br>\n        <p>Result: {{result}}</p>\n        <br>\n          <p>Random string from service is: {{random}}</p>\n        <button (click)=\"onGetData()\">ShowRandom</button>\n                <br>\n         <input type=\"text\" #newData>\n        <button (click)=\"onInsert(newData.value)\">Insert new Data</button>\n\n\n\n\n\n    ",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0NBO2dCQUtJLDZCQUFvQixlQUErQixFQUFVLGtCQUFxQyxFQUFVLFlBQXlCO29CQUFqSCxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFIckksV0FBTSxHQUFHLEVBQUUsQ0FBQztnQkFHMkgsQ0FBQztnQkFFeEksbUNBQUssR0FBTCxVQUFNLE9BQWM7b0JBRWhCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUVELHdDQUFVLEdBQVYsVUFBWSxJQUFXLEVBQUUsSUFBVztvQkFFaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNsRSxDQUFDO2dCQUVELG1DQUFLLEdBQUwsVUFBTSxJQUFXLEVBQUUsSUFBVztvQkFFMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUM5RCxDQUFDO2dCQUdELHVDQUFTLEdBQVQ7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN0RCxDQUFDO2dCQUVELHNDQUFRLEdBQVIsVUFBVSxLQUFZO29CQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFHcEMsQ0FBQztnQkExREw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsUUFBUSxFQUFFLG1zQkFzQlQ7d0JBQ0QsU0FBUyxFQUFDLENBQUMsZ0NBQWMsRUFBQyxzQ0FBaUIsRUFBQywwQkFBVyxDQUFDO3FCQUMzRCxDQUFDOzt1Q0FBQTtnQkFrQ0YsMEJBQUM7WUFBRCxDQWpDQSxBQWlDQyxJQUFBO1lBakNELHFEQWlDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudDEuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtMb2dnaW5nU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvbG9nZ2luZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0NhbGN1bGF0b3JTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9jYWxjdWxhdG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2RhdGEuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWNvbXBvbmVudDEnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMT5Db21wb25lbnQgMTwvaDE+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNtZXNzYWdlPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkxvZyhtZXNzYWdlLnZhbHVlKVwiPlNlbmQ8L2J1dHRvbj5cblxuICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI251bTE+XG4gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbnVtMj5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25NdWx0aXBseShudW0xLnZhbHVlLG51bTIudmFsdWUpXCI+TXVsdGlwbHk8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25BZGQobnVtMS52YWx1ZSxudW0yLnZhbHVlKVwiPkFkZDwvYnV0dG9uPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxwPlJlc3VsdDoge3tyZXN1bHR9fTwvcD5cbiAgICAgICAgPGJyPlxuICAgICAgICAgIDxwPlJhbmRvbSBzdHJpbmcgZnJvbSBzZXJ2aWNlIGlzOiB7e3JhbmRvbX19PC9wPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkdldERhdGEoKVwiPlNob3dSYW5kb208L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbmV3RGF0YT5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25JbnNlcnQobmV3RGF0YS52YWx1ZSlcIj5JbnNlcnQgbmV3IERhdGE8L2J1dHRvbj5cblxuXG5cblxuXG4gICAgYCxcbiAgICBwcm92aWRlcnM6W0xvZ2dpbmdTZXJ2aWNlLENhbGN1bGF0b3JTZXJ2aWNlLERhdGFTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQxQ29tcG9uZW50IHtcblxuICAgIHJlc3VsdCA9IFwiXCI7XG4gICAgcmFuZG9tIDpzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2dnaW5nU2VydmljZTogTG9nZ2luZ1NlcnZpY2UsIHByaXZhdGUgX2NhbGN1bGF0b3JTZXJ2aWNlOiBDYWxjdWxhdG9yU2VydmljZSwgcHJpdmF0ZSBfZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKXt9XG5cbiAgICBvbkxvZyhtYXNzYWdlOnN0cmluZyl7XG5cbiAgICAgICAgdGhpcy5fbG9nZ2luZ1NlcnZpY2UubG9nKG1hc3NhZ2UpO1xuICAgIH1cblxuICAgIG9uTXVsdGlwbHkgKG51bTE6bnVtYmVyLCBudW0yOm51bWJlcikge1xuXG4gICAgICAgIHRoaXMucmVzdWx0ID0gXCJcIit0aGlzLl9jYWxjdWxhdG9yU2VydmljZS5tdWx0aXBseSgrbnVtMSwrbnVtMilcbiAgICB9XG5cbiAgICBvbkFkZChudW0xOm51bWJlciwgbnVtMjpudW1iZXIpIHtcblxuICAgICAgICB0aGlzLnJlc3VsdCA9IFwiXCIrdGhpcy5fY2FsY3VsYXRvclNlcnZpY2UuYWRkKCtudW0xLCArbnVtMilcbiAgICB9XG5cblxuICAgIG9uR2V0RGF0YSgpe1xuICAgICAgICB0aGlzLnJhbmRvbSA9IHRoaXMuX2RhdGFTZXJ2aWNlLmdldFJhbmRvbVN0cmluZygpO1xuICAgIH1cblxuICAgIG9uSW5zZXJ0KCB2YWx1ZTpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZGF0YVNlcnZpY2UuaW5zZXJ0KHZhbHVlKTtcblxuXG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
