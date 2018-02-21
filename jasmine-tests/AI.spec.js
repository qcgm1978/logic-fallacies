// const deepLearning = require('deeplearn')
// import dl from 'deeplearn'; // If not loading the script as a global
describe('dl', () => {
    it('Let’s add a scalar value to a 1D Tensor. Deeplearn js supports broadcasting the value of scalar over all the elements in the tensor.', () => {
        const a = dl.tensor1d([1, 2, 3]);
        const b = dl.scalar(2);

        const result = a.add(b); // a is not modified, result is a new tensor
        result.data().then(data => expect(data).toEqual(new Float32Array([3, 4, 5])));
        // Alternatively you can use a blocking call to get the data.
        // However this might slow your program down if called repeatedly.
        expect(result.dataSync()).toEqual(new Float32Array([3, 4, 5])); //   
    })

})