describe('Global',()=>{
    it('afterAll',()=>{
        expect(afterAll).toThrowError(Error);
        expect(expect).not.toThrowError()
        expect().nothing();
        expect(null).toBe(null)
        expect(undefined).toBe(undefined)
        expect(NaN).not.toBe(NaN)
        expect(NaN).toEqual(NaN)
        expect(NaN).toBeNaN()
        expect(123.99).toBeCloseTo(124,0.1)
    })
})
describe('Following these rules, the code development steps are:', () => {
    
})