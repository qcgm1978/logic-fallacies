'use strict'
const User = require('./User')
const expect = require('chai').expect
describe('User module', () => {
    describe('"up"', () => {
        it('should export a function', () => {
            expect(User.up).to.be.a('function')
        })
        it('should return a Promise', () => {
            const usersUpResult = User.up()
            expect(usersUpResult.then).to.be.a('Function')
            expect(usersUpResult.catch).to.be.a('Function')
        })
    })
    describe('read',()=>{
        it('should a func',function(){
            let read=User.read();
            expect(read.then).to.be.a('Function');
            expect(read.catch).to.be.a('Function');
            read.then((content)=>{
                expect(content).to.equal('a')
            },(err)=>{
                expect(err).to.equal('a')
                // console.log(err.message)
            })
        });
        // it('should resolve',)
    })
})