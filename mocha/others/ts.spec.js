"use strict";
exports.__esModule = true;
var greeter_1 = require("../ts/greeter");
var greeter_2 = require("../ts/greeter");
var chai_1 = require("chai");
describe("http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html", function () {
    it("Building your first TypeScript file", function () {
        chai_1.expect(greeter_1["default"]('Hawking')).to.equal('Hello, Hawking');
    });
    it("Type annotations", function () {
        var user = [0, 1, 2];
        // expect(() => greeter1(user)).to.throw();
        chai_1.expect(function () { return greeter_2.greeter1(user); }).not.to["throw"]();
    });
    it(" implement an interface just by having the shape the interface requires, without an explicit implements clause.", function () {
        function greeter(person) {
            return "Hello, " + person.firstName + " " + person.lastName;
        }
        var user = { firstName: "Jane", lastName: "User" };
        chai_1.expect(greeter(user)).to.equal('Hello, Jane User');
    });
    it("TypeScript supports new features in JavaScript, like support for class-based object-oriented programming.", function () {
        var Student = /** @class */ (function () {
            function Student(firstName, middleInitial, lastName) {
                this.firstName = firstName;
                this.middleInitial = middleInitial;
                this.lastName = lastName;
                this.fullName = firstName + " " + middleInitial + " " + lastName;
            }
            return Student;
        }());
        function greeter(person) {
            return "Hello, " + person.firstName + " " + person.lastName;
        }
        var user = new Student("Jane", "M.", "User");
        chai_1.expect(greeter(user)).to.equal('Hello, Jane User');
    });
});
describe("others", function () {
    it("The labeled statement can be used with break or continue statements. It is prefixing a statement with an identifier which you can refer to.", function () {
        var i, j;
        loop1: for (i = 0; i < 3; i++) { //The first for statement is labeled "loop1"
            loop2: for (j = 0; j < 3; j++) { //The second for statement is labeled "loop2"
                if (i === 1 && j === 1) {
                    continue loop1;
                }
                chai_1.expect([0, 1, 2, 3]).to.contain(i);
            }
        }
    });
    it("Gravity assist: in the planet reference frame, the spaceship has a vertical velocity of v, while the planet is at rest. After the slingshot occurs and the spaceship leaves the planet, it will still have a velocity of v, but in the horizontal direction, as the effects of gravity cancel out.[2] In the Sun reference frame, the planet has a horizontal velocity of v, and by using the Pythagorean Theorem, the spaceship initially has a total velocity of \u221A2v. After the spaceship leaves the planet, it will have a velocity of v + v = 2v, gaining around 0.6v.", function () {
        var planetHorizonV = 1, planetVerticalV = 1, planetHV = 1, planetVV = 1;
        var iniV = Math.sqrt(Math.pow(planetHorizonV, 2) + Math.pow(planetVerticalV, 2));
        chai_1.expect(iniV.toFixed(2)).to.equal('1.41');
        var endHorizonV = Math.sqrt(planetHorizonV + planetHV), endVerticalV = Math.sqrt(planetVerticalV + planetVV);
        var endV = Math.sqrt(Math.pow(endHorizonV, 2) + Math.pow(endVerticalV, 2));
        chai_1.expect(endV).to.equal(2);
        chai_1.expect((endV - iniV).toFixed(2)).to.equal('0.59');
    });
});
