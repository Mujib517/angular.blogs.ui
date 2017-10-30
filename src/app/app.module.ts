import { NgModule, BrowserModule, FormsModule, HttpModule, SharedModule, AppRouterModule } from './module.barrel';

import {
    AppComponent, HomeComponent, BlogsComponent,
    BlogComponent, HeaderComponent, FooterComponent, NewBlogComponent, ContactComponent, AboutComponent, BlogDetailComponent, UsersComponent
} from './app.barrel';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, SharedModule, AppRouterModule],
    declarations: [AppComponent, HomeComponent, BlogsComponent,
        BlogComponent, HeaderComponent, FooterComponent, NewBlogComponent, ContactComponent, AboutComponent, BlogDetailComponent, UsersComponent],
    bootstrap: [AppComponent]
})
export class AppModule {


}