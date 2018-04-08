import { HelloService } from "../modules/hello-service.interface";
import { HelloComponent } from "../modules/hello.component";
import { expect } from 'chai'

class MockHelloService implements HelloService {

    public sayHello(): string {
        return "Hello world!";
    }
}

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