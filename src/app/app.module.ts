import { NgModule, BrowserModule, FormsModule, HttpModule, SharedModule, AppRouterModule } from './module.barrel';

import {
    AppComponent, HomeComponent, BlogsComponent,
    BlogComponent, HeaderComponent, FooterComponent, NewBlogComponent, ContactComponent, AboutComponent, BlogDetailComponent, UsersComponent
} from './app.barrel';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, SharedModule, AppRouterModule, ReactiveFormsModule,BrowserAnimationsModule],
    declarations: [AppComponent, HomeComponent, BlogsComponent,
        BlogComponent, HeaderComponent, FooterComponent, NewBlogComponent, ContactComponent, AboutComponent, BlogDetailComponent, UsersComponent],
    bootstrap: [AppComponent]
})
export class AppModule {


}