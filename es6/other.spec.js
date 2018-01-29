describe(' Array.from()', () => {
    it(' Array.from() accepts a second argument that\'s a `map` function. ', () => {
        let year=new Date().getFullYear(),arr=Array(5);
        arr.should.instanceof(Array);
        arr.length.should.equal(5);
    })
})