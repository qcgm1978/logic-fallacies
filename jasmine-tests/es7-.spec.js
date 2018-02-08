describe('es7', () => {
    it('Exponentiation Operator: two asterisks', () => {
        const expon = 5 ** 2, expon1 = Math.pow(5, 2)
        expect(expon).toEqual(expon1);
        expect(2 * 5 ** 2).toEqual(50);
    });
    it('The Array.prototype.includes() method', () => {
        const arr = [1, 2, 3];
        expect(arr.includes(1)).toBeTruthy();
        expect(arr.includes(1, 1)).toBeFalsy()
    });
    it('object.values', () => {
        var obj = { a: 1, b: 2, c: 3 };
        var expected = [1, 2, 3];

        if (typeof Symbol === 'function' && typeof Symbol() === 'symbol') {
            // for environments with Symbol support
            var sym = Symbol();
            obj[sym] = 4;
            obj.d = sym;
            expected.push(sym);
        }

        // expect(values(obj)).toBe(object.values);

        // if (!Object.values) {
        //     values.shim();
        // }

        expect(Object.values(obj)).toEqual(expected)
        // expect(Object.values(obj)).toEqual([ 1, 2, 3, Symbol() ]);
    })
});
describe('es8', () => {
    it('async', () => {
        async function asyncFunc1() {
            return 123;
        }

        asyncFunc1()
            .then(x => expect(x).toEqual(123));
        async function asyncFunc() {
            throw new Error('Problem!');
        }

        asyncFunc()
            .catch(err => expect(err).toThrowError(Error));
        async function asyncFunc() {
            const result = await asyncFunc1();
            expect(result).toThrowError();
        }

        // Equivalent to:
        function asyncFunc() {
            return asyncFunc1()
                .then(result => {
                    expect(result).toThrowError();
                });
        }
    });
    it('Shared memory and atomics', () => {
        // todo
        // main.js

        const worker = new Worker('worker.js');

        // To be shared
        const sharedBuffer = new SharedArrayBuffer( // (A)
            10 * Int32Array.BYTES_PER_ELEMENT); // 10 elements

        // Share sharedBuffer with the worker
        worker.postMessage({ sharedBuffer }); // clone

        // Local only
        const sharedArray = new Int32Array(sharedBuffer); // (B)
    });
    it('New string methods: padStart and padEnd', () => {
        expect('x'.padStart(5, 'ab')).toEqual('ababx');
        expect('x'.padEnd(5, 'ab')).toEqual('xabab');
    });
    it('Object.getOwnPropertyDescriptors()', () => {
        const obj = {
            [Symbol('foo')]: 123,
            get bar() { return 'abc' },
        };
        // expect(Object.getOwnPropertyDescriptors(obj))
        // .toEqual( { [Symbol('foo')]:{ value: 123,
        //     writable: true,
        //     enumerable: true,
        //     configurable: true },
        //  bar:
        //   { get: [Function: bar],
        //     set: undefined,
        //     enumerable: true,
        //     configurable: true } });

        // Output:

    });
    it('Trailing commas in function parameters list and calls', () => {
        expect(function foo(
            param1,
            param2,
        ) { }).not.toThrowError();
        expect(() => Math.pow(
            'abc',
            'def',
        )).not.toThrowError()
    });
    it('Object Rest and Properties spread', () => {
        let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
        expect(x).toEqual(1)
        expect(y).toEqual(2)
        expect(z).toEqual({ a: 3, b: 4 });
        let n = { x, y, ...z };
        expect(n).toEqual({ x: 1, y: 2, a: 3, b: 4 })
    })
})
