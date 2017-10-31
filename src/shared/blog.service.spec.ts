import { BlogService } from './blog.service';
import { Observable } from 'rxjs/Observable';

describe("Blogs Component", () => {
    let svc, http;

    beforeEach(() => {
        http = jasmine.createSpyObj("http", ["delete"]);

        var fakeObj = {
            map: function () {
                return {
                    json: function () { return [] }
                }
            }
        };

        http.delete = jasmine.createSpy("delete").and.returnValue(fakeObj);

        svc = new BlogService(http);
    });

    it('should have blogs undefined', () => {
        svc.delete(1);
        expect(http.delete).toHaveBeenCalledWith('http://api-express2.azurewebsites.net/blogs/1');
    });

    afterEach(() => {
        svc = null;
    });
})