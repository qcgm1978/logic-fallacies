// First argument to 'describe' (which is defined by Jasmine) is the testing module that will
// appear in test reports. The second argument is a callback containing the individual tests.
describe("normalizeData", function () {
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
        let reject = Promise.reject(new Error('Explosion'))
    });
    it('returning values or Promises in promise chainings', () => {
        const promise = new Promise((resolve, reject) => {
            resolve(42);
        }),promise1=new Promise(resolve=>{
            resolve(0)
        }),reject=new Promise((_,reject)=>{
            reject(new Error())  
        });
        promise.then((data) => {
            expect(data).toEqual(42);
            return data + 1
        }).then(data => {
            expect(data).toEqual(43);
            return promise1;
        }).then(data=>{
            expect(data).toBeFalsy();
            return reject;
        }).catch(data=>{
            expect(data).toThrow()
        })
    })
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
            }).then(()=>{
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