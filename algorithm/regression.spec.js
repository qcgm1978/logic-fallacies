const chai = require('chai'), should = chai.should();
const regression = require('regression');
const result = regression.linear([[0, 1], [32, 67], [12, 79]]);
const gradient = result.equation[0];
const yIntercept = result.equation[1];
const data = [[0, 1], [32, 67] , [12, 79]];
const result1 = regression.polynomial(data, { order: 3 });
describe('A javascript library containing a collection of least squares fitting methods ',()=>{
    it('Fits the input data to a straight line with the equation . It returns the coefficients in the form [m, c].',()=>{
        // result.should.equal({ points: [ [ 0, 22.75 ], [ 32, 80.03 ], [ 12, 44.23 ] ],
        //     predict: ['predict'],
        //     equation: [ 1.79, 22.75 ],
        //     r2: 0.48,
        //     string: 'y = 1.79x + 22.75' })
        result.points.should.eql( [ [ 0, 22.75 ], [ 32, 80.03 ], [ 12, 44.23 ] ])
    });
});