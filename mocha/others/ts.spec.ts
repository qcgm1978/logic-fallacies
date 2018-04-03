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
describe(`others`, () => {
    it(`The labeled statement can be used with break or continue statements. It is prefixing a statement with an identifier which you can refer to.`, () => {
        var i, j;

        loop1:
        for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
            loop2:
            for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
                if (i === 1 && j === 1) {
                    continue loop1;
                }
                expect([0, 1, 2, 3]).to.contain(i)
            }
        }
    });
    it(`Gravity assist: in the planet reference frame, the spaceship has a vertical velocity of v, while the planet is at rest. After the slingshot occurs and the spaceship leaves the planet, it will still have a velocity of v, but in the horizontal direction, as the effects of gravity cancel out.[2] In the Sun reference frame, the planet has a horizontal velocity of v, and by using the Pythagorean Theorem, the spaceship initially has a total velocity of √2v. After the spaceship leaves the planet, it will have a velocity of v + v = 2v, gaining around 0.6v.`, () => {
        const planetHorizonV = 1, planetVerticalV = 1, planetHV = 1, planetVV = 1;
        const iniV = Math.sqrt(Math.pow(planetHorizonV, 2) + Math.pow(planetVerticalV, 2));
        expect(iniV.toFixed(2)).to.equal('1.41');
        const endHorizonV = Math.sqrt(planetHorizonV + planetHV), endVerticalV = Math.sqrt(planetVerticalV + planetVV);
        const endV = Math.sqrt(Math.pow(endHorizonV, 2) + Math.pow(endVerticalV, 2));
        expect(endV).to.equal(2);
        expect((endV - iniV).toFixed(2)).to.equal('0.59')
    });
});
