import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../shared/blog.service';

@Component({
  selector: 'app-about',
  template: `
  <h1>About Page</h1>

  <h2>{{count}}</h2>


  <button class="btn btn-danger" (click)="onClick()">++</button>


  `
})
export class AboutComponent {

  count = 0;

  interval;

  constructor(private blogSvc: BlogService) {

    //event
    //setTimeout
    //Webservice

    this.interval = setInterval(() => this.count++, 1000);

    //this.getData();
  }

  getData() {
    this.blogSvc.get()
      .subscribe(
      () => this.count++
      );
  }

  onClick() {
    this.count++
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
