import { Http } from '@angular/http';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/map';


export class BlogService {

    constructor(private http: Http) { }

    get() {
        //observable
        return this.http
            .get("http://api-express2.azurewebsites.net/blogs/0/10")
            .retry(3)
            .map(response => response.json());

    }
}