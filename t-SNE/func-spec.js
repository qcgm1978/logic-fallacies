describe('', () => {
    it('', () => {
        // expect(pairwise_distances().length).toEqual()
    })
});
describe('promise-like', () => {
    it('await', () => {
        const likePromise = {
            then(resolve, reject) {
                resolve(1)
            }
        };
        const notLikePromise = {
            noThen: 1
        }
        async function run() {
            const val1 = await notLikePromise;
            expect(val1).toEqual({
                noThen: 1
            });
            const val2 = await likePromise;
            expect(val2).toEqual(1)
        }
        run();
    })
})