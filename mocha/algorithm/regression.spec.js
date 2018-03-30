const chai = require('chai'), should = chai.should();
const regression = require('regression');
const result = regression.linear([[0, 1], [32, 67], [12, 79]]);
const gradient = result.equation[0];
const yIntercept = result.equation[1];
const data = [[0, 1], [32, 67], [12, 79]];
const result1 = regression.polynomial(data, { order: 3 });
chai.use(require('chai-match'));
describe('A javascript library containing a collection of least squares fitting methods ', () => {
    it('Fits the input data to a straight line with the equation . It returns the coefficients in the form [m, c].', () => {
        result.points.should.eql([[0, 22.75], [32, 80.03], [12, 44.23]]);
        result.should.instanceof(Object);
        result.equation.should.eql([1.79, 22.75]);
        result.r2.should.equal(0.48)
        result.string.replace(/\s+/g, '').should.equal('y=1.79x+22.75')
    });
    it('polynomial', () => {
        const data = [[0, 1], [32, 67], [12, 79]];
        const result = regression.polynomial(data, { order: 3, precision: 3 });
        (result.equation[0] + '').split('.')[1].length.should.equal(3)
    });
});