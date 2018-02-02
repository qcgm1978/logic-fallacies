const chai = require('chai'), should = chai.should(), fs = require('fs');
const sinon=require('sinon')
 const progressSpy = sinon.spy();
describe('asynchronous programming background', () => {
    const funcA = () => {
    }
    const funcB = () => {
        throw RangeError
    }
    const funcC = () => {
    }
    it('node.js rejection handling', () => {
        process.should.instanceof(Object)
        process.on('unhandledRejection', (reason, promise) => {
        })
    })
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
        fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
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
        iterator.next().should.eql({value: 'a', done: false})
        iterator.next().should.eql({value: 'b', done: false})
        iterator.next().should.eql({value: undefined, done: true})
    });
    it('Since each of the await calls will trigger the `.catch` if they fail..', () => {
        const main = async (paramsA, paramsB, paramsC) => {
            const resA = await funcA(paramsA)
            const resB = await funcB(paramsB)
            const resC = await funcC(paramsC)
            return {resA, resB, resC}
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
            return {resA, resB, resC}
        }
        // ... all we need is this `.catch` to handle all of them.
        main()
            .then(d => {
            })
            .catch(e => {
            })
        i.should.equal(0)
    });
    it('Promise executor executes immediately', (done) => {
        let i = 0;
        const promise = new Promise((resolve, reject) => {
            i++;
            i.should.equal(1);
            resolve(i)
        });
        i.should.equal(1);
        i++;
        promise.then(data => {
            data.should.equal(1);
            i = data;
            done()
        });
        i.should.equal(2)
    });
    it('non-promise thenable', (done) => {
        let func = () => 42;
        Promise.resolve(func).then((data) => {
            data.should.instanceof(Function);
            data().should.equal(42)
        });
        func = {
            then(resolve, reject) {
                resolve(42)
            },
        };
        Promise.resolve(func).then(data => {
            data.should.equal(42)
        });
        func = {
            then(resolve, reject) {
                reject(0)
            }
        }
        Promise.resolve(func).catch(data => {
            data.should.equal(0)
            done()
        })
    });
    it('executor errors', (done) => {
        let promise = new Promise((resolve, reject) => {
            throw Error('error')
        });
        promise.catch(e => {
            e.should.instanceof(Error)
            done()
        });
    });
    
});
