System.register(["angular2/core"], function(exports_1, context_1) {
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
    var CalculatorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CalculatorService = (function () {
                function CalculatorService() {
                }
                CalculatorService.prototype.add = function (num1, num2) {
                    return num1 + num2;
                };
                CalculatorService.prototype.multiply = function (num1, num2) {
                    return num1 * num2;
                };
                CalculatorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CalculatorService);
                return CalculatorService;
            }());
            exports_1("CalculatorService", CalculatorService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NhbGN1bGF0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUFBO2dCQVVBLENBQUM7Z0JBUkcsK0JBQUcsR0FBSCxVQUFJLElBQVcsRUFBRSxJQUFXO29CQUN6QixNQUFNLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQztnQkFDcEIsQ0FBQztnQkFHRCxvQ0FBUSxHQUFSLFVBQVMsSUFBVyxFQUFFLElBQVc7b0JBQzdCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixDQUFDO2dCQVZMO29CQUFDLGlCQUFVLEVBQUU7O3FDQUFBO2dCQVdiLHdCQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCxpREFVQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2NhbGN1bGF0b3Iuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsY3VsYXRvclNlcnZpY2Uge1xuXG4gICAgYWRkKG51bTE6bnVtYmVyLCBudW0yOm51bWJlcil7XG4gICAgICAgcmV0dXJuIG51bTErbnVtMjtcbiAgICB9XG5cblxuICAgIG11bHRpcGx5KG51bTE6bnVtYmVyLCBudW0yOm51bWJlcil7XG4gICAgICAgIHJldHVybiBudW0xICogbnVtMjtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
