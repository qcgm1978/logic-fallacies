
describe(`An extensive math library for JavaScript and Node.js http://mathjs.org`, () => {
    beforeAll: {
        this.matrix = math.matrix([1, 2, 3]);
        this.matrix_3x3 = math.matrix([[1, 2, 3], [4, 5, 6], [7, 8, 10]]);


    }
    describe(`GNU Octave: https://www.gnu.org/software/octave/`, () => {
        it(`Solve systems of equations with linear algebra operations on vectors and matrices.`, () => {
            const b = math.matrix([[4], [9], [2]]), // Column vector
                A = math.matrix([[3, 4, 5], [1, 3, 1], [3, 5, 9]]),
                C = math.simplify('b / A');     // Solve the system Ax = b
            expect(C.fn).toEqual('divide')
        });
        it(`Visualize data with high-level plot commands in 2D and 3D.`, () => {
            // x = -10: 0.1: 10; # Create an evenly - spaced vector from - 10..10
            // y = sin(x); # y is also a vector
            // plot(x, y);
            // title("Simple 2-D Plot");
            // xlabel("x");
            // ylabel("sin (x)");
        });
        describe(`https://octave.org/doc/interpreter/Simple-Examples.html#Simple-Examples`, () => {
            it(`Elementary Calculations`, () => {
                const EulerIdentity = math.pow(Math.E, math.multiply(math.i, math.PI))
                expect(EulerIdentity.re).toBe(-1)
            });
        })
        it(`Creating a Matrix`, () => {
            const A = math.matrix([[1, 1, 2], [3, 5, 8], [13, 21, 34]]),
                B = math.random(3, 2);
            expect(A._data).toEqual([[1, 1, 2], [3, 5, 8], [13, 21, 34]])
            expect(B._data).toEqual();
            const B1 = math.random(2, 3)
            expect(B1).toBeGreaterThan(2)
            expect(B1).toBeLessThan(3)
        });
        it(`Matrix Arithmetic`, () => {
            expect(math.multiply(this.matrix, 2)._data).toEqual([2, 4, 6])
            expect(math.dotMultiply(this.matrix, this.matrix)._data).toEqual([1, 4, 9])
            expect(math.transpose(this.matrix)._data).toEqual([1, 2, 3])
            expect(math.transpose(this.matrix_3x3)._data).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 10]])
        });
    })
    it(`chain`, () => {
        const chain = math.chain(0);
        expect(chain.done()).toEqual(0)
        expect(math.chain(3)
            .add(4)
            .subtract(2)
            .done()).toBe(5); // 5

        const chain1 = math.chain([[1, 2], [3, 4]])
            .subset(math.index(0, 0), 8)
            .multiply(3);
        expect(chain1
            .done()).toEqual([[24, 6], [9, 12]]);
        expect(chain1.value).toEqual([[24, 6], [9, 12]])
    });
    it(`math.js can evaluate expressions and supports chained operations.`, () => {
        // functions and constants
        expect(math.round(math.e, 3)).toBe(2.718)
        expect(math.atan2(3, -3) / math.pi).toBe(0.75)
        expect(math.log(10000, 10)).toBe(4)
        expect(math.sqrt(-4)).toEqual({
            re: 0, im: 2
        });
        expect(math.pow([[-1, 2], [3, 1]], 2)).toEqual([[7, 0], [0, 7]])
        expect(math.derivative('x^2 + x', 'x').op).toBe('+');

        // expressions
        expect(math.eval('12 / (2.3 + 0.7)')).toBe(4)
        expect(math.eval('12.7 cm to inch').value).toBe(0.127)
        expect(math.eval('sin(45 deg) ^ 2').toFixed(1)).toBe('0.5')
        expect(math.eval('9 / 3 + 2i')).toEqual({
            re: 3, im: 2
        })
        expect(math.eval('det([-1, 2; 3, 1])')).toBe(-7)

        // chaining
        expect(math.chain(3)
            .add(4)
            .multiply(2)
            .done()).toBe(14)
    });
    it(`Math.js supports multi dimensional matrices and arrays.`, () => {
        // create an array and a matrix
        var array = [[2, 0], [-1, 3]];                // Array
        var matrix = math.matrix([[7, 1], [-2, 3]]);  // Matrix
        expect(matrix._size).toEqual([2, 2])
        // perform a calculation on an array and matrix
        expect(math.square(array)).toEqual([[4, 0], [1, 9]]);                           // Array, 
        expect(math.square(matrix)._data).toEqual([[49, 1], [4, 9]]);                          // Matrix, [[49, 1], [4, 9]]

        // perform calculations with mixed array and matrix input
        expect(math.add(array, matrix)._data).toEqual([[9, 1], [-3, 6]]);                      // Matrix, [[9, 1], [-3, 6]]
        expect(math.multiply(array, matrix)._data).toEqual([[14, 2], [-13, 8]]);
        expect(math.multiply(matrix, array)._data).toEqual([[13, 3], [-7, 9]]);
        expect(math.multiply(array, matrix)._data).not.toEqual(math.multiply(matrix, array)._data)
        // create a matrix. Type of output of function ones is determined by the
        // configuration option `matrix`
        expect(math.ones(2, 3)._data).toEqual([[1, 1, 1], [1, 1, 1]]);
    });
    describe(`Matrices and Arrays: https://www.mathworks.com/help/matlab/learn_matlab/matrices-and-arrays.html?s_cid=learn_doc`, () => {
        beforeAll: {
            this.matrix_3x3 = math.matrix([[1, 2, 3], [4, 5, 6], [7, 8, 10]]);

        }
        it(`Array Creation`, () => {
            const matrix = math.matrix([1, 2, 3, 4])
            expect(matrix._data).toEqual([1, 2, 3, 4])
            expect(matrix._size).toEqual([4])
            const matrix_3x3 = math.matrix([[1, 2, 3], [4, 5, 6], [7, 8, 10]])
            expect(matrix_3x3._data).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 10]]);
            const ones = math.ones(5, 1)._data;
            expect(math.multiply(ones, 0)).toEqual([[0], [0], [0], [0], [0]])
        });
        it(`Matrix and Array Operations`, () => {
            const matrix_3x3 = math.matrix([[1, 2, 3], [4, 5, 6], [7, 8, 10]]);
            expect(math.add(matrix_3x3, 10)._data).toEqual([[11, 12, 13], [14, 15, 16], [17, 18, 20]])
            const generateSinMatlab = math.sin(matrix_3x3)._data.reduce((arr, n) => {
                arr.push(n.reduce((arr, n) => {
                    arr.push(Number(n.toFixed(4)));
                    return arr;
                }, []));
                return arr
            }, []);
            expect(generateSinMatlab).toEqual([[0.8415, 0.9093, 0.1411],
            [- 0.7568, - 0.9589, - 0.2794],
            [0.6570, 0.9894, - 0.5440]]);
            expect(math.transpose(matrix_3x3)._data).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 10]])
            const inv = math.inv(matrix_3x3)._data;
            expect(inv).toEqual([[-0.6666666666666665, -1.3333333333333335, 1], [-0.6666666666666667, 3.6666666666666665, -2], [1, -2, 1]])
            const identityMatrix = math.multiply(matrix_3x3, inv)._data;
            identityMatrix[0][2] = identityMatrix[0][2] === 0 ? -0 : identityMatrix[0][2];
            identityMatrix[1][1] = Math.round(identityMatrix[1][1])
            expect(identityMatrix).toEqual([[1.0000, 0, - 0.0000],
            [0, 1.0000, 0],
            [0, 0, 1.0000]])
            const identityMatrix1 = eval(math.chain(matrix_3x3).multiply(inv).toString());
            expect(identityMatrix1).toEqual([[1.0000, 0, 0.0000],
            [0, 0.9999999999999982, 0],
            [0, 0, 1.0000]])
        });
        it(`To perform element-wise multiplication rather than matrix multiplication`, () => {
            expect(math.dotMultiply(this.matrix_3x3, this.matrix_3x3)._data).toEqual([[1, 4, 9], [16, 25, 36], [49, 64, 100]])
            expect(math.dotPow(this.matrix_3x3, 3)._data).toEqual([[1, 8, 27], [64, 125, 216], [343, 512, 1000]])
        });
        it(`Concatenation`, () => {
            expect(math.concat(this.matrix_3x3, this.matrix_3x3)._data).toEqual([[1, 2, 3, 1, 2, 3], [4, 5, 6, 4,
                5, 6], [7, 8, 10, 7, 8, 10]])
            expect(math.concat(this.matrix_3x3, this.matrix_3x3, 0)._data).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 10], [1, 2, 3], [4, 5, 6], [7, 8, 10]])
        });
        it(`Complex Numbers`, () => {
            expect(math.sqrt(-1).im).toEqual(1);
            const arr = ['3 + 4i', '4 + 3i', '-i', '10i'].reduce((arr, n) => {
                arr.push(math.complex(n));
                return arr;
            }, []);
            expect(arr[0].im).toEqual(4)
            expect(arr[3].re).toEqual(0)

        });
    });
})
describe(`Benchmarks and Relative Performance`, () => {
    it(`measure relative performance of different loop- ing styles`, () => {
        // runBenchmark("for-loop",
        //     forLoop);
        // runBenchmark("for-loop, cached length",
        //     forLoopCachedLength);
        // runBenchmark("for-loop, direct array access",
        //     forLoopDirectAccess);
        // runBenchmark("while-loop",
        //     whileLoop);
        // runBenchmark("while-loop, cached length property",
        //     whileLoopCachedLength);
        // runBenchmark("reversed while-loop",
        //     reversedWhileLoop);
        // runBenchmark("double reversed while-loop",
        // doubleReversedWhileLoop);
    });
})
describe('Number', () => {
    it(`numObj.toFixed([digits]): The toFixed() method formats a number using fixed-point notation`, () => {
        var numObj = 12345.6789;

        expect(numObj.toFixed()).toBe('12346');       // Returns '12346': note rounding, no fractional part
        expect(numObj.toFixed(1)).toBe('12345.7');      // Returns '12345.7': note rounding
        expect(numObj.toFixed(6)).toBe('12345.678900');      // Returns '12345.678900': note added zeros
        expect((1.23e+20).toFixed(2)).toBe('123000000000000000000.00');  // Returns '123000000000000000000.00'
        expect((1.23e-10).toFixed(2)).toBe('0.00');  // Returns '0.00'
        expect(2.34.toFixed(1)).toBe('2.3');        // Returns '2.3'
        expect(2.35.toFixed(1)).toBe('2.4');        // Returns '2.4'. Note that it rounds up in this case.
        expect(-2.34.toFixed(1)).toBe(-2.3);       // Returns -2.3 (due to operator precedence, negative number literals don't return a string...)
        expect((-2.34).toFixed(1)).toBe('-2.3');     // Returns '-2.3' (...unless you use parentheses)
    });
})
describe(`17 Equations that changed the world! https://pbs.twimg.com/media/DYkbuveXcAEmE4y.jpg:large`, () => {
    it(`Pythagoras's Theorem`, () => {
        const hypotenuse = 5, side1 = 3, side2 = 4;
        expect(Math.pow(hypotenuse, 2)).toBe(Math.pow(3, 2) + Math.pow(4, 2))
    });
    it(`Logarithm product rule
The logarithm of the multiplication of x and y is the sum of logarithm of x and logarithm of y.`, () => {
            const x = 5, y = 10, fixed = 10;
            expect(Math.log(x * y).toFixed(fixed)).toBe((Math.log(x) + Math.log(y)).toFixed(fixed));
        });
    it(`go through the basics of integral and differential calculus`, () => {
        // Make a calculus equation f(x) = x^2
        // and assign that function to the variable y
        var y = new CalculusEquation('x', 'x ^ 2');
        y.at(2); // should return 4
        y.at(6); // should return 36
        y.derivative();
        // should return CalculusEquation('x', '2x')
        y.integral();
        // should return CalculusEquation('x', '(x^3)/3')
        // note that the integral ignores the constant of integration
        // calls to derivative and integral can be chained
        var z = new CalculusEquation('x', '2x ^ 2 + 3x');
        z.derivative().derivative();
        // should return CalculusEquation('x', '4')
        z.derivative().at(2); // should return 7
        // can handle trig functions
        var f = new CalculusEquation('x', 'cos(x) ');
        f.derivative(); // should return CalculusEquation('x', '-sin(x)')
    });
    it(`Law of Gravity`, () => {
        const g = 9.8, m1 = 1, m2 = 2, r = 3, mR = 0.5;
        expect(g * m1 * m2 / Math.pow(r, 2)).toBeGreaterThan(g * m1 * m2 / Math.pow(r + 0.5, 2))
    });
    describe(`A complex number library: https://github.com/infusion/Complex.js`, () => {
        it(`the square root of minus one`, () => {
            const i = Math.sqrt(-1);
            expect(i).toBeNaN()
            let c = new Complex("i");
            // base on G:\logic-fallacies\jasmine-www\scripts\complex.js
            expect(Math.pow(c, 2)).toBe(0)
            expect(parseInt(c.mul(c))).toBe((-1));
            c = new Complex("99.3+8i");
            expect(c.mul({ re: 3, im: 9 }).div(4.9).sub(3, 2)).toEqual({ "re": 43.10204081632652, "im": 185.28571428571425 });

        });
        describe(`pass either Objects, Doubles or Strings.`, () => {
            it(`Objects passed`, () => {
                const real = 1, imaginary = 2, angle = 3, radius = 4;
                expect(new Complex({ re: real, im: imaginary })).toEqual({
                    re: 1,
                    im: 2
                });
                expect(new Complex({ arg: angle, abs: radius })).toEqual({
                    re: -3.9599699864017817,
                    im: 0.5644800322394689
                });
                expect(new Complex({ phi: angle, r: radius })).toEqual({
                    re: -3.9599699864017817,
                    im: 0.5644800322394689
                });
                expect(new Complex([real, imaginary])).toEqual({
                    re: 1,
                    im: 2
                }); // Vector/Array syntax
            });
        });
    })
    it(`euler's formula for polyhedra`, () => {
        const Vertices = 4, Edges = 6, Faces = 4;
        expect(Vertices - Edges + Faces).toBe(2)
    });
    it(`normal distribution`, () => {
        // Standard Normal variate using Box-Muller transform. https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve
        function randn_bm() {
            var u = 0, v = 0;
            while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
            while (v === 0) v = Math.random();
            return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        }
        expect(randn_bm()).toBeLessThan([-3.10, 3.24][1])
        expect(randn_bm()).toBeGreaterThan([-3.10, 3.24][0])
    });
    it(`wave equation, http://denys.li/2017/09/16/wave-equation-three-js/`, () => {
        if (typeof utemp === 'undefined') {
            return;
        }
        function initial(x = N / 2, y = N / 2) { // Gaussian Bell
            sigma = 1;
            for (i = 1; i < SUBD - 1; i++)
                for (j = 1; j < SUBD - 1; j++) {
                    u[i][j] = 100 * Math.exp(-sigma * (i - x) * (i - x)) * Math.exp(- sigma * (j - y) * (j - y));
                }
        }
        function boundary(A) {
            for (i = 1; i < N; i++) {
                A[i][0] = A[i][1];
                A[i][N - 2] = A[i][N - 1];
            }
            for (j = 1; j < N; j++) {
                A[0][j] = A[1][j];
                A[N - 1][j] = A[N - 2][j];
            }
            return A;
        }
        function animate(N) {
            SI = 1 // Start coordinate
            EI = N - 2 // End coordinate
            for (i = SI; i < EI; i++) for (j = SI; j < EI; j++) utemp[i][j] = (2 * utemp[i][j] - utp[i][j]) + 0.5 * (u[i - 1][j] + u[i + 1][j] + u[i][j - 1] + u[i][j + 1] - 4 * u[i][j]);
            for (i = SI; i < EI; i++) for (j = SI; j < EI; j++) utp[i][j] = u[i][j];
            for (i = SI; i < EI; i++) for (j = SI; j < EI; j++) u[i][j] = utemp[i][j];

            u = boundary(u);

            overwrite()

            requestAnimationFrame(animate);

            renderer.render(scene, camera);

        }
        // animate(10)
    });
})
describe(`Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers`, () => {
    it(`Performs the XOR operation on each pair of bits. a XOR b yields 1 if a and b are different. `, () => {
        expect(0 ^ 0).toBe(0)
        expect(0 ^ 1).toBe(1)
        expect(1 ^ 0).toBe(1)
        expect(1 ^ 1).toBe(0)
    });
})
describe('Math is a built-in object that has properties and methods for mathematical constants and functions', () => {
    it('The Math.PI property represents the ratio of the circumference of a circle to its diameter', () => {
        expect(Number(Math.PI.toFixed(2))).toBe(3.14);
        function calculateCircumference(radius) {
            return Number((2 * Math.PI * radius).toFixed(2));
        }
        expect(calculateCircumference(10)).toBe(62.83)
    })
})
describe('Automatic Type Conversion in JavaScript', () => {
    it('null', () => {
        expect(200 * null).toBe(0);
        expect("100" - 10).toBe(90);
        expect("100" + 10).toBe('10010');
        expect(("ten" * 2)).toBeNaN()
        expect(false == 0).toBeTruthy()
    });
})
//https://github.com/minimaxir/big-list-of-naughty-strings/
describe('Big List of Naughty Strings, jasmine-www/blns.txt', () => {
    it('Reserved Strings', () => {
        expect(String(undefined)).toBe('undefined')
        expect('NULL').toBe('NULL')
    });
    it('Strings which can be interpreted as numeric', () => {
        expect(String(1.00)).toBe('1')
        expect(1.00.toFixed(2)).toBe('1.00');

    });
    it('', () => {
        const str = unescape(escape('👕🐫🐱👆🐴🐰🐰🐠👴👯🐠👕🐫🐱👆🐴🐷👆🐠👩👳🐠👡👮🐠👵👮👢👲👯👫👥👮🐠👢👬👯👣👫🐠👯👦🐠👥👭👯👪👩🐮🐠👇👯👯👤🐠👦👯👲🐠🐱🐺🐱🐠👁👓👃👉👉🐠👭👡👰👰👩👮👧🐮🐠👅👭👯👪👩👃👯👤👥🐿').replace(/u.{8}/g, ''))
        expect(str).toBe('U+1F400 to U+1F47F is an unbroken block of emoji. Good for 1:1 ASCII mapping. EmojiCode?')
    })
})
describe('others', () => {
    describe(`/Users/qcgm1978/Documents/book/programming`, () => {
        it(`Using array methods with arguments`, () => {

            function addToArray() {
                var targetArr = arguments[0];
                var add = Array.prototype.slice.call(arguments, 1);
                return targetArr.concat(add);
            }
            expect(addToArray).toThrow();
            expect(addToArray('a')).toEqual('a')
            expect(addToArray('a', 'b')).toBe('ab')
            const addToArray1 = () => {
                expect(arguments.length).toBeDefined()
            }
            expect(addToArray1).toThrow()
        });
        it("test dynamic relationship"), function () {
            function modify(a, b) {
                b = 42;
                arguments[0] = arguments[1];
                return a;
            }
            expect(modify(1, 2)).toBe(42);
        }
        it("test scope", function () {
            function sum() {
                expect(i).toBeUndefined();
                expect(function () {
                    assertUndefined(someVar);
                }).toThrow();
                var total = arguments[0];
                if (arguments.length > 1) {
                    for (var i = 1, l = arguments.length; i < l; i++) {
                        total += arguments[i];
                    }
                }
                expect(i).toBe(5);
                return total;
            }
            sum(1, 2, 3, 4, 5);
        })
        it(`Function scope after hoisting`, () => {
            function sum() {
                var i; var l;
                expect(i).toBeUndefined();
                /* ... */
            }
            sum(1, 2, 3, 4, 5);
        });
        it(`The this object and window`, () => {
            expect(this).toBe(window);
            expect(this.window).toBe(window);
            expect(window.window).toBe(window);
        });
        it(`The Scope Chain`, () => {
            function adder(base) {
                return function (num) {

                    return base + num;
                };
            }
        });
    });
    describe(`Array.prototype.splice`, () => {
        it(`test array splice should modify array`, () => {
            var arr = [1, 2, 3, 4, 5];
            var result = arr.splice(2, 3);
            expect(arr).toEqual([1, 2]);
        });
        it("test array splice should return removed items", () => {
            var arr = [1, 2, 3, 4, 5];
            var result = arr.splice(2, 3);
            expect(result).toEqual([3, 4, 5]);
        });
    });
    it('The pop() method removes the last element from an array and returns that element. ', () => {
        var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

        expect(plants.pop()).toBe("tomato");
        expect(plants).toEqual(["broccoli", "cauliflower", "cabbage", "kale"]);
        plants.pop()
        expect(plants).toEqual(["broccoli", "cauliflower", "cabbage"]);

    });
    it('The push() method adds one or more elements to the end of an array and returns the new length of the array', () => {
        var obj = {
            length: 0,

            addElem: function addElem(elem) {
                // obj.length is automatically incremented 
                // every time an element is added.
                [].push.call(this, elem);
            }
        };

        // Let's add some empty objects just to illustrate.
        obj.addElem({});
        obj.addElem({});
        expect(obj.length).toBe(2);
        delete obj.addElem;
        expect(obj).toEqual({ 0: Object({}), 1: Object({}), length: 2 })
    })
    it('Calling a function before it’s been declared', () => {
        a()
        function a() {
            b()
        }
        function b() {
            expect(true).toBeTruthy()
        }

    });
    it('', () => {
        const filter = document.createElement('filter')
        expect(filter.id).toEqual('')
        filter.setAttribute('id', 'image')
        expect(filter.id).toEqual('image')
        const h1 = document.createElement('h1')
        expect(h1.style.filter).toEqual('')
        h1.style.filter = 'url(#image)'
        expect(h1.style.filter).toEqual('url("#image")')
    });
    it('renting', () => {
        const total = 4900, me = 2000, her = 1500, cigarette = 30 * 10, supper = 20 * 10, medicine = 100, taxi = 15 * 6 + 10, timeConvertMoney = 10 / 60 * 30 * (23000 / 21 / 8), happiness = Infinity;
        expect(timeConvertMoney).toBeGreaterThan(650)
        expect(me + her + cigarette + supper + medicine + taxi + timeConvertMoney + happiness).toBeGreaterThan(total)

    });
    it('The __lookupGetter__ method returns the function bound as a getter to the specified property.', () => {
        var obj = {
            get foo() {
                return Math.random() > 0.5 ? 'foo' : 'bar';
            }
        };
        expect(obj.__lookupGetter__('foo')).toMatch(/foo|bar/);
        const func = Object.getOwnPropertyDescriptor(obj, "foo").get;
        expect(func()).toMatch(/foo|bar/);
    });
});
describe('Progressive Web App', () => {
    it(' It loads quickly, even on flaky networks, sends relevant push notifications, has an icon on the home screen, and loads as a top-level, full screen experience', () => {
        const PWA = 'PRCAFSDRIL', contents = 'Progressive, Responsive, Connectivity independent, App-like, Fresh, Safe, Discoverable, Re-engageable, Installable, Linkable';
        const arr = contents.match(/[A-Z]/g);
        // expect(arr)
        expect(arr.join('')).toEqual(PWA)
    })
});
describe(`Films`, () => {

    describe('Star Wars', () => {
        it('Theatrical films', () => {

            const originalTrilogy = ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi',], prequelTrilogy = ['The Phantom Menace', 'Attack of the clones', 'Revenge of the Sith'], sequelTrilogy = ['The force Awakens', 'The Last Jedi', '']
            expect(originalTrilogy.concat(prequelTrilogy, sequelTrilogy).length).toBe(9)
        })
    });
    describe(`The Hitchhiker's Guide to the Galaxy`, () => {
        it(`>>> (Zero-fill right shift)`, () => {
            expect(9 >>> 2).toBe(2)
            expect(-9 >>> 2).toBe(1073741821)
            expect(-9 >> 2).toBe(-3)
            expect(42 >>> 0).toBe(42)
            const num = 6.;
            expect(num.toString(2)).toBe(`110`)
            expect(Number((42 >>> 0).toString(2))).toBe(101010)
        });
        it(``, () => {

        });
    })
})
describe('Munsell Color System', () => {
    it(' For this reason alone the system proposed by Mr. Munsell, with its three dimensions of hue, value, and chroma, is a decided step in advance over any previous proposition', () => {
        const MunsellColSys = ['hue', 'value', 'chroma'], hue = 'hue', value = 'value', chroma = 'chroma';
        expect(MunsellColSys).toContain(hue);
    })
});
describe(`Color:Physics of color
1.1	Spectral colors
1.2	Color of objects
2	Perception
2.1	Development of theories of color vision
2.2	Color in the eye
2.3	Color in the brain
2.4	Nonstandard color perception
2.5	Afterimages
2.6	Color constancy
2.7	Color naming
2.8	Associations
3	Spectral colors and color reproduction
3.1	Additive coloring
3.2	Subtractive coloring
3.3	Structural color`, () => {
        beforeAll(function () {
            jasmine.addMatchers({
                toBeInRange: function () {
                    return {
                        compare: function (actual, expected) {
                            return {
                                pass: actual >= expected[0] && actual <= expected[1]
                            };
                        }
                    };
                }
            });
        })
        it('Spectral colors: This perception of color derives from the stimulation of cone cells in the human eye by electromagnetic radiation in the spectrum of light', () => {
            // peaking near 564–580 nm(red); medium - wavelength, peaking near 534–545 nm(green); and short - wavelength light, near 420–440 nm(blue).
            const threeBandsLight = [[564, 580], [534, 545], [420, 440]], red = 570, green = 540, blue = 430;
            expect(red).toBeLessThan(threeBandsLight[0][1]);
            expect(red).toBeGreaterThan(threeBandsLight[0][0]);
            expect(red).toBeInRange(threeBandsLight[0]);
        });
        it('')
        it(`A viewer's perception of the object's color depends not only on the spectrum of the light leaving its surface, but also on a host of contextual cues, so that color differences between objects can be discerned mostly independent of the lighting spectrum, viewing angle, etc. This effect is known as color constancy.`, () => {

        });
        it(`Color keywords are case-insensitive identifiers that represent a specific color`, () => {
            const arr = colors.split(/\n/);
            expect(arr.length).toBe(151);
            expect([' 	midnightblue	#191970	 '].includes(' 	midnightblue	#191970	 ')).toBeTruthy();

            expect(arr.includes(' 	midnightblue	#191970	 ')).toBeTruthy()
            expect(' 	midnightblue	#191970	 '.trim().split(/\s+/)).toEqual(['midnightblue', '#191970']);
            const midnightblue = ['midnightblue', '#191970'];
            expect({
                [midnightblue[0]]: midnightblue[1]
            }.midnightblue).toBe('#191970')
        })
    });
