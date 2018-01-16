'use strict'
const fs = require('fs');

function up() {
    return new Promise(function (resolve) {
        resolve()
    })
}

const read = () => {
    return new Promise((resolve,reject) => {
        console.log(process.cwd())
        const str = fs.readFile('./lib/test.txt', (contents) => {
            return resolve(contents)
        },(err)=>{
            return reject(err.message)
        });
    });
}
module.exports = {
    up, read
}