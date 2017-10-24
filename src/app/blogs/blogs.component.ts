import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BlogService } from '../../shared/blog.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html'
})
export class BlogsComponent {

  blogs = {};

  onSave(): void {
    console.log("Saving...");
  }

  constructor(private blogSvc: BlogService) {
    blogSvc.get()
      .subscribe(
      (response) => {
        this.blogs = response;
      }
      )
  }


}
