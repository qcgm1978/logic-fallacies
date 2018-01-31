const chai = require('chai'), should = chai.should(), fs = require('fs');
describe('asynchronous programming background', () => {
    const funcA = () => {
    }
    const funcB = () => {
        throw RangeError
    }
    const funcC = () => {
    }
    it('event model', () => {
        let ele = {}, temp = 0;
        ele.onClick = () => temp = 1;
        ele.click = ele.onClick;
        (ele).should.instanceof(Object, '');
        temp.should.equal(0)
        ele.click()
        temp.should.equal(1)
    });
    it('callback pattern', (done) => {
        let i = '';
        fs.should.instanceof(Object, '');
        i.should.equal('')
        let filePath = __dirname + '/file.txt';
        fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                i = data;
                i.should.equal('I\'m file.txt contents.')
                done()
            }
        });
        i.should.equal('')
    });
    it('Synchronous iteration', () => {
        const iterable = ['a', 'b'];
        const iterator = iterable[Symbol.iterator]();
        iterator.next().should.eql({ value: 'a', done: false })
        iterator.next().should.eql({ value: 'b', done: false })
        iterator.next().should.eql({ value: undefined, done: true })
    });
    it('Since each of the await calls will trigger the `.catch` if they fail..', () => {
        const main = async (paramsA, paramsB, paramsC) => {
            const resA = await funcA(paramsA)
            const resB = await funcB(paramsB)
            const resC = await funcC(paramsC)
            return { resA, resB, resC }
        }

        main()
            .then(d => {
                d.should.instanceof(Object)
            })
            .catch(e => {
                e.should.throw(RangeError)
            })
    });
    it('Since each of the await calls will trigger the `.catch` if they fail..', () => {
        const i = 0;
        const main = async (paramsA, paramsB, paramsC) => {
            const resA = await funcA(paramsA)
            const resB = await funcB(paramsB).catch(e => {
                i++
                e.should.throw(RangeError)
            })
            const resC = await funcC(paramsC)

            return { resA, resB, resC }
        }

        // ... all we need is this `.catch` to handle all of them.
        main()
            .then(d => {
            })
            .catch(e => {
            })
        i.should.equal(0)
    })
});
