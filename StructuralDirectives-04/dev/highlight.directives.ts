import {Directive} from 'angular2/core';
import {ElementRef} from "angular2/core";
import {OnInit} from "angular2/core";
import {Renderer} from "angular2/core";

@Directive({
    selector: '[myhighlight]',
    inputs:['hightLightColor:myhighlight'],
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()',
    }

})
export class HighlightDirectives   {
    private _defaultColor =   'green';
    hightLightColor: string;

    constructor(private _elRef: ElementRef, private _renderer: Renderer){

    }


    //ngOnInit():any {
    //    //this._elRef.nativeElement.style.backgroundColor = this._defaultColor;
    //    //this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', this._defaultColor);
    //    this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', this.hightLightColor || this._defaultColor);
    //}

    onMouseEnter(){

        this.highlight( this.hightLightColor || this._defaultColor);

    }

    onMouseLeave(){

        this.highlight(null);

    }

    private highlight(color: string){
        this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', color);

    }





}
