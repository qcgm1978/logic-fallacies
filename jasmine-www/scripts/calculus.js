var CalculusEquation = class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    at() {
        return this.height * this.width;
    }
    derivative() {
        return {
            derivative: () => {

            },
            at: () => {

            }
        }
    }
    integral() {

    }
}
