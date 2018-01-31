const chai = require('chai'), should = chai.should();
describe(' Array.from()', () => {
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
    })
})