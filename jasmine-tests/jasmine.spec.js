describe('Global', () => {
    // 1 = 2
    beforeAll: {
        this.date = new Date(2009, 9, 2, 22, 14, 45);
        Date.formats = {
            // ...
            j: function (date) {
                var jan1 = new Date(date.getFullYear(), 0, 1);
                var diff = date.getTime() - jan1.getTime();
                // 86400000 == 60 * 60 * 24 * 1000
                return Math.ceil(diff / 86400000);
            },
            // ... 
        };
    }
    it(`beforeAll`, () => {

        expect(beforeAll).toBeDefined();
        expect(afterAll).toBeDefined()
    });
    it(`beforeAll`, () => {
        expect(this.date).toBeDefined()
        expect(this.date.getTime()).toBeLessThan(new Date().getTime())
        expect(this.date.getMonth()).toBe(9)
        expect(Date.formats).toBeDefined()
        expect(Date.formats.j(new Date())).toBeGreaterThan(83)
    });
    it('afterAll', () => {
        expect(afterAll).toThrowError(Error);
        expect(expect).not.toThrowError()
        expect().nothing();
        expect(null).toBe(null)
        expect(undefined).toBe(undefined)
        expect(NaN).not.toBe(NaN)
        expect(NaN).toEqual(NaN)
        expect(NaN).toBeNaN()
        expect(123.99).toBeCloseTo(124, 0.1)
    })
    afterAll: {
        // delete this.date;
    }
})
describe('Following these rules, the code development steps are:', () => {


    it('Write a little test that doesn’t work', () => {
        expect(expect(false).toBeTruthy).toThrow()
    });
    it('Make the test work quickly.', () => {
        expect(false).toBeFalsy()

    });
    it('cycle through the three development steps should less than 7 minutes', () => {
        const tddCycle = 7 * 60, timeWriteTest = 3 * 60, makeToPass = 3 * 60, timeVCS = 1 * 60;
        expect(tddCycle).toEqual(timeWriteTest + makeToPass + timeVCS)
    });
    it('“I need to get the ith Fibonacci number', () => {
        const fibonacci = (ith) => {
            let ret = 0;
            if (ith === 0 || ith === 1) {
                ret = ith
            } else if (ith > 1) {
                ret = ith - 1 + ith - 2;
            } else if (isNaN(ith)) {
                ret = NaN
            } else {
                ret = -1

            }
            return ret;
        }
        expect(fibonacci(0)).toEqual(0);
        expect(fibonacci(1)).toEqual(1);
        expect(fibonacci(2)).toEqual(1);
        expect(fibonacci(-2)).toEqual(-1);
        expect(fibonacci(NaN)).toEqual(NaN)
    });
    it('Black-Box Testing', () => {
        class StaticMethodCall {
            constructor() {
                // console.log(StaticMethodCall.staticMethod());
                // expected output: "static method has been called."
                // 5
            }
            callable() {
                return true
            }
            static staticMethod() {
                return 'static method has been called.';
            }
        }
        const ins = new StaticMethodCall();
        expect(ins.callable()).toBeTruthy()
        expect(ins.staticMethod).toBeUndefined()
    });

})




describe('Hello world', function () {

    beforeEach(function () {
        jasmine.addMatchers({
            toBeLarge: function () {
                return {
                    compare: function (actual, expected) {
                        return {
                            pass: actual > 100
                        };
                    }
                };
            }
        });
    });

    it('Custom Matchers', function () {
        expect(5).not.toBeLarge();       // failure
        expect(200).toBeLarge();     // success
        expect(12).not.toBeLarge();  // success
    })
});