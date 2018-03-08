'use strict'
const chai = require('chai'), should = chai.should();
const User = require('./User')
const expect = require('chai').expect
describe(`The crypto module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions`, () => {
  it('', () => {
    const crypto = require('crypto');
    const secret = 'abcdefg';
    const hash = crypto.createHmac('sha256', secret)
      .update('I love cupcakes')
      .digest('hex');
    console.log(hash);
    //   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e
  })
});
describe('User module', () => {
  describe('"up"', () => {
    it('should export a function', () => {
      expect(User.up).to.be.a('function')
    });
    it('should return a Promise', () => {
      const usersUpResult = User.up()
      expect(usersUpResult.then).to.be.a('Function')
      expect(usersUpResult.catch).to.be.a('Function')
    });
    it('should create a table named "users"', () => {
      // return User.up()
      //   .then(() => db.schema.hasTable('users'))
      //   .then((hasUsersTable) => expect(hasUsersTable).to.be.true)
    })
  })
});
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
        // console.log('Server running on http://localhost:3000');
      }).listen(3000);

    }).then(({ request, response }) => {
      console.log('then')
      request.should.instanceof(Boolean).and.notify(done)
    });
    done()
  });
  it('open', (/* done */) => {
    const fs = require('fs');
    fs.readFile('./others/test.txt', { encoding: 'utf-8' }, (err, data) => {
      // data.should.equal('text')
      // done()
    });
  });
});



