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
    it(`the square root of minus one`, () => {
        const i = Math.sqrt(-1);
        expect(i).toBeNaN()
        const c = new Complex("i");
        // base on G:\logic-fallacies\jasmine-www\scripts\complex.js
        expect(Math.pow(c, 2)).toBe(0)
        expect(parseInt(c.mul(c))).toBe((-1))
    });
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
describe('Star Wars', () => {
    it('Theatrical films', () => {

        const originalTrilogy = ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi',], prequelTrilogy = ['The Phantom Menace', 'Attack of the clones', 'Revenge of the Sith'], sequelTrilogy = ['The force Awakens', 'The Last Jedi', '']
        expect(originalTrilogy.concat(prequelTrilogy, sequelTrilogy).length).toBe(9)
    })
});
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