describe('Short Coding', () => {
    it('seperated loops', () => {
        const char = ["ABC", "DEF", "GHI", "JKL"]

        let i, j, times = 0;
        const m = 4, n = 3;

        for (i = 0; i < m; ++i) {

            times++;
        }
        expect(times).toBe(4)
        for (j = 0; j < n; ++j) {
            times++
        }
        expect(times).toBe(7);
        times = 0;
        for (i = j = 0; i < m || j < n;) {

            i < m ? (times++ , ++i) : (times++ , ++j);
        }
        expect(times).toBe(7);
        times = 0;
        for (i = j = 0; i < m ? (times++ , ++i) : j < n ? (times++ , ++j) : 0;);
        expect(times).toBe(7)
    });
    it('nested loop', () => {
        const char = ["ABC", "DEF", "GHI", "JKL"]

        let i, j, times = times1 = 0;
        const m = 4, n = 3;

        for (i = 0; i < m; ++i) {

            times++;
            for (j = 0; j < n; ++j) {
                times1++
            }
        }
        expect(times).toBe(4)
        expect(times1).toBe(12);
        times = times1 = 0;
        for (i = 0, j = 0; i < m;) {
            j < n ? (times1++ , j++) : (times++ , j = 0, ++i);
        }
        expect(times).toBe(4)
        expect(times1).toBe(12);
    })

});
describe(`Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers.`, () => {
    it(`Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.`, () => {
        expect(5 & 13).toBe(5); // 0101 & 1101 = 0101
        expect(parseInt("0101", 2) & parseInt("1101", 2)).toBe(5);
        expect(5 & 13 & 3).toBe(1); // 0101 & 1101 & 0011 = 0001
        expect(5 | 13).toBe(13); // 0101 | 1101 = 1101
    });
    it(`The operands of all bitwise operators are converted to signed 32-bit integers in two's complement format.`, () => {
        const binary = parseInt('00000000000000000000000100111010', 2)
        expect(binary).toBe(314)
    });
    describe(`Bitwise logical operators`, () => {
        it(`& (Bitwise AND)`, () => {
            expect(14 & 9).toBe(8)
            const num1 = Number((14 >>> 0).toString(2)), num2 = Number((9 >>> 0).toString(2)), num3 = Number((8 >>> 0).toString(2))
            expect(num1).toBe(1110)
            expect(num2).toBe(1001)
            expect(num3).toBe(1000)
        });
    })
})