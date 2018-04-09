const chai = require('chai'), should = chai.should();
const regression = require('regression');
const result = regression.linear([[0, 1], [32, 67], [12, 79]]);
const gradient = result.equation[0];
const yIntercept = result.equation[1];
const data = [[0, 1], [32, 67], [12, 79]];
const result1 = regression.polynomial(data, { order: 3 });
import { expect } from 'chai'
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
describe(`https://wanago.io/2018/04/09/explaining-promises-and-callbacks-while-implementing-a-sorting-algorithm/`, () => {
    beforeAll: {

        this.sort = (numbers, onSuccess, onFailure) => {
            const sortedNumbers = [];
            for (let number of numbers) {
                if (this.isInteger(number)) {
                    setTimeout(() => {
                        sortedNumbers.push(number);
                        if (sortedNumbers.length === numbers.length && onSuccess) {
                            onSuccess(sortedNumbers);
                        }
                    }, number);
                } else {
                    onFailure('Only integers allowed!');
                    break;
                }
            }
            return sortedNumbers;
        }
        this.isInteger = (number) => {
            return Math.ceil(number) === number
        }
    }
    describe(`Callbacks`, () => {
        it(`It creates a new array of numbers and uses setTimeout to wait with pushing the numbers to it`, (done) => {


            const numbers = [5, 3, 2, 4];
            this.sort(numbers, sortedNumbers => {
                expect(sortedNumbers.length).to.eql(4); // 
                done()
            }, reasonOfFailure => {
                console.error(reasonOfFailure);
            });
        });
        it(`a sequence of operations using callbacks`, () => {
            function onFailure(reason) {
                console.error(reason);
            };

            const numbers = [5, 3, 2, 4];
            this.sort(numbers, (sortedNumbers) => {
                sortedNumbers.push(7, 1, 6);
                this.sort(sortedNumbers, (reallySortedNumbers) => {
                    reallySortedNumbers.push(10, 21, 11, 17);
                    this.sort(reallySortedNumbers, (evenMoreSortedNumbers) => {
                        evenMoreSortedNumbers.push(43, 22, 27);
                        this.sort(evenMoreSortedNumbers, (finallySortedNumbers) => {
                            expect(finallySortedNumbers).to.eql([1, 2, 3, 4, 5, 6, 7, 10, 11, 17, 21, 22, 27, 43]); // 
                        }, onFailure);
                    }, onFailure);
                }, onFailure)
            }, onFailure);
        });
    });
    describe(` promise of a future value, a representation of a value not yet available`, () => {
        beforeAll: {
            this.sleep = (time) => {
                return new Promise((resolve, reject) => {
                    if (this.isInteger(time)) {
                        setTimeout(() => {
                            resolve(++time);
                        }, time)
                    } else {
                        reject("Time needs to be an integer");
                    }
                })
            }
        }
        it(`promises work is an implementation of a sleep function`, (done) => {

            this.sleep(10).then(data => {
                expect(data).to.equal(11)
                done();
            }).catch(err => {
                console.log('promise err')
                done()
            })
        });
        it(`sort function to use promises`, (done) => {
            const sort = (numbers) => {
                const sortedNumbers = [];
                return Promise.all(
                    numbers.map(
                        number => this.sleep(number)
                            .then(() => { sortedNumbers.push(number) })
                    )
                )
                    .then(() => sortedNumbers);
            }

            const numbers = [5, 3, 2, 4];
            sort(numbers)
                .then(sortedNumbers => {
                    sortedNumbers.push(7, 1, 6);
                    return sort(sortedNumbers);
                })
                .then(sortedNumbers => {
                    sortedNumbers.push(10, 21, 11, 17);
                    return sort(sortedNumbers);
                })
                .then(sortedNumbers => {
                    sortedNumbers.push(43, 22, 27);
                    return sort(sortedNumbers);
                })
                .then(sortedNumbers => {
                    expect(sortedNumbers).to.eql([1, 2, 3, 4, 5, 6, 7, 10, 11, 17, 21, 22, 27, 43]); // 
                    done()
                })
                .catch(reasonOfFailure => {
                    console.error(reasonOfFailure);
                    done()
                });
        });
    });
});