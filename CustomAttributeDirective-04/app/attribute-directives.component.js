System.register(['angular2/core', "./highlight.directives"], function(exports_1, context_1) {
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
            }());
            exports_1("AttributeDirectives", AttributeDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS1kaXJlY3RpdmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFBQTtnQkFFQSxDQUFDO2dCQXBCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSx5QkFBeUI7d0JBQ25DLFFBQVEsRUFBRSx5TkFhVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywwQ0FBbUIsQ0FBQztxQkFDcEMsQ0FBQzs7dUNBQUE7Z0JBR0YsMEJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHFEQUVDLENBQUEiLCJmaWxlIjoiYXR0cmlidXRlLWRpcmVjdGl2ZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIaWdobGlnaHREaXJlY3RpdmVzfSBmcm9tIFwiLi9oaWdobGlnaHQuZGlyZWN0aXZlc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWF0dHJpYnV0ZS1kaXJlY3RpdmVzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtteWhpZ2hsaWdodF0gID1cIidyZWQnXCI+XG4gICAgICAgIEhpZ2hsaWdodCBtZVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyPjxicj5cbiAgICAgICAgPGRpdiBbbXloaWdobGlnaHRdICA9XCInYmx1ZSdcIj5cbiAgICAgICAgSGlnaGxpZ2h0IG1lIGFnYWluXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnI+PGJyPlxuXG5cblxuXG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbSGlnaGxpZ2h0RGlyZWN0aXZlc11cbn0pXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlRGlyZWN0aXZlcyB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
