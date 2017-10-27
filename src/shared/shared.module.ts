import { NgModule } from '@angular/core';
import { TimePipe } from './time.pipe';
import { BlogService } from './blog.service';
import { BlogResolver } from './blog.resolver';

@NgModule({
    declarations: [TimePipe],
    providers: [BlogService,BlogResolver],
    exports: [TimePipe]
})
export class SharedModule { }