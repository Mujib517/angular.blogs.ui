import { Math } from './math';

describe("Math Service", () => {

    let math;

    beforeEach(() => {
        //Arrange
        math = new Math();
    });

    describe("add function", () => {
        it("Should add two number and return result", () => {
            //Act
            var c = math.add(2, 3);

            //Assert
            expect(c).toBe(5);
        });

        it('akdfj',()=>{
            var name=math.add("Mujib ","Rahman");

            expect(name).toBe("Mujib Rahman");
        })

        it("Should return zero when first parameter is zero", function () {
            var c = math.add(0, 10);

            expect(c).toBe(0);
        });

        it("should return -1 when second parameter is zero", () => {
            var c = math.add(10, 0);

            expect(c).toBe(-1);
        });

    });

    describe("sub function", () => {
        
        it("should subtract two numbers and return result", () => {
            var c = math.sub(3, 2);
            expect(c).toBe(1);
        });

    });

    //flaky


    afterEach(() => {
        math = null;
    });
});