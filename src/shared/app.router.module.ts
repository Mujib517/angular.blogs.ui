import { NgModule } from '@angular/core';

import { HomeComponent } from "../app/home/home.component";
import { AboutComponent } from "../app/about/about.component";
import { ContactComponent } from "../app/contact/contact.component";
import { BlogsComponent } from "../app/blogs/blogs.component";
import { NewBlogComponent } from "../app/new-blog/new-blog.component";
import { BlogDetailComponent } from "../app/blog-detail/blog-detail.component";
import { RouterModule, RouterOutlet, RouterLink } from '@angular/router';
import { BlogResolver } from './blog.resolver';


const ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'blogs', component: BlogsComponent, resolve: { blogs: BlogResolver } },
    { path: 'blogs/new', component: NewBlogComponent },
    { path: 'blogs/:id', component: BlogDetailComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRouterModule {
}