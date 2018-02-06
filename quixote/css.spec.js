var assert = require("chai").assert;
var quixote = require("quixote");

describe("Button", function() {

  var frame;
  var container;
  var button;
  
  before(function(done) {
    frame = quixote.createFrame({
      stylesheet: "/base/src/client/screen.css"
    }, done);
  });
  
  after(function() {
    frame.remove();
  });
});