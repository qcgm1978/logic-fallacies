describe(`ES6 classes introduce syntactic sugar to make prototypes look like classical inheritance.`, () => {
    it(`Prototypal Inheritance in ES5`, () => {
        function Shape(color) {
            this.color = color;
        }

        Shape.prototype.getColor = function () {
            return this.color;
        }

        function Rectangle(color, width, height) {
            Shape.call(this, color);
            this.width = width;
            this.height = height;
        };

        Rectangle.prototype = Object.create(Shape.prototype);
        Rectangle.prototype.constructor = Rectangle;

        Rectangle.prototype.getArea = function () {
            return this.width * this.height;
        };

        let rectangle = new Rectangle('red', 5, 8);
        expect(rectangle.getArea()).toBe(40);
        expect(rectangle.getColor()).toBe('red');
        expect(rectangle.toString()).toBe('[object Object]');

    });
    it(`The ES6 way`, () => {
        class Shape {
            constructor(color) {
                this.color = color;
            }

            getColor() {
                return this.color;
            }
        }

        class Rectangle extends Shape {
            constructor(color, width, height) {
                super(color);
                this.width = width;
                this.height = height;
            }

            getArea() {
                return this.width * this.height;
            }
        }

        let rectangle = new Rectangle('red', 5, 8);
        expect(rectangle.getArea()).toBe(40);
        expect(rectangle.getColor()).toBe('red');
        expect(rectangle.toString()).toBe('[object Object]');


    });
    it(`Call super as the first thing in a constructor of a class defined with extends.`, () => {
        var A, B;
        expect(() => {
            class D { constructor() { } }
            class C extends D { constructor() { } }
            B = C, A = D;
        }).not.toThrow()

        expect(() => new B()).toThrow()

        class C extends A { }

        new C()

        expect(C.constructor.name).toBe('Function')
    });
    it(`Methods of the parent class can be redefined in the child class.`, () => {
        class User {
            constructor() {
                this.accessMatrix = {};
            }
            hasAccess(page) {
                return this.accessMatrix[page];
            }
        }

        class SuperUser extends User {
            hasAccess(page) {
                return true;
            }
        }

        var su = new SuperUser();

        expect(su.hasAccess('ADMIN_DASHBOARD')).toBeTruthy();
    });
    it(`Abstract classes are classes that cannot be instantiated. `, () => {
        class ChartView {
            constructor( /* ... */) {
                if (new.target === ChartView) {
                    throw new Error(
                        'Abstract class ChartView cannot be instantiated.');
                }
                // ...
            }
            // ...
        }
        expect(() => new ChartView).toThrow()
    });
    it(`Getters and setters are used to create computed properties.`, () => {
        class Square {
            constructor(width) { this.width = width; }
            get area() {
                return this.width * this.width;
            }
        }

        var square = new Square(5);

        expect(square.area).toBe(25)

        expect(square.area = 36).toBe(36)
        class Square1 {
            constructor(width) { this.width = width; }
            get height() {
                return this.width;
            }
            set height(h) {
                this.width = h;
            }
            get area() {
                return this.width * this.height;
            }
        }

        square = new Square1(5);

        expect(square.width).toBe(5)

        expect(square.height).toBe(5)

        expect(square.height = 6).toBe(6)

        expect(square.width).toBe(6)

        expect(square.area).toBe(36)

        expect(square.width = 4).toBe(4)

        expect(square.height).toBe(4)

    });
    it(`Static methods are operations defined on a class. These methods can only be referenced from the class itself, not from objects.`, () => {
        class C {
            static create() { return new C(); }
            constructor() { console.log('constructor'); }
        }
        var c;
        expect(() => { c = C.create() }).not.toThrow();

        expect(() => c.create()).toThrow();
    });
})