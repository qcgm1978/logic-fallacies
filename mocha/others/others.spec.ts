import { HelloService } from "../modules/hello-service.interface";
import { HelloComponent } from "../modules/hello.component";
import { expect } from 'chai'

class MockHelloService implements HelloService {

    public sayHello(): string {
        return "Hello world!";
    }
}
describe(`es6`, () => {
    it(`Create a JavaScript array containing 1…N`, () => {
        expect(() => [...Array(12).keys()]).to.throw()
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
describe(`https://wanago.io/2018/04/02/1-2-3-9-looking-into-assembly-code-of-coercion/`, () => {
    it(` Array.prototype.toString`, () => {
        expect([1] + [2]).to.equal('12')
        expect('12' - '3').to.equal(9)
        expect([1] + [2] - [3]).to.equal(9)
    });
});