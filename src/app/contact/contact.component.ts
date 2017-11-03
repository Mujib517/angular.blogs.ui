import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contact',
  animations: [trigger('mytrigger', [state('active', style({ backgroundColor: 'green', transform: 'skew(10deg,10deg)' })),
  state('inactive', style({ backgroundColor: 'blue', transform: 'rotate(-180deg)' })),
  transition("active<=>inactive", animate("1000ms ease-in")),
  ])],

  template: `
   <h1>Contact Page</h1>
  
   <form [formGroup]="frm">
   
   <div class="form-group">
      <input type="text" class="form-control" formControlName="name" placeholder="name"/>
      <span class="text-danger" *ngIf="frm.controls.name.errors?.required">Required</span>
      <span class="text-danger" *ngIf="frm.controls.name.errors?.minlength">Min 5 chars</span>
    </div>
  <div class="form-group">
    <input type="email" class="form-control" formControlName="email" placeholder="email"/>
  </div>
 
  <div class="form-group">
     <button class="btn btn-danger" (click)="onSave()">Save</button>
  </div>
   

  <button [@mytrigger]="state" class="btn btn-primary">My Button</button>
   
  </form>


  <div *ngIf="!loading else temp">
    Content
  </div>

  <ng-template #temp>Loading...</ng-template>

 <h1> {{name |titlecase}}</h1>

  `
})
export class ContactComponent {

  state = "active";
  loading = true;
  frm: FormGroup;
  name= "mujib rahman";

  constructor(private fb: FormBuilder) {
    this.frm = fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['mujib517@gmail.com']
    });
  }

  onSave() {

    // if (this.state === 'active') this.state = 'inactive';
    // else this.state = "active";


    this.state = this.state === 'active' ? 'inactive' : 'active';

    //console.log(this.frm.value);
    //http.
  }
}
