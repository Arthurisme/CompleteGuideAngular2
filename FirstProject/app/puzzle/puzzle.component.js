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
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0RBO2dCQUFBO2dCQW1CQSxDQUFDO2dCQVhHLGtDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUUvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFHN0YsQ0FBQzs7Z0JBaEVMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSxvckNBeUNUO3FCQUNKLENBQUM7O21DQUFBO2dCQXNCRixzQkFBQztZQUFELENBbkJBLEFBbUJDLElBQUE7WUFuQkQsNkNBbUJDLENBQUEiLCJmaWxlIjoicHV6emxlL3B1enpsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1wdXp6bGUnLFxuICAgIHRlbXBsYXRlOiBgXG48c2VjdGlvbiBjbGFzcz1cInNldHVwXCI+XG4gICAgPGgyPkdhbWUgU2V0dXA8L2gyPlxuICAgIEVudGVyIHlvdXIgbmFtZSBwbGVhc2U6XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI25hbWUgKGtleXVwKT1cIjBcIj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb25cbiAgW25nQ2xhc3NdPVwie1xuICBwdXp6bGU6dHJ1ZSxcbiAgc29sdmVkOlxuICBzd2l0Y2gxLnZhbHVlID09IHN3aXRjaDFOdW1iZXIgJiZcbiAgc3dpdGNoMi52YWx1ZSA9PSBzd2l0Y2gyTnVtYmVyICYmXG4gIHN3aXRjaDMudmFsdWUgPT0gc3dpdGNoM051bWJlciAmJlxuICBzd2l0Y2g0LnZhbHVlID09IHN3aXRjaDROdW1iZXJcbiAgfVwiXG4gW25nU3R5bGVdID0gXCJ7ZGlzcGxheTogbmFtZS52YWx1ZSA9PT0nJyA/ICdub25lJzonYmxvY2snIH1cIj5cbiAgIDxoMj5UaGUgUHV6emxlfFxuICAgICB7e3N3aXRjaDEudmFsdWUgPT0gc3dpdGNoMU51bWJlciAmJlxuICBzd2l0Y2gyLnZhbHVlID09IHN3aXRjaDJOdW1iZXIgJiZcbiAgc3dpdGNoMy52YWx1ZSA9PSBzd2l0Y2gzTnVtYmVyICYmXG4gIHN3aXRjaDQudmFsdWUgPT0gc3dpdGNoNE51bWJlciA/ICdTT0xWRUQnIDogJ05PVCBTT0xWRUQnfX1cbiAgICA8L2gyPlxuICAgPHA+T2ssIHdlbGNvbWUgPHNwYW4gY2xhc3M9XCJuYW1lXCI+WFhYPC9zcGFuPjwvcD5cbiAgIDxicj5cbiAgICAgIFN3aXRjaCAxOlxuICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDEgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICBTd2l0Y2ggMjpcbiAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gyIChrZXl1cCk9XCIwXCI+PGJyPlxuICAgICAgU3dpdGNoIDM6XG4gICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMyAoa2V5dXApPVwiMFwiPjxicj5cbiAgICAgIFN3aXRjaCA0OlxuICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDQgKGtleXVwKT1cIjBcIj48YnI+XG48L3NlY3Rpb24+XG48aDIgW2hpZGRlbl0gPSBcInN3aXRjaDEudmFsdWUgIT0gc3dpdGNoMU51bWJlciB8fFxuICBzd2l0Y2gyLnZhbHVlICE9IHN3aXRjaDJOdW1iZXIgfHxcbiAgc3dpdGNoMy52YWx1ZSAhPSBzd2l0Y2gzTnVtYmVyIHx8XG4gIHN3aXRjaDQudmFsdWUgIT0gc3dpdGNoNE51bWJlclwiID5Db25ncmF0dWxhdGlvbnMge3tuYW1lLnZhbHVlfX0sIHlvdSBkaWQgaXQhPC9oMj5cblxuXG5cbiAgICBgLFxufSlcblxuXG5leHBvcnQgY2xhc3MgUHV6emxlQ29tcG9uZW50IGltcGxlbWVudHMgIE9uSW5pdHtcbiAgICBzd2l0Y2gxTnVtYmVyOiBudW1iZXI7XG4gICAgc3dpdGNoMk51bWJlcjogbnVtYmVyO1xuICAgIHN3aXRjaDNOdW1iZXI6IG51bWJlcjtcbiAgICBzd2l0Y2g0TnVtYmVyOiBudW1iZXI7XG5cblxuXG4gICAgbmdPbkluaXQoKSAge1xuICAgICAgICB0aGlzLnN3aXRjaDFOdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB0aGlzLnN3aXRjaDJOdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB0aGlzLnN3aXRjaDNOdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB0aGlzLnN3aXRjaDROdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3dpdGNoMU51bWJlcix0aGlzLnN3aXRjaDJOdW1iZXIsdGhpcy5zd2l0Y2gzTnVtYmVyLHRoaXMuc3dpdGNoNE51bWJlcik7XG5cblxuICAgIH07XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
