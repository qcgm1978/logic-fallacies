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
        const filePath = path.join(__dirname, 'file.txt');
        fs.readFile(filePath, {encoding: 'utf-8'},  (err, data) =>{
            if (err) {
                console.log(err);
            } else {
                i = data;
                i.should.equal('I\'m file.txt contents.')
                done()
            }
        });
        i.should.equal('')
    })
});