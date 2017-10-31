import { BlogsComponent } from './blogs.component';
import { Observable } from 'rxjs/Observable';

describe("Blogs Component", () => {
    let comp, blogSvc, activeRoute;

    beforeEach(() => {

        var obs =new Observable(o=>{
            o.next(1),
            o.next(2)
        });

    

        blogSvc = jasmine.createSpyObj("BlogSvc", ["get"]);
        blogSvc.get = jasmine.createSpy("get").and.returnValue(obs);

        activeRoute = {
            snapshot: {
                data: {
                    blogs: [{ id: 1, title: "first blog" }]
                }
            }
        };

        comp = new BlogsComponent(blogSvc, activeRoute);
    });

    it('should have blogs undefined', () => {
        expect(comp.blogs).toBeUndefined();
    });

    it('should have get data from route resolver', () => {
        comp.ngOnInit();

        expect(comp.blogs).toBeDefined();
    });

    it('should fetch data when gets notification', () => {
        comp.onNotifiy();

        expect(blogSvc.get).toHaveBeenCalledWith();
    })



    afterEach(() => {
        comp = null;
    });
})