describe('es7', () => {
    it('RegExp Named Capture Groups', () => {

        // [ '2015-01-02', '2015', '01', '02', index: 0, input: '2015-01-02', groups: null({ year: '2015', month: '01', day: '02' }) ] 
        const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
        const result = re.exec('2015-01-02');
        expect(result.groups).toEqual({ year: '2015', month: '01', day: '02' });
        expect(result.input).toEqual('2015-01-02')
    })
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

        expect(Object.values(obj)).toEqual(expected)
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
    it('Handling multiple asynchronous results sequentially', () => {
        // expect(true).toEqual()
        async function otherAsyncFunc1() {
            return 1
        }
        async function otherAsyncFunc2() {
            return 2
        }
        async function asyncFunc() {
            const result1 = await otherAsyncFunc1();
            expect(result1).toEqual(1);
            const result2 = await otherAsyncFunc2();
            expect(result2 + result1).toEqual(3)
        }
        asyncFunc()
        async function asyncFunc3() {
            const arr = await Promise.all([
                otherAsyncFunc1(),
                otherAsyncFunc2(),
            ]);
            expect(arr).toEqual([1, 2]);
        }
        asyncFunc3()
    })
    it('Promises and generators can be combined to perform asynchronous operations via synchronous-looking code.', (/* done */) => {
        function fetchJson(url) {
            return fetch(url)
                .then((request) => {
                    return request.text()
                })
                .then(text => {
                    return JSON.parse(text);
                })
                .catch(error => {
                    // expect(error).toEqual({ fetch: true });
                    done()
                });
        }
        // fetchJson('http://echo.jsontest.com/key/value/one/two')
        //     .then(obj => {
        //         expect(obj).toEqual({
        //             "one": "two",
        //             "key": "value"
        //         });
        //         done()
        //     })
        //     .catch(error => {
        //         // expect(error).toEqual(Error);
        //         done()
        //     });
    })
    it('Shared memory and atomics', () => {
        // todo
        // main.js

        const worker = new Worker('worker.js');
        expect(worker instanceof Object).toBeTruthy()
        // To be shared

        if (typeof SharedArrayBuffer !== 'undefined') {
            const sharedBuffer = new SharedArrayBuffer( // (A)
                10 * Int32Array.BYTES_PER_ELEMENT); // 10 elements

            // Share sharedBuffer with the worker
            worker.postMessage({ sharedBuffer }); // clone

            // Local only
            const sharedArray = new Int32Array(sharedBuffer); // (B)
        }

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
