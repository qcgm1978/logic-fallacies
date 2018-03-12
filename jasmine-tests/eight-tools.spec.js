// https://blog.risingstack.com/mastering-async-await-in-nodejs/
// import { asyncTask } from '../jasmine-www/scripts/eight-tools'
describe(`a few tips that we think Node.js developers should follow in 2018`, () => {
    it(`Simple .then chains can be upgraded in a pretty straightforward way, so you can move to using async/await right away.`, (done) => {
        expect(asyncTask.then).toBeUndefined();
        asyncTask().then(data => {
            expect(data).toBe('cd');
            expect(valueC).toBe('cd');
            done();
        })
    });
    it('With requiring the built-in http2 module, we can create our server just like we would do it with the https module.', () => {
        // if (typeof http2 === 'undefined') {
        //     return;
        // }
        // const server = http2.createSecureServer(
        //     { cert, key },
        //     onRequest
        // ).then(data => {
        //     expect(data).toEqual({});
        //     done();
        // });
    });
})
