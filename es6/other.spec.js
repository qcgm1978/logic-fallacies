const chai = require('chai'), should = chai.should();
describe('es6 features', () => {
    it(' Array.from() accepts a second argument that\'s a `map` function. ', () => {
        let year = new Date().getFullYear(), arr = Array(5);
        arr.should.instanceof(Array);
        arr.length.should.equal(5);
    });
    it(' Swap variables', () => {
        var a = 'world', b = 'hello';
        [a, b] = [b, a];
        console.log(a)
        a.should.equal('hello')
        b.should.equal('world')
    });
    it('Async/Await with Destructuring', () => {
        async function callX() {
            let x_value = await x();
            console.log(x_value);
        }
    });
    it('Debugging', () => {
        const a = 5, b = 6, c = 7;
        ({ a, b, c }).should.eql({ a: 5, b: 6, c: 7 })
    });
    it('One liners', () => {
        // Find max value
        const max = (arr) => Math.max(...arr);
        max([123, 321, 32]).should.equal(321);
        const sum = (arr) => arr.reduce((a, b) => (a + b), 0)
        sum([1, 2, 3, 4]).should.equal(10);
    });
    it('Array concatenation', () => {
        const one = ['a', 'b', 'c']
        const two = ['d', 'e', 'f']
        const three = ['g', 'h', 'i']
        const actual = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
        // Old way #1
        const result = one.concat(two, three)
        result.should.eql(actual)
        // Old way #2
        const result1 = [].concat(one, two, three)
        result1.should.eql(actual)
        // New
        const result2 = [...one, ...two, ...three]
        result2.should.eql(actual)
    });
    it('Cloning', () => {
        const oldObj={a:1,b:2},oldArr=[1,2,3]
        // const obj = { ...oldObj }
        const arr = [...oldArr]
        arr.should.eql(oldArr)
    })
})