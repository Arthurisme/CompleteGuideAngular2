System.register(['angular2/core', "./services/logging.service", "./services/calculator.service", "./services/data.service"], function(exports_1) {
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
    var Component2Component;
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
            Component2Component = (function () {
                function Component2Component(_loggingService, _calculatorService, _dataService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
                    this._dataService = _dataService;
                    this.result = "";
                }
                Component2Component.prototype.onLog = function (massage) {
                    this._loggingService.log(massage);
                };
                Component2Component.prototype.onMultiply = function (num1, num2) {
                    this.result = "" + this._calculatorService.multiply(+num1, +num2);
                };
                Component2Component.prototype.onAdd = function (num1, num2) {
                    this.result = "" + this._calculatorService.add(+num1, +num2);
                };
                Component2Component.prototype.onGetData = function () {
                    this.random = this._dataService.getRandomString();
                };
                Component2Component.prototype.onInsert = function (value) {
                    this._dataService.insert(value);
                };
                Component2Component = __decorate([
                    core_1.Component({
                        selector: 'my-component2',
                        template: "\n        <h1>Component 2</h1>\n        <input type=\"text\" #message>\n        <button (click)=\"onLog(message.value)\">Send</button>\n\n         <input type=\"text\" #num1>\n         <input type=\"text\" #num2>\n        <button (click)=\"onMultiply(num1.value,num2.value)\">Multiply</button>\n        <button (click)=\"onAdd(num1.value,num2.value)\">Add</button>\n        <br>\n        <p>Result: {{result}}</p>\n        <br>\n          <p>Random string from service is: {{random}}</p>\n        <button (click)=\"onGetData()\">ShowRandom</button>\n                <br>\n         <input type=\"text\" #newData>\n        <button (click)=\"onInsert(newData.value)\">Insert new Data</button>\n\n\n\n\n\n    ",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService])
                ], Component2Component);
                return Component2Component;
            })();
            exports_1("Component2Component", Component2Component);
        }
    }
});
//# sourceMappingURL=component2.component.js.map