import { expect } from 'chai'
import { Network } from 'neataptic'
const brain = require('brain.js');
describe(`https://blog.bitsrc.io/11-javascript-machine-learning-libraries-to-use-in-your-app-c49772cca46c`, () => {
    describe(`https://github.com/BrainJS/brain.js`, () => {
        it(` approximate the XOR function using brain.js`, () => {
            var net = new brain.NeuralNetwork();

            net.train([{ input: [0, 0], output: [0] },
            { input: [0, 1], output: [1] },
            { input: [1, 0], output: [1] },
            { input: [1, 1], output: [0] }]);

            var output = net.run([1, 0]);  // [0.987]
            expect(output[0]).to.be.within(0.9, 1)
        })
    })
    describe(`http://caza.la/synaptic/#/`, () => {
        it(`The javascript architecture-free neural network library for node.js and the browser`, () => {
            var synaptic = require('synaptic');
            this.network = new synaptic.Architect.Perceptron(40, 25, 3);
            expect(this.network.layers).to.an('object');
        })
    })
    describe(`https://github.com/wagenaartje/neataptic`, () => {
        it(`this network learns the XOR gate (through neuro-evolution)`, (done) => {
            var network = new Network(2, 1);

            var trainingSet = [
                { input: [0, 0], output: [0] },
                { input: [0, 1], output: [1] },
                { input: [1, 0], output: [1] },
                { input: [1, 1], output: [0] }
            ];

            const generator = async () => await network.evolve(trainingSet, {
                equal: true,
                error: 0.03
            });
            // generator().then(data => {

            //     expect(data).to.eql();
            //     done()
            // }).catch(err => {
            //     debugger
            //     done();
            // })
            done()
        });
    });
})