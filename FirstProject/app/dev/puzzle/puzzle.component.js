System.register(['angular2/core'], function(exports_1) {
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
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
                };
                ;
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n<section class=\"setup\">\n    <h2>Game Setup</h2>\n    Enter your name please:\n    <input type=\"text\" #name (keyup)=\"0\">\n</section>\n\n<section\n  [ngClass]=\"{\n  puzzle:true,\n  solved:\n  switch1.value == switch1Number &&\n  switch2.value == switch2Number &&\n  switch3.value == switch3Number &&\n  switch4.value == switch4Number\n  }\"\n [ngStyle] = \"{display: name.value ==='' ? 'none':'block' }\">\n   <h2>The Puzzle|\n     {{switch1.value == switch1Number &&\n  switch2.value == switch2Number &&\n  switch3.value == switch3Number &&\n  switch4.value == switch4Number ? 'SOLVED' : 'NOT SOLVED'}}\n    </h2>\n   <p>Ok, welcome <span class=\"name\">XXX</span></p>\n   <br>\n      Switch 1:\n   <input type=\"text\" #switch1 (keyup)=\"0\"><br>\n      Switch 2:\n   <input type=\"text\" #switch2 (keyup)=\"0\"><br>\n      Switch 3:\n   <input type=\"text\" #switch3 (keyup)=\"0\"><br>\n      Switch 4:\n   <input type=\"text\" #switch4 (keyup)=\"0\"><br>\n</section>\n<h2 [hidden] = \"switch1.value != switch1Number ||\n  switch2.value != switch2Number ||\n  switch3.value != switch3Number ||\n  switch4.value != switch4Number\" >Congratulations {{name.value}}, you did it!</h2>\n\n\n\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            })();
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});
//# sourceMappingURL=puzzle.component.js.map