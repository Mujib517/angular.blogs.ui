import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/map';


@Injectable()
export class BlogService {

    constructor(private http: Http) {}

    get() {
        //observable
        return this.http
            .get("http://api-express2.azurewebsites.net/blogs/0/10")
            .retry(3)
            .map(response => response.json());

    }
}