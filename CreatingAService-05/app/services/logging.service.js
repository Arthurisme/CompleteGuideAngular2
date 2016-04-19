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
    var LoggingService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoggingService = (function () {
                function LoggingService() {
                    this._lastMessage = '';
                }
                LoggingService.prototype.log = function (message) {
                    console.log('Current Message: ' + message + ', Last Meassage: ' + this._lastMessage);
                    this._lastMessage = message;
                };
                LoggingService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LoggingService);
                return LoggingService;
            }());
            exports_1("LoggingService", LoggingService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2dpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUFBO29CQUNZLGlCQUFZLEdBQUcsRUFBRSxDQUFDO2dCQU05QixDQUFDO2dCQUpHLDRCQUFHLEdBQUgsVUFBSSxPQUFjO29CQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsT0FBTyxHQUFHLG1CQUFtQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDckYsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7Z0JBQ2hDLENBQUM7Z0JBUEw7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBUWIscUJBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELDJDQU9DLENBQUEiLCJmaWxlIjoic2VydmljZXMvbG9nZ2luZy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dnaW5nU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfbGFzdE1lc3NhZ2UgPSAnJztcblxuICAgIGxvZyhtZXNzYWdlOnN0cmluZyl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IE1lc3NhZ2U6ICcgKyBtZXNzYWdlICsgJywgTGFzdCBNZWFzc2FnZTogJyArIHRoaXMuX2xhc3RNZXNzYWdlKTtcbiAgICAgICAgdGhpcy5fbGFzdE1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
