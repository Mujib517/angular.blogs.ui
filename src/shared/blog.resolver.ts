import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { BlogService } from './blog.service';

@Injectable()
export class BlogResolver implements Resolve<any> {

    constructor(private blogSvc: BlogService) { }

    resolve() {
        return this.blogSvc.get();
    }
}