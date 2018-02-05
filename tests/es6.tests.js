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
            expect(true).toBeFalsy
        }
        let reject = Promise.reject(new Error('Explosion'))
    });
    it('returning values in promise chainings', () => {
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