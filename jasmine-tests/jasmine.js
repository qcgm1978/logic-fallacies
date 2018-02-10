describe('Global', () => {
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
    })
})