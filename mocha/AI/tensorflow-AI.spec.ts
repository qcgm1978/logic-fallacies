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
    it(`broadcasting the value of scalar over all the elements in the tensor.`, () => {
        const a = tf.tensor1d([1, 2, 3]);
        const b = tf.scalar(2);

        const result = a.add(b); // a is not modified, result is a new tensor
        result.data().then(data => console.log(data)); // Float32Array([3, 4, 5]

        // Alternatively you can use a blocking call to get the data.
        // However this might slow your program down if called repeatedly.
        console.log(result.dataSync()); // Float32Array([3, 4, 5]
    });
});
describe(`https://arxiv.org/pdf/1803.10827.pdf`, () => {
    it(`We use an average of weighted class entropy losses, one
for each joint, to train our encoder-decoder`, () => {

        });
});