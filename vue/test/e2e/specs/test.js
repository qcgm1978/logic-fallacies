// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL
    browser.url(devServer)
      .waitForElementVisible('#app', 5000)
      .getCssProperty("h1", "display", function (result) {
        this.assert.equal(typeof result, "object");
        this.assert.equal(result.status, 0);
        this.assert.equal(result.value, 'inline');
      })
    // browser
    //   .url(devServer)
    //   .waitForElementVisible('#app', 5000)
    //   .assert.elementPresent('.hello')
    //   .assert.containsText('h1', 'test')
    //   .assert.elementCount('img', 0)

    //   .end()

  }
}
