// import { createAsyncIterable } from '../jasmine-www/scripts/functionality'
describe('es7', () => {
    it(`Pattern matching syntax for ECMAScript`, () => {
        //     let getLength = vector => match(vector) {
        // { x, y, z }: Math.sqrt(x ** 2 + y ** 2 + z ** 2),
        //         { x, y }: Math.sqrt(x ** 2 + y ** 2),
        //             [...]: vector.length,
        // else: {
        //         throw new Error("Unknown vector type");
        //     }
        // }
    });
    it('RegExp Named Capture Groups', () => {
        const userAgent = /headlessChrome\/(\S+)/i.exec(navigator.userAgent)
        expect('64').toBeGreaterThan(63)
        if (userAgent && /\d+/.exec(userAgent[1])[0] > 63) {

            //ES2018: RegExp named capture groups. Not Support now.
            expect(() => /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/).not.toThrowError(SyntaxError);
            // [ '2015-01-02', '2015', '01', '02', index: 0, input: '2015-01-02', groups: null({ year: '2015', month: '01', day: '02' }) ] 
            const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
            const result = re.exec('2015-01-02');
            // 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML,like Gecko) HeadlessChrome/63.0.3239.132 Safari/537.36'
            expect(navigator.userAgent).toEqual('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/64.0.3282.167 Safari/537.36');

            expect(result.groups).toEqual({ year: '2015', month: '01', day: '02' });
            expect(result.input).toEqual('2015-01-02')
        }

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
    it('Object.values', () => {
        var obj = { a: 1, b: 2, c: 3 };
        var expected = [1, 2, 3];

        // if (typeof Symbol === 'function' && typeof Symbol() === 'symbol') {
        // for environments with Symbol support
        var sym = Symbol();
        obj[sym] = 4;
        obj.d = sym;
        expected.push(sym);
        // }

        expect(Object.values(obj)).toEqual(expected);
        expect(expected).not.toEqual([1, 2, 3, Symbol()]);
    })
});
describe('es8', () => {
    describe('flatten', () => {
        it('The flatten() method creates a new array with all sub-array elements concatted into it recursively up to the specified depth', () => {
            if (Array.prototype.flatten === undefined) {
                return;
            }
            var arr1 = [1, 2, [3, 4]];
            arr1.flatten();
            // [1, 2, 3, 4]
            var arr2 = [1, 2, [3, 4, [5, 6]]];
            arr2.flatten();
            // [1, 2, 3, 4, [5, 6]]
            var arr3 = [1, 2, [3, 4, [5, 6]]];
            arr3.flatten(2);
            // [1, 2, 3, 4, 5, 6]
        })
    })
    it('The Float32Array typed array represents an array of 32-bit floating point numbers', () => {
        // From a length
        var float32 = new Float32Array(2);
        float32[0] = 42;
        expect(float32[0]).toEqual(42); // 42
        expect(float32.length).toEqual(2); // 2
        expect(float32.BYTES_PER_ELEMENT).toEqual(4); // 4

        // From an array
        var arr = new Float32Array([21, 31]);
        expect(arr[1]).toEqual(31); // 31

        // From another TypedArray
        var x = new Float32Array([21, 31]);
        var y = new Float32Array(x);
        expect(y[0]).toEqual(21); // 21

        // From an ArrayBuffer
        var buffer = new ArrayBuffer(16);
        var z = new Float32Array(buffer, 0, 4);

        // From an iterable 
        var iterable = function* () { yield* [1, 2, 3]; }();
        var float32 = new Float32Array(iterable);
        expect(float32).toEqual(new Float32Array([1, 2, 3]))
    })
    it('async', () => {
        async function asyncFunc1() {
            return 123;
        }

        asyncFunc1()
            .then(x => expect(x).toEqual(123));
        async function asyncFunc() {
            throw new Error('Problem!');
        }

        // asyncFunc()
        // .catch(err => expect(err).toThrowError(Error));
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
        expect(Object.getOwnPropertyDescriptors(obj)).not.toEqual({
            [Symbol('foo')]: {
                value: 123,
                writable: true,
                enumerable: true,
                configurable: true
            },
            bar:
                {
                    get: [function bar() { }],
                    set: undefined,
                    enumerable: true,
                    configurable: true
                }
        });


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
    });
    it('The rest operator (...) in object destructuring', () => {
        const obj = { foo: 1, bar: 2, baz: 3 };
        const { foo, ...rest } = obj;
        expect(foo).toEqual(1)
        expect(rest).toEqual({ bar: 2, baz: 3 });
        (function func({ param1, param2, ...rest }) { // rest operator
            expect(rest).toEqual({ param3: 3, param4: 4 }); // spread operator
            return param1 + param2;
        })({ param1: 1, param2: 2, param3: 3, param4: 4 });
        const obj1 = {
            foo1: {
                a: 1,
                b: 2,
                c: 3,
            },
            bar: 4,
            baz: 5,
        };
        const { foo1: { a, ...rest1 }, ...rest2 } = obj1;
        expect(a).toEqual(1);
        expect(rest1).toEqual({ b: 2, c: 3 })
        expect(rest2).toEqual({ bar: 4, baz: 5 })
    })




})
describe('Asynchronous iteration', () => {
    it('Synchronous iteration', () => {
        const iterable = ['a', 'b'], iterator = iterable[Symbol.iterator]()
        expect(iterator.next()).toEqual({ value: 'a', done: false })
        expect(iterator.next()).toEqual({ value: 'b', done: false })
        expect(iterator.next()).toEqual({ value: undefined, done: true })
    });
    it('Function createAsyncIterable() is explained later. It converts its synchronously iterable parameter into an async iterable.', () => {
        const asyncIterable = createAsyncIterable(['a', 'b']);
        const asyncIterator = asyncIterable[Symbol.asyncIterator]();
        expect(asyncIterator.next()
            .then(iterResult1 => {
                expect(iterResult1).toEqual({ value: 'a', done: false }); // 
                return asyncIterator.next();
            })
            .then(iterResult2 => {
                expect(iterResult2).toEqual({ value: 'b', done: false }); // 
                return asyncIterator.next();
            })
            .then(iterResult3 => {
                expect(iterResult3).toEqual({ value: undefined, done: true }); //
            }).then instanceof Function).toBeTruthy()
        async function f() {
            const asyncIterable = createAsyncIterable(['a', 'b']);
            const asyncIterator = asyncIterable[Symbol.asyncIterator]();
            expect(await asyncIterator.next()).toEqual({ value: 'a', done: false });
            // { value: 'a', done: false }
            expect(await asyncIterator.next()).toEqual({ value: 'b', done: false });
            // { value: 'b', done: false }
            expect(await asyncIterator.next()).toEqual({ value: undefined, done: true });
            // { value: undefined, done: true }
        }
        f()
    });
    it('for-await-of and rejections', () => {
        function createRejectingIterable() {
            return {
                [Symbol.asyncIterator]() {
                    return this;
                },
                next() {
                    return Promise.reject(new Error('Problem!'));
                },
            };
        }
        (async function () { // (A)
            try {
                for await (const x of createRejectingIterable()) {
                    expect(x);
                }
            } catch (e) {
                expect(e instanceof Error).toBeTruthy();
                expect(e.message).toBe('Problem!')
                // Error: Problem!
            }
        })(); // (B)
        async function main() {
            const syncIterable = [
                Promise.resolve('a'),
                Promise.resolve('b'),
            ];
            for await (const x of syncIterable) {
                expect(x).toMatch(/a|b/);
            }
        }
        main();
        const ab = abAsync();
        expect(ab.next().then instanceof Function).toBeTruthy()
        ab.next().then((x) => {

            expect(x).toMatch(/b/);
        });
        async function main() {
            for await (const x of ['c', 'd']) {
                expect(x).toMatch(/c|d/);
            }
        }
        main();
    });
    it('Queuing next() invocations', () => {
        const asyncGenObj = createAsyncIterable(['a', 'b']);
        if (navigator.userAgent) {
            return;
        }
        asyncGenObj.next().then(data => {

            expect(data).toEqual({ value: "a", done: false }); // a b
        });
        (async function foo() {
            const writer = openFile('someFile.txt');
            writer.next('hello'); // don’t wait
            writer.next('world'); // don’t wait
            await writer.return(); // wait for file to close
        })()
    });
    it('test debug', () => {
        'I\'m breakpoint';
    })
});
