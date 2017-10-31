import { HomeComponent } from './home.component';

describe("Home Component", () => {

    let comp;

    beforeEach(() => {
        comp = new HomeComponent();
    });

    describe("Init", () => {

        it("should have myProperty defined", () => {
            expect(comp.myProperty).toBeDefined();
            expect(comp.myProperty).toBe("John");
        });

        it("should have myProperty2 defined", () => {
            expect(comp.myProperty2).toBe(true);
        }); 


    });

    describe("onClick",()=>{
        it('should negate the value of myProperty2',()=>{
            comp.onClick();

            expect(comp.myProperty2).toBe(false);
        });
    })

    afterEach(() => {

    });

});