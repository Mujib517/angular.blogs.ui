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

  constructor(private blogSvc: BlogService) {
    this.blogs = blogSvc.get();
    // .subscribe(
    // (response) => {
    //   this.blogs = response;
    // }
    // )
  }
}
