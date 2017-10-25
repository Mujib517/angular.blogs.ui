import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-blog',
    template: ` 
    <div class="well">
            <h2>{{blog.title | uppercase}}</h2>
            <p>{{blog.content | lowercase}}</p>
            <hr>
            <div class="text-muted">{{blog.lastUpdated | date:'dd-MMM-yyyy hh:mm:ss'}}</div>
            <div class="text-muted pull-right">{{blog.lastUpdated | time}}</div>
            <div class="text-muted">Views {{blog.views}}</div>
    </div>`
})
export class BlogComponent {
    @Input()
    blog: any = {};
}