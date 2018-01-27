const chai = require('chai'), should = chai.should();
describe('js feature', () => {
  it('first', () => {
    let str = ("Hello, World!");
    str.should.equal('Hello, World!');
    function upcase(strings, ...values) {
      return values.map(name => name[0].toUpperCase() + name.slice(1))
        .join(' ') + strings[2];
    }

    const person = {
      first: 'brendan',
      last: 'eich',
      age: 56,
      position: 'CEO of Brave Software',
    };
    const { first, last } = person;
    upcase`${first} ${last} is the creator of JavaScript!`.startsWith('Brendan Eich').should.ok
    const _ = require('lodash');

    const arr = [0, 1, false, 2, '', 3];
    (_.compact(arr)).should.eql([1, 2, 3]);

  });
  it('node', (done) => {
    const http = require('http');
    http.should.instanceof(Object);
    http.createServer.should.instanceof(Function)
    new Promise((resolve, reject) => {
      http.createServer((request, response) => {
        console.log('Server running on http://localhost:3000');
      }).listen(3000);

    }).then(({ request, response }) => {
      console.log('then')
      request.should.instanceof(Boolean).and.notify(done)
    });
    done()
  });
  it('open', (done) => {
    const fs = require('fs');
    fs.readFile('./lib/test.txt', { encoding: 'utf-8' }, (err, data) => {
      data.should.equal('text')
      done()

    });
  });
})



