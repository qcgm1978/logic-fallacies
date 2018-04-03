import greeter from '../ts/greeter.ts'
import { greeter1 } from '../ts/greeter.ts'

import { expect } from 'chai'
describe(`http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html`, () => {
    it(`Building your first TypeScript file`, () => {
        expect(greeter('Hawking')).to.equal('Hello, Hawking')
    });
    it(`Type annotations`, () => {
        let user = [0, 1, 2];
        // expect(() => greeter1(user)).to.throw();
        expect(() => greeter1(user)).not.to.throw();

    });
})