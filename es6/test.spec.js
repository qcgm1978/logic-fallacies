const chai = require('chai'), should = chai.should()
describe('destructuring for easier data access', () => {
    it('object destructuring', () => {
        let obj = {a: 1, b: 2};
        let {a, b} = obj;
        (a).should.equal(1, '');
        b.should.equal(2);
    });
    it('default values',()=>{
        let obj = {a: 1, b: 2};
        let {a, b,c} = obj;
        (c===undefined).should.ok
    });
    it('nested object destructuring', () => {
        let obj={
            a:{
                b:1,
                c:[0,2]
            }
        }
        let {a:{b,c}}=obj;
        b.should.equal(1, '');
        c[1].should.equal(2);
        let {a:{b:d,c:e}}=obj;
        d.should.equal(1);
        (typeof a).should.equal('undefined');
    });
});