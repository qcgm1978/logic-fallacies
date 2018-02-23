const onmessage = function(e) {
    var array = e.data;
   
    var sum = array.reduce(function(sum, element) { return sum + element.foo; }, 0);
   
    postMessage(sum);
    function postMessage(result) {
        expect(result).toBe(6);
    }
  };