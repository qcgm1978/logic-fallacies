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
    });
    it('Tensors', () => {
        let shape = [2, 3]; // 2 rows, 3 columns
        let a = dl.tensor2d([1.0, 2.0, 3.0, 10.0, 20.0, 30.0], shape);
        expect(a.shape).toEqual(shape);
        expect(a.size).toEqual(shape[0] * shape[1])
        expect(a.dtype).toEqual('float32')
        // deeplearn.js can also infer the shape
        let b = dl.tensor2d([[0.0, 2.0], [4.0, 6.0]]);  // 2 rows, 2 columns
        expect(b.shape).toEqual([2, 2]);
        expect(b.size).toEqual(4)
        expect(b.dtype).toEqual('float32');
        let c = dl.tensor2d([[0.0, 2.0], [4.0, 6.0]]);
        c = c.square();

        // Async call to get the data from the tensor
        c.data().then(data => expect(data).toEqual(new Float32Array([0, 4, 16, 36])))

        // Alternatively we can also call this synchronously
        let data = c.dataSync();
        expect(data).toEqual(new Float32Array([0, 4, 16, 36]));
    })
    it('Operations(Ops)', () => {
        let a = dl.tensor2d([[1.0, 2.0], [3.0, 4.0]]);
        let b = dl.tensor2d([[0.0, 2.0], [4.0, 6.0]]);

        // The library has a chainable API allowing you to call operations
        // directly as methods on Tensors.
        let average = a.sub(b).square().mean();
        expect(average.shape).toEqual([])
        // All operations are also exposed as functions in the main namespace
        // so we could also do.
        let avg = dl.mean(dl.square(dl.sub(a, b)));
        expect(avg.shape).toEqual([])
    });
    it('Tidy Operations', (done) => {
        let a = dl.tensor2d([1.0, 2.0, 3.0, 4.0]);

        expect(a.size).toEqual(4)
        // dl.tidy takes a function to tidy up after
        let average = dl.tidy(() => {
            // dl.tidy will clean up all the GPU memory used by tensors inside
            // this function, other than the tensor that is returned.
            //
            // Even in a short sequence of operations like the one below, a number
            // of intermediate tensors get created. So it is a good practice to
            // put your math ops in a tidy!
            let b = dl.tensor2d([4.0, 6.0, 1.0, 0]);
            return a.sub(b).square().mean();
        });
        expect(average.size).toEqual(1)
        setTimeout(() => {
            expect(average.size).toEqual(1)
            done()
        }, 1000);
        let c = dl.tensor2d([[0.0, 2.0], [4.0, 6.0]]);
        c = c.square();
        c.dispose(); // Clean up GPU buffer
        expect(c.size).toEqual(4)
    })
})