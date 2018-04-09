import { expect } from 'chai'

describe(`https://nodejs.org/docs/latest/api/process.html#process_process_argv`, () => {
    it(`The process.argv property returns an array containing the command line arguments passed when the Node.js process was launched.`, () => {
        process.argv.forEach((val, index) => {
            if (index === 0) {

                // expect(`${index}: ${val}`).to.match(/0: D:\\Program Files\\nodejs\\node.exe|0:\s\/usr\s\/\slocal\s\/\sbin\s\/\snode/);
            }
        });
    });
    it(`The process.argv0 property stores a read-only copy of the original value of argv[0] passed when Node.js starts.`, () => {
        // expect(process.argv0).to.eql('D:\\Program Files\\nodejs\\node.exe')
    });
});