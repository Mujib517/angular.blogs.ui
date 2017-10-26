import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../shared/blog.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styles: []
})
export class NewBlogComponent {
  blog: any = {};
  isSaveSuccess: boolean;

  constructor(private blogSvc: BlogService, private router: Router) { }

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
    this.router.navigate(["/blogs"]);
  }

}

