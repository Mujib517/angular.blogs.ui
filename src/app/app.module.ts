import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TimePipe } from '../shared/time.pipe';

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [AppComponent, HomeComponent, BlogsComponent,TimePipe],
    bootstrap: [AppComponent]
})
export class AppModule { }