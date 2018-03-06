jest.setTimeout(10000);
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://www.google.com.hk')
  })

  it('should display "google" text on page', async () => {
    await expect(page).toMatch('google')
  })
})