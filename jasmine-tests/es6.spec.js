// import { normalizeData } from '../jasmine-www/scripts/functionality'

// First argument to 'describe' (which is defined by Jasmine) is the testing module that will
// appear in test reports. The second argument is a callback containing the individual tests.
describe("es6", function () {



    it(`The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided by a for...in loop `, () => {
        const object1 = { foo: 'bar', baz: 42 };
        expect(Object.entries(object1)[1]).toEqual(["baz", 42]);
        const object2 = { 0: 'a', 1: 'b', 2: 'c' };
        expect(Object.entries(object2)[2]).toEqual(['2', 'c']);
        const object3 = { 100: 'a', 2: 'b', 7: 'c' };
        // properties order in objects is not guaranteed in JavaScript;
        expect(Object.entries(object3)[0]).toEqual(["2", "b"]);
    })
    it("accepts golden path data", function () {
        // Invoke the unit being tested as necessary
        var json = '{"Name": "Maria", "PersonalIdentifier": 2111858}';
        var norm = normalizeData(json);
        // Check the results; "expect" and toEqual are Jasmine methods.
        expect(norm.name).toEqual("Maria");
        expect(norm.id).toEqual(2111858);
        expect(true).toEqual(true)
    });
    it('Browser unhandled rejection', () => {
        let unhandle = window.onunhandledrejection;
        // expect(unhandle.toBe())
        expect(typeof unhandle).toEqual('object');
        unhandle = () => {
            expect(true).toBeFalsy()
        }
        // let reject = Promise.reject(new Error('Explosion'))
    });
    it('returning values or Promises in promise chainings', () => {
        const promise = new Promise((resolve, reject) => {
            resolve(42);
        }), promise1 = new Promise(resolve => {
            resolve(0)
        }), reject = new Promise((_, reject) => {
            // reject(new Error())
        });
        promise.then((data) => {
            expect(data).toEqual(42);
            return data + 1
        }).then(data => {
            expect(data).toEqual(43);
            return promise1;
        }).then(data => {
            expect(data).toBeFalsy();
            return reject;
        }).catch(data => {
            // expect(data).toThrow()
        })
    });
    it('the Promise.all() method', () => {
        const p1 = new Promise(resolve => resolve(42)), p3 = new Promise(resolve => resolve(44));
        let p2 = new Promise(resolve => resolve(43));
        Promise.all([p1, p2, p3]).then((data) => {
            expect(data).toEqual([42, 43, 44])
        });
        p2 = new Promise((resolve, reject) => {
            // reject(0)
        })
        Promise.all([p1, p2, p3]).catch(data => {
            expect(data).toEqual(0)
        })
    });
    it('the Promise.race() method', () => {
        const p1 = new Promise(resolve => setTimeout(resolve.bind(42))),
            p3 = new Promise(resolve => resolve(44));
        let p2 = Promise.resolve(43);
        Promise.race([p1, p2, p3]).then((data) => {
            expect(data).toEqual(43)
        });
        p2 = new Promise((resolve, reject) => {
            // reject(0)
        })
        Promise.race([p1, p2, p3]).catch(data => {
            expect(data).toEqual(0)
        })
    });
    it('set', () => {
        const foo = {
            set baz(val) {
                this.notBaz = val;
            }
        }
        let ins = Object.create(foo);
        ins.baz = 15;
        expect(ins.baz).toBeUndefined();
        expect(ins.notBaz).toEqual(15)
        expect(foo.baz).toBeUndefined()
    });
});
describe('.fetchCurrentTemperature', function () {
    var temperaturePromise;
    var promiseHelper;

    beforeEach(function () {
        var fetchPromise = new Promise(function (resolve, reject) {
            promiseHelper = {
                resolve: resolve,
                reject: reject
            };
        });
        spyOn(window, 'fetch').and.returnValue(fetchPromise);
        temperaturePromise = WeatherService.fetchCurrentTemperature();
    });

    it('fetches from the weather API', function () {
        expect(window.fetch instanceof Function).toBeTruthy()
        expect(window.fetch).toHaveBeenCalledWith('someweatherapi.com');
    });

    it('returns a promise', function () {
        expect(temperaturePromise).toEqual(jasmine.any(Promise));
    });
    it('Fetch with Basic Auth', () => {
        // Object {
        //     authenticated: true
        //     user: "user"
        // }
        const login = 'login', password = 'password', base64 = {
            encode: () => { }
        }
        fetch("http://ip.jsontest.com/", {
            headers: new Headers({
                "Authorization": `Basic ${base64.encode(`${login}:${password}`)}`
            }),
        }).then(response => {
            if (!response.ok) throw new Error(response.status);
            done()
            return response.json();
        }).catch(err => {
            done()
        })
    })
    describe('on successful fetch', function () {
        beforeEach(function () {
            var response = new Response(JSON.stringify({
                temperature: 78
            }));
            promiseHelper.resolve(response);
        });

        it('resolves its promise with the current temperature', function (done) {
            temperaturePromise.then(function (temperature) {
                expect(temperature).toEqual(78);
            }).then(() => {
                expect(true).toEqual(true)
                done();
            });
        });
    });

    describe('on unsuccessful fetch', function () {
        var errorObj = { msg: 'Wow, this really failed!' };

        beforeEach(function () {
            // promiseHelper.reject(errorObj);
        });

        it('resolves its promise with the current temperature', function () {
            temperaturePromise.then(() => {
                done();
            }).catch(function (error) {
                expect(error).toEqual(errorObj);
                done();
            });
        });
    });
});
describe('built-in string methods', () => {
    it('keep getting better', () => {
        const hello = 'Hello'
        expect(hello.includes('ell')).toBeTruthy()
        expect(hello.startsWith('He')).toBeTruthy();
        expect(hello.endsWith('llo')).toBeTruthy()
        expect(hello.repeat(3)).toEqual('HelloHelloHello');
        expect(hello.codePointAt(1)).toEqual(101)
        expect(hello.padStart(10)).toEqual('     Hello')
        expect(hello.padEnd(10)).toEqual('Hello     ');
        expect('  a '.trim()).toBe('a')
    });
})
describe('Regular Expression', () => {
    it('s (dotAll) flag for regular expressions', () => {
        expect(/foo.bar/.test('foo\nbar')).toBeFalsy();
        expect(/foo[^]bar/.test('foo\nbar')).toBeTruthy()
        expect(/foo.bar/s.test('foo\nbar')).toBeTruthy();

    });

})
describe('Axel Rauschmayer', () => {
    it('Removing duplicate characters from a string', () => {
        const str = [...new Set('cabbcc')].join('')
        expect(str).toEqual('cab')
        const removeRepetive = arr => [...new Set(arr)]
        expect(removeRepetive([1, 3, 2, 1, 2])).toEqual([1, 3, 2]);
    })
})
describe('destructure assignment', () => {
    it('object assignment', () => {
        const a = { a: 1 }, b = {
            b: 2, c: 3
        }
        const c = { ...a, ...b };
        expect(c).toEqual({ a: 1, b: 2, c: 3 })
    })
})
describe('block bindings', () => {
    it('let declaration', () => {
        let val;
        if (true) {
            let val = 1;
        }
        expect(val).toBeUndefined()
    })
});
describe('Symbol', () => {
    it('The data type "symbol" is a primitive data type having the quality that, values of this type can be used to make object properties that are anonymous', () => {
        const myPrivateMethod = Symbol();
        let obj = { a: 1 }
        expect(obj).toEqual({ a: 1 })

        obj[myPrivateMethod] = function () { };
        expect(obj).toEqual({ a: 1 })
    });
    it(`The method Symbol.for("tokenString") returns a symbol value from the registry, and Symbol.keyFor(symbolValue) returns a token string from the registry; each is the other's inverse`, () => {
        expect(Symbol.keyFor(Symbol.for("tokenString"))).toBe("tokenString");  // true
    });
    it(`Symbol type is a new feature in ECMAScript 2015 and there is no ECMAScript 5 equivalent for symbol.`, () => {
        expect(Symbol("foo")).not.toEqual(Symbol("foo"))
        const foo = Symbol()
        const bar = Symbol()
        expect(typeof foo === "symbol").toBeTruthy()
        let obj = { a: 1 }
        obj[foo] = "foo"
        obj[bar] = "bar"
        expect(JSON.stringify(obj)).toEqual(`{"a":1}`);
        expect(Object.keys(obj)).toEqual(['a']);
        expect(Object.getOwnPropertyNames(obj)).toEqual(['a'])
        expect(Object.getOwnPropertySymbols(obj)).not.toEqual([Symbol(), Symbol()])
    });
    it(`Array.prototype.sort throws`, () => {
        const sort = arr => {
            return arr.sort((a, b) => {
                return (typeof a === 'symbol') ? true : (typeof b === 'symbol') ? false : a > b;
            });
        }
        expect([Symbol()].sort).toThrow();
        expect([Symbol(), 'a'].sort).toThrow();
        const arr = sort([Symbol('a'), 'c', 'a', Symbol('b')]);
        expect(arr.length).toEqual(4);
        expect(arr.slice(0, 2)).toEqual(['a', 'c']);
    });
})