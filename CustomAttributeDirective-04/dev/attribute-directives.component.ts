import {Component} from 'angular2/core';
import {HighlightDirectives} from "./highlight.directives";

@Component({
    selector: 'my-attribute-directives',
    template: `
        <div [myhighlight]  ="'red'">
        Highlight me
        </div>
        <br><br>
        <div [myhighlight]  ="'blue'">
        Highlight me again
        </div>
        <br><br>




    `,
    directives: [HighlightDirectives]
})
export class AttributeDirectives {

}
