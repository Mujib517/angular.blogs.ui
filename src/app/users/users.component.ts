import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-users',
  template: `
  
  <div class="col-md-5">
  <div class="panel panel-primary" *ngFor="let user of users">

    <div class="panel-heading">{{user.login}}</div>
    <div class="panel-body">
        <img [src]="user.avatar_url" class="img img-circle" width="100" height="100"/>
    </div>
</div>
  </div>

  `,
  styles: []
})
export class UsersComponent implements OnInit {

  users;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get("https://api.github.com/users")
      .map(res => res.json())
      .retry(3)
      .subscribe(
      (response) => this.users = response,
      (err) => console.log(err),
      () => console.log("COmpleted")
      )
  }

}
