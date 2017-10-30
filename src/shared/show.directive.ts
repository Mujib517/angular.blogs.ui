import { Directive, ElementRef, Input, Renderer } from '@angular/core';


@Directive({
    selector: '[dlShow]',
    inputs: ['dlShow']
})
export class ShowDirective {
    constructor(private el: ElementRef, private renderer: Renderer) { }

    set dlShow(value: boolean) {
        // if (value) {
        //     this.renderer.setElementStyle(this.el.nativeElement, "display", "block");
        // }
        // else {
        //     this.renderer.setElementStyle(this.el.nativeElement, "display", "none");
        // }

        this.renderer.setElementStyle(this.el.nativeElement, "display", value ? "block" : "none");
    }
}