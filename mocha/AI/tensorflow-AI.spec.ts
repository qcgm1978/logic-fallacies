import * as tf from '@tensorflow/tfjs';

import { expect } from 'chai'

// class MockHelloService implements HelloService {

//     public sayHello(): string {
//         return "Hello world!";
//     }
// }

// describe("HelloComponent", () => {

//     it("should say 'Hello world!'", () => {

//         let mockHelloService = new MockHelloService();
//         let helloComponent = new HelloComponent(mockHelloService)

//         expect(helloComponent.sayHello()).to.equal("Hello world!");
//     });
// });

describe(`A WebGL accelerated, browser based JavaScript library for training and deploying ML models`, () => {
    before(() => {
        process.on('unhandledRejection', function (err, promise) {
            debugger;
            console.error('Unhandled rejection (promise: ', promise, ', reason: ', err, ').');
        });
    })
    it(`train a simple model in TensorFlow.js`, (done) => {

        // Define a model for linear regression.
        const model = tf.sequential();
        model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

        // Prepare the model for training: Specify the loss and the optimizer.
        model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

        // Generate some synthetic data for training.
        const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
        const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

        // Train the model using the data.
        model.fit(xs, ys).then(() => {
            // Use the model to do inference on a data point the model hasn't seen before:
            // model.predict(tf.tensor2d([5], [1, 1])).print();
            const tensor = model.predict(tf.tensor2d([5], [1, 1]));
            expect(tensor.dataSync()[0]).to.be.greaterThan(7.9)
            done();
        })
    });
    describe(`broadcasting the value of scalar over all the elements in the tensor.`, () => {
        describe(`The Float32Array typed array represents an array of 32-bit floating point numbers (corresponding to the C float data type) in the platform byte order`, () => {
            it(`Different ways to create a Float32Array`, () => {
                // From a length
                var float32 = new Float32Array(2);
                float32[0] = 42;
                expect(float32[0]).to.equal(42)
                expect(float32.length).to.equal(2)
                expect(float32.BYTES_PER_ELEMENT).to.equal(4)

                // From an array
                var arr = new Float32Array([21, 31]);
                expect(arr[1]).to.equal(31)

                // From another TypedArray
                var x = new Float32Array([21, 31]);
                var y = new Float32Array(x);
                expect(y[0]).to.eql(21)

                // From an ArrayBuffer
                var buffer = new ArrayBuffer(16);
                var z = new Float32Array(buffer, 0, 4);

                // From an iterable 
                var iterable = function* () { yield* [1, 2, 3]; }();
                var float32 = new Float32Array(iterable);
                // Float32Array[1, 2, 3]

            });
        });
        it(`add a scalar value to a vector`, (done) => {

            const a = tf.tensor1d([1, 2, 3]);
            const b = tf.scalar(2);

            const result = a.add(b); // a is not modified, result is a new tensor
            result.data().then(data => {
                expect(data).to.eql(new Float32Array([3, 4, 5])); // Float32Array([3, 4, 5]
                done();
            }).catch(err => {
                done();
            })
            // Alternatively you can use a blocking call to get the data.
            // However this might slow your program down if called repeatedly.
            expect(result.dataSync()).to.eql(new Float32Array([3, 4, 5])); // Float32Array([3, 4, 5]
        });
    });
});
describe(`https://arxiv.org/pdf/1803.10827.pdf`, () => {
    it(`We use an average of weighted class entropy losses, one
for each joint, to train our encoder-decoder`, () => {

        });
});