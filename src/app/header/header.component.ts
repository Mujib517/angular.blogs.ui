import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  
  <div class="container">
    <header>
      <nav>
        <div class="navbar navbar-inverse">
          <span class="navbar-brand">My Cool Blogs</span>
        <ul class="nav navbar-nav">
            <li> <a routerLink="/">Home</a></li>
            <li> <a routerLink="/about">About</a></li>
            <li> <a routerLink="/blogs">Blogs</a></li>
            <li> <a routerLink="/contact">Contact</a></li>
        </ul>
        
          </div>

      </nav>
    </header>
  </div>
  
  `,
  styles: []
})
export class HeaderComponent { }