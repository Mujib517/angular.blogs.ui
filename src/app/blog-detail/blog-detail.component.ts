import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../shared/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styles: []
})
export class BlogDetailComponent {

  blog: any = {};

  constructor(private blogSvc: BlogService, private activeRoute: ActivatedRoute) {
    var id = activeRoute.snapshot.params.id;
    
    blogSvc.getById(id)
      .subscribe(
      (response) => this.blog = response,
      (err) => console.log(err)
      )
  }

}
