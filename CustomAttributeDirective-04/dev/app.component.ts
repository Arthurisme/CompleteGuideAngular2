import {Component} from 'angular2/core';
import {AttributeDirectives} from "./attribute-directives.component";

@Component({
    selector: 'my-app',
    template: `
       <my-attribute-directives></my-attribute-directives>

    `,
    directives:[AttributeDirectives]
})
export class AppComponent {

}
