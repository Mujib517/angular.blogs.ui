import { Directive, ElementRef, Renderer } from '@angular/core';


@Directive({
    selector: '[dlBorder]'
})

export class BorderDirective {

    constructor(private el: ElementRef, private renderer: Renderer) {
        renderer.setElementStyle(el.nativeElement, "border", "1px solid blue");
        // el.nativeElement.style.border = "1px solid blue";
    }
}