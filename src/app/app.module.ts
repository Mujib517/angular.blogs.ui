import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TimePipe } from '../shared/time.pipe';
import { HttpModule } from '@angular/http';
import { BlogService } from '../shared/blog.service';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [BrowserModule, FormsModule,HttpModule],
    declarations: [AppComponent, HomeComponent, BlogsComponent, TimePipe,BlogComponent, HeaderComponent, FooterComponent],
    bootstrap: [AppComponent],
    providers:[BlogService]
})
export class AppModule { }