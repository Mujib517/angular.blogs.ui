import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HttpModule } from '@angular/http';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AppRouterModule } from '../shared/app.router.module';
import { UsersComponent } from './users/users.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, SharedModule,AppRouterModule],
    declarations: [AppComponent, HomeComponent, BlogsComponent,
        BlogComponent, HeaderComponent, FooterComponent, NewBlogComponent, ContactComponent, AboutComponent, BlogDetailComponent, UsersComponent],
    bootstrap: [AppComponent]
})
export class AppModule {


}