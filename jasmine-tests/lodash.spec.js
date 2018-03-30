describe(`A modern JavaScript utility library delivering modularity, performance, & extras. https://lodash.com/`, () => {
    describe(`Array methods`, () => {
        it(`_.chunk(array, [size=1])`, () => {
            expect(_.chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
            // => [['a', 'b'], ['c', 'd']]

            expect(_.chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
            // => [['a', 'b', 'c'], ['d']]
        });
        it(`_.compact(array)`, () => {
            expect(_.compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3])
        });
    });
});