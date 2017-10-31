import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Blog } from './models/blog.model';
import { environment } from '../environments/environment';
import { BlogData } from './models/blog.data.model';


@Injectable()
export class BlogService {

    constructor(private http: Http) { }

    get(): Observable<BlogData> {

        return this.http
            .get(`${environment.url}0/10`)
            .retry(3)
            .map(response => <BlogData>response.json());
    }

    save(blog: any): Observable<any> {
        return this.http.post("http://api-express2.azurewebsites.net/blogs", blog)
            .map(res => res.json());
        // .catch((err) => Observable.throw(err));
    }

    getById(id: string): Observable<any> {
        return this.http.get(`${environment.url}${id}`)
            .map(res => res.json())
            .catch(err => Observable.throw(err));
    }

    delete(id: string): Observable<any> {
        return this.http.delete(`${environment.url}${id}`)
            .map(res => res.json());
    }
}
