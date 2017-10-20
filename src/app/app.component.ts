import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.html'
})
export class AppComponent {
    status = "adfadfdaf";
    clsName = ["green", "color"];
    style = { border: '1px solid black','font-size':'30pt','font-weight':'bolder' };
}