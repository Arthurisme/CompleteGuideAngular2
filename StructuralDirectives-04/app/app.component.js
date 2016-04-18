System.register(['angular2/core', "./attribute-directives.component", "./structural-directives.component"], function(exports_1, context_1) {
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
    var core_1, attribute_directives_component_1, structural_directives_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (attribute_directives_component_1_1) {
                attribute_directives_component_1 = attribute_directives_component_1_1;
            },
            function (structural_directives_component_1_1) {
                structural_directives_component_1 = structural_directives_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n       <my-attribute-directives></my-attribute-directives>\n       <br>\n       <h1>Structural Directives</h1>\n        <my-structural-directives></my-structural-directives>\n\n\n    ",
                        directives: [attribute_directives_component_1.AttributeDirectives, structural_directives_component_1.StructuralDirectives]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFkRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsMkxBT1Q7d0JBQ0QsVUFBVSxFQUFDLENBQUMsb0RBQW1CLEVBQUUsc0RBQW9CLENBQUM7cUJBQ3pELENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0F0dHJpYnV0ZURpcmVjdGl2ZXN9IGZyb20gXCIuL2F0dHJpYnV0ZS1kaXJlY3RpdmVzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTdHJ1Y3R1cmFsRGlyZWN0aXZlc30gZnJvbSBcIi4vc3RydWN0dXJhbC1kaXJlY3RpdmVzLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICA8bXktYXR0cmlidXRlLWRpcmVjdGl2ZXM+PC9teS1hdHRyaWJ1dGUtZGlyZWN0aXZlcz5cbiAgICAgICA8YnI+XG4gICAgICAgPGgxPlN0cnVjdHVyYWwgRGlyZWN0aXZlczwvaDE+XG4gICAgICAgIDxteS1zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXM+PC9teS1zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXM+XG5cblxuICAgIGAsXG4gICAgZGlyZWN0aXZlczpbQXR0cmlidXRlRGlyZWN0aXZlcywgU3RydWN0dXJhbERpcmVjdGl2ZXNdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
