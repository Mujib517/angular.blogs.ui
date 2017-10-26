import { NgModule } from '@angular/core';
import { TimePipe } from './time.pipe';
import { BlogService } from './blog.service';

@NgModule({
    declarations: [TimePipe],
    providers: [BlogService],
    exports: [TimePipe]
})
export class SharedModule { }