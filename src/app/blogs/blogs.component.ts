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
  blog: any = {};
  isSaveSuccess: boolean;

  onSave(): void {

    this.blogSvc.save(this.blog)
      .subscribe(
      () => this.clearAll(),
      (err) => console.log(err)
      )
  }

  private clearAll() {
    this.isSaveSuccess = true;
    this.blog = {};
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
