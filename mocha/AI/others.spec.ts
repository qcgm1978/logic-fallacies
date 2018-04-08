import { HelloService } from "./hello-service.interface";
import { HelloComponent } from "./hello.component";
import { expect } from 'chai'
const fs = require('fs');
class MockHelloService implements HelloService {

    public sayHello(): string {
        return "Hello world!";
    }
}
describe(`http://2ality.com/2018/04/async-iter-nodejs.html`, () => {
    describe(`Processing async iterables via async generators`, () => {
        it(`Generator #1: from chunks to lines`, (done) => {
            /**
 * Parameter: async iterable of chunks (strings)
 * Result: async iterable of lines (incl. newlines)
 */
            async function* chunksToLines(chunksAsync) {
                let previous = '';
                for await (const chunk of chunksAsync) {
                    previous += chunk;
                    let eolIndex;
                    while ((eolIndex = previous.indexOf('\n')) >= 0) {
                        // line includes the EOL
                        const line = previous.slice(0, eolIndex + 1);
                        yield line;
                        previous = previous.slice(eolIndex + 1);
                    }
                }
                if (previous.length > 0) {
                    yield previous;
                }
            }
            /**
 * Parameter: async iterable of lines
 * Result: async iterable of numbered lines
 */
            async function* numberLines(linesAsync) {
                let counter = 1;
                for await (const line of linesAsync) {
                    yield counter + ': ' + line;
                    counter++;
                }
            }
            async function main(path) {
                expect(process.argv[2]).to.eql("mocha/**/**.spec.ts")
                const inputFilePath = path || process.argv[2];
                const readStream = fs.createReadStream(inputFilePath,
                    { encoding: 'utf8', highWaterMark: 1024 });
                console.log(numberLines(chunksToLines(readStream)));
                done();
            }
            main('src/').catch(err => {
                // debugger;
                done();
            })
        });
    });
});
describe("HelloComponent", () => {

    it("should say 'Hello world!'", () => {

        let mockHelloService = new MockHelloService();
        let helloComponent = new HelloComponent(mockHelloService)

        expect(helloComponent.sayHello()).to.equal("Hello world!");
    });
});
describe(`The Hitchhiker's Guide to the Galaxy`, () => {
    it(`>>> (Zero-fill right shift)`, () => {
        expect(9 >>> 2).to.equal(2)
        expect(-9 >>> 2).to.equal(1073741821)
        expect(-9 >> 2).to.equal(-3)
        expect(42 >>> 0).to.equal(42)
        const num = 6.;
        expect(num.toString(2)).to.equal(`110`)
        expect(Number((42 >>> 0).toString(2))).to.equal(101010)
    });
    it(``, () => {

    });
})
