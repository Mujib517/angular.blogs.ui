import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `<h1>Home Page</h1>
    
    {{1+2}}
    {{"Mujib" + " Rahman"}}

    <h1 *ngIf="" [class.red]="myProperty" [style.border]="myProperty1?'1px solid black':'none'">{{myProperty}}</h1>
    
    <input type="text" [(ngModel)]="myProperty"/>

    <button [disabled]="getTitle()">My</button>

    <button (click)="onClick(2)">Click</button>

    <table border="1" [hidden]="myProperty2">
        <tr>
            <td>Value</td>
            <td>Index</td>
            <td>Even</td>
            <td>Odd</td>
            <td>First</td>
            <td>Last</td>
        </tr>
        <tr *ngFor="let val of vals;let idx=index;let even=even;let odd=odd;let first=first;let last=last;" 
        [ngClass]="even?'red':'green'">
            <td>{{val}}</td>
            <td>{{idx}}</td>
            <td>{{even}}</td>
            <td>{{odd}}</td>
            <td>{{first}}</td>
            <td>{{last}}</td>
        </tr>
    </table>
    `
})
export class HomeComponent {
    myProperty: string = "John";
    myProperty2: boolean = true;

    vals: number[] = [1, 2, 3, 4, 5, 6];

    getTitle(): string {
        //time consuming operations
        return this.myProperty;
    }

    onClick(param) {
        // if (this.myProperty2) {
        //     this.myProperty2 = false;
        // }
        // else {
        //     this.myProperty2 = true;
        // }

        this.myProperty2 = !this.myProperty2;
    }
}