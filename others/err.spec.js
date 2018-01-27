//idea from https://rollbar.com/blog/top-10-javascript-errors/
const chai = require('chai');
const assert = chai.assert,
    should = chai.should(),
    expect = chai.expect;

describe("Uncaught TypeError: Cannot read property", () => {
    it(" improper initialization", () => {
        const func = () => {
            var foo;
            foo.bar
        }
        func.should.throw(TypeError);
    });
    it('TypeError: ‘undefined’ is not an object', () => {
        const func = () => {
            var foo = undefined;
            foo.length
        }
        func.should.throw(TypeError);
    })
    it('TypeError: null is not an object', () => {
        const func = () => {
            var foo = null;
            foo.length
        }
        func.should.throw(TypeError);
    })
    it('Script error', () => {
        //todo
        const func = () => {
            var foo = null;
            foo.length
        }
        func.should.throw(TypeError);
    })
    it('TypeError: Object doesn’t support property', () => {
        const func = () => {
            this.isAwesome();
        }
        func.should.throw(TypeError);
    })
    it('TypeError: ‘undefined’ is not a function', (done) => {
        function func() {
            this.isAwesome = () => { }
            this.timer = setTimeout(function () {
                const func1 = () => {
                    this.isAwesome();
                }
                func1.should.throw(TypeError);
                done()

            }, 0);
        };
        func()

    })
    it('arrow function not modify this', (done) => {
        function func() {
            this.isAwesome = () => { }
            this.timer = setTimeout(() => {
                const func1 = () => {
                    this.isAwesome();
                }
                func1.should.not.throw(TypeError);
                done()

            }, 0);
        };
        func()
    })
    it('Uncaught RangeError: Maximum call stack', () => {
        const isAwesome = () => isAwesome()
        const func = () => {
            this.isAwesome();
        }
        isAwesome.should.throw(RangeError);
    })
    it('TypeError: Cannot read property ‘length’', () => {
        var testArray = ["Test"];

        function testFunction(testArray) {
            for (var i = 0; i < testArray.length; i++) {
                console.log(testArray[i]);
            }
        }

        testFunction.should.throw(TypeError);
        function testFunction1(testArray) {
            for (var i = 0; i < testArray.length; i++) {
                console.log(testArray[i]);
            }
        }
        () => testFunction1(testArray).should.not.throw()
    })
    it('Uncaught TypeError: Cannot set property', () => {
        const func = () => {
            const test = undefined;
            undefined.val = 0;
        }
        func.should.throw(TypeError);
    })
    it('TypeError: event is not defined', () => {
        const func = (event) => {
            event = event.which || event.keyCode;
            if (event.keyCode === 13) {
                alert(event.keyCode);
            }
        }
        func.should.throw(TypeError);
    })
});
