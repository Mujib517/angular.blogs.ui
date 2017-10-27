import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BlogService } from '../../shared/blog.service';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../shared/models/blog.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html'
})
export class BlogsComponent implements OnInit{

  blogs:Array<Blog>;

  constructor(private blogSvc: BlogService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(){
    this.blogs = this.activatedRoute.snapshot.data["blogs"];
  }
}
