import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../../shared/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../shared/models/blog.model';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styles: []
})
export class BlogDetailComponent implements OnInit, OnDestroy {

  blog: Blog;
  obs;

  constructor(private blogSvc: BlogService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.blog = new Blog();
    var id = this.activeRoute.snapshot.params.id;
    this.obs = this.blogSvc.getById(id)
      .subscribe(
      (response) => this.blog = response,
      (err) => console.log(err)
      )
  }

  ngOnDestroy() {
    console.log("Unsubscribing");
    this.obs.unsubscribe();
  }

}
