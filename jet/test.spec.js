jest.setTimeout(10000);
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
describe('Google', () => {
  // beforeAll(async () => {
  //   await page.goto('https://www.google.com.hk')
  // })

  // it('should display "google" text on page', async () => {
  //   await expect(page).toMatch('google')
  // })
})
describe('Reflect', () => {
  it('The static Reflect.apply() method calls a target function with arguments as specified.', () => {
    expect(Reflect.apply(Math.floor, undefined, [1.75])).toBe(1)
    // expected output: 1

    expect(Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111])).toEqual("hello");
    // expected output: "hello"

    expect(Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index).toEqual(4);
    // expected output: 4

    expect(Reflect.apply(''.charAt, 'ponies', [3])).toEqual('i');
    // expected output: "i"

  })
});
describe('flatten', () => {

  it('The flatten() method creates a new array with all sub-array elements concatted into it recursively up to the specified depth', () => {
    var arr1 = [1, 2, [3, 4]];
    arr1.flatten();
    // [1, 2, 3, 4]

    var arr2 = [1, 2, [3, 4, [5, 6]]];
    arr2.flatten();
    // [1, 2, 3, 4, [5, 6]]

    var arr3 = [1, 2, [3, 4, [5, 6]]];
    arr3.flatten(2);
    // [1, 2, 3, 4, 5, 6]
  })
})