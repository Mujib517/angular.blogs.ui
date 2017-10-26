import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class BlogService {

    constructor(private http: Http) { }

    get(): Observable<any[]> {
        return this.http
            .get("http://api-express2.azurewebsites.net/blogs/0/10")
            .retry(3)
            .map(response => response.json());
    }

    save(blog: any): Observable<any> {
        return this.http.post("http://api-express2.azurewebsites.net/blogs", blog)
            .map(res => res.json());
        // .catch((err) => Observable.throw(err));
    }

    getById(id: string): Observable<any> {
        return this.http.get("http://api-express2.azurewebsites.net/blogs/" + id)
            .map(res => res.json());
    }
}