// First argument to 'describe' (which is defined by Jasmine) is the testing module that will
// appear in test reports. The second argument is a callback containing the individual tests.
describe("es6", function () {

    // The 'it' function of Jasmine defined an individual test. The first argument is
    // a description of the test that's appended to the module name. Because a module name
    // is typically a noun, like the name of the function being tested, the description for
    // an individual test is typically written in an action-data format. 
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
        console.log(unhandle)
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
            reject(new Error())
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
            reject(0)
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
            reject(0)
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
            promiseHelper.reject(errorObj);
        });

        it('resolves its promise with the current temperature', function (done) {
            temperaturePromise.catch(function (error) {
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
        expect(hello.padEnd(10)).toEqual('Hello     ')
    })
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
})