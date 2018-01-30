const chai = require('chai'), should = chai.should()
describe('destructuring for easier data access', () => {
    it('object destructuring', () => {
        let obj = { a: 1, b: 2 };
        let { a, b } = obj;
        (a).should.equal(1, '');
        b.should.equal(2);
    });
    it('default values', () => {
        let obj = { a: 1, b: 2 };
        let { a, b, c } = obj;
        (c === undefined).should.ok
    });
    it('nested object destructuring', () => {
        let obj = {
            a: {
                b: 1,
                c: [0, 2]
            }
        }
        let { a: { b, c } } = obj;
        b.should.equal(1, '');
        c[1].should.equal(2);
        let { a: { b: d, c: e } } = obj;
        d.should.equal(1);
        (typeof a).should.equal('undefined');
    });
    it('array destructuring', () => {
        let arr = [1, 2, 3]
        let [, a, b] = arr;
        a.should.equal(2, '');
        b.should.equal(3);
        [a, b] = [b, a]
        a.should.equal(3)
        b.should.equal(2)
    })
    it('rest items', () => {
        let film = ['The Known', 'Star Wars', 'Avenger']
        let [a, ...b] = film;
        a.should.equal('The Known')
        b.should.eql(['Star Wars', 'Avenger']).but.not.equal(['Star Wars', 'Avenger'])
    })
    it('destructuring parameters', () => {
        let func = ({ a, b, c, d }) => [a, b, c, d]
        func({ a: 1, b: 2 }).should.eql([1, 2, undefined, undefined], '');
        let func1 = ({ a, b, c, d } = {}) => [a, b, c, d]
        func1().should.eql([undefined, undefined, undefined, undefined])
        func1({ a: 'a', c: 'c' }).should.eql(['a', undefined, 'c', undefined]);
        const func2 = ({ a, b, c, d } = { a: 1, b: 2, c: 3, d: 4 }) => [a, b, c, d]
        func2().should.eql([1, 2, 3, 4])
    })
    it('default values for destructured parameters', () => {
        let func = ({ a, b = 'b', c, d = 'd' } = {}) => [a, b, c, d]
        func().should.eql([undefined, 'b', undefined, 'd'], '');
        func({ a: 'a', d: 'D' }).should.eql(['a', 'b', undefined, 'D'])
    })
});