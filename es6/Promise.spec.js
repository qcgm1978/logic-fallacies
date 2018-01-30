const chai = require('chai'), should = chai.should(), fs = require('fs'), path = require('path');
describe('asynchronous programming background', () => {
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
    it('window.$CONFIG.sinaSSOControllerTemporary.lock', () => {
        // Async/Await
        const main = async (paramsA, paramsB, paramsC) => {
            const resA = await funcA(paramsA)
            const resB = await funcB(paramsB)
            const resC = await funcC(paramsC)
            return {resA, resB, resC}
        }
        const funcA = () => {
        }
        const funcB = () => {
        }
        const funcC = () => {
        }
        main()
            .then(d => {
                d.should.instanceof(Object)
            })
            .catch(e => {
                console.log(e)
            })
    })
});