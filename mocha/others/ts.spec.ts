import greeter from '../ts/greeter'
import { greeter1 } from '../ts/greeter'

import { expect } from 'chai'
var document = {};
describe(`https://blogs.msdn.microsoft.com/typescript/2018/03/27/announcing-typescript-2-8/#conditional-types`, () => {
    describe(`Conditional types`, () => {
        it(`express a parameter requirement`, () => {
            function f(s: string) {
                return s.slice();
            }
            expect(() => f({})).to.throw()
            expect(() => f('')).not.to.throw()
        });
        it(`A type alias declaration introduces a type alias in the containing declaration space`, () => {
            interface Animal {
                live(): void;
            }
            interface Dog extends Animal {
                woof(): void;
            }
            // Has type 'number'
            type Foo = Dog extends Animal ? number : string;
            const f = (n: Foo) => s.toFixed()
            // expect(Foo).to.equal()
            expect(() => f('1')).to.throw()
            // Has type 'string'
            type Bar = RegExp extends Dog ? number : string;
            const f1 = (s: Bar) => s.slice()
            expect(f1.bind(1)).to.throw()
        });
    });
});
describe(`https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md`, () => {
    it(`Ambient Declarations`, () => {
        expect(() => document.title = "Hello").not.to.throw();  // Ok because document has been declared
    });
    it(`1.2 Function Types`, () => {
        function vote(candidate: string, callback: (result: string) => any) {
            return callback(candidate);
        }

        const ret = vote("BigPig",
            function (result: string) {
                if (result === "BigPig") {
                    return 'string'
                }
            }
        );
        expect(ret).to.eql('string')
    });
});
describe(`http://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html`, () => {
    it(`Conditional Types`, () => {
        // type TypeName<T> =
        //     T extends string ? "string" :
        //         T extends number ? "number" :
        //             T extends boolean ? "boolean" :
        //                 T extends undefined ? "undefined" :
        //                     T extends Function ? "function" :
        //                         "object";

        // type T0 = TypeName<string>;  // "string"
        // type T1 = TypeName<"a">;  // "string"
        // type T2 = TypeName<true>;  // "boolean"
        // type T3 = TypeName<() => void>;  // "function"
        // type T4 = TypeName<string[]>;  // "object"

    });
    describe(`Distributive conditional types`, () => {
        it(`Type aliases create a new name for a type`, () => {
            type Name = string;
            type NameResolver = () => string;
            type NameOrResolver = Name | NameResolver;
            function getName(n: NameOrResolver): Name {
                if (typeof n === "string") {
                    return n;
                }
                else {
                    return n();
                }
            }
            expect(getName('')).to.equal('')
            expect(getName(() => '')).to.equal('')
            expect(getName(() => 1)).to.equal(1)
        });
        it(`Conditional types in which the checked type is a naked type parameter are called distributive conditional types. `, () => {

            type T10 = TypeName<string | (() => void)>;  // "string" | "function"
            type T12 = TypeName<string | string[] | undefined>;  // "string" | "object" | "undefined"
            type T11 = TypeName<string[] | number[]>;  // "object"
            function getName(n: T11): T12 {
                return n;
            }
            expect(getName({})).to.eql({})
        });

        // expect(T10).to.equal()
    });
});
describe(`http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html`, () => {
    it(`Building your first TypeScript file`, () => {
        expect(greeter('Hawking')).to.equal('Hello, Hawking')
    });
    it(`Type annotations`, () => {
        let user = [0, 1, 2];
        // expect(() => greeter1(user)).to.throw();
        expect(() => greeter1(user)).not.to.throw();

    });
    it(` implement an interface just by having the shape the interface requires, without an explicit implements clause.`, () => {
        interface Person {
            firstName: string;
            lastName: string;
        }

        function greeter(person: Person) {
            return "Hello, " + person.firstName + " " + person.lastName;
        }

        let user = { firstName: "Jane", lastName: "User" };
        expect(greeter(user)).to.equal('Hello, Jane User')
    });
    it(`TypeScript supports new features in JavaScript, like support for class-based object-oriented programming.`, () => {
        class Student {
            fullName: string;
            constructor(public firstName: string, public middleInitial: string, public lastName: string) {
                this.fullName = firstName + " " + middleInitial + " " + lastName;
            }
        }

        interface Person {
            firstName: string;
            lastName: string;
        }

        function greeter(person: Person) {
            return "Hello, " + person.firstName + " " + person.lastName;
        }

        let user = new Student("Jane", "M.", "User");
        expect(greeter(user)).to.equal('Hello, Jane User')
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
