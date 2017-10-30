import { NgModule } from '@angular/core';
import { TimePipe } from './time.pipe';
import { BlogService } from './blog.service';
import { BlogResolver } from './blog.resolver';
import { ShowDirective } from './show.directive';
import { BorderDirective } from './border.directive';
import { IfDirective } from './if.directive';

@NgModule({
    declarations: [TimePipe, ShowDirective, BorderDirective, IfDirective],
    providers: [BlogService, BlogResolver],
    exports: [TimePipe, ShowDirective, BorderDirective, IfDirective]
})
export class SharedModule { }