System.register(['angular2/core', "./highlight.directives"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, highlight_directives_1;
    var AttributeDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (highlight_directives_1_1) {
                highlight_directives_1 = highlight_directives_1_1;
            }],
        execute: function() {
            AttributeDirectives = (function () {
                function AttributeDirectives() {
                }
                AttributeDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-attribute-directives',
                        template: "\n        <div [myhighlight]  =\"'red'\">\n        Highlight me\n        </div>\n        <br><br>\n        <div [myhighlight]  =\"'blue'\">\n        Highlight me again\n        </div>\n        <br><br>\n\n\n\n\n    ",
                        directives: [highlight_directives_1.HighlightDirectives]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AttributeDirectives);
                return AttributeDirectives;
            })();
            exports_1("AttributeDirectives", AttributeDirectives);
        }
    }
});
//# sourceMappingURL=attribute-directives.component.js.map