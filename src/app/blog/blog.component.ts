import { Component, Input, EventEmitter, Output } from '@angular/core';
import { BlogService } from '../../shared/blog.service';

@Component({
    selector: 'app-blog',
    template: ` 
    <div class="well">
            <h2><a [routerLink]="'/blogs/'+blog._id">{{blog.title | uppercase}}</a></h2>
            <p>{{blog.content | lowercase}}</p>
            <hr>
            <div class="text-muted">{{blog.lastUpdated | date:'dd-MMM-yyyy hh:mm:ss'}}</div>
            <div class="text-muted pull-right">{{blog.lastUpdated | time}}</div>
            <div class="text-muted">Views {{blog.views}}</div>
            <button class="btn btn-danger btn-sm" (click)="onDelete(blog._id)">
                Delete 
                <i class="glyphicon glyphicon-remove"></i>
            </button>
    </div>`
})
export class BlogComponent {
    @Input()
    blog: any = {};

    @Output()
    notify: EventEmitter<any>;

    constructor(private blogSvc: BlogService) {
        this.notify = new EventEmitter<any>();
    }

    onDelete(id) {
        this.blogSvc.delete(id)
            .subscribe(
            () => {
                console.log("deleted");
                this.notify.emit();
            }
            )
    }
}