const onmessage = function(e) {
    var array = e.data;
   
    var sum = array.reduce(function(sum, element) { return sum + element.foo; }, 0);
   
    postMessage1(sum);
    function postMessage1(result) {
        expect(result).toBe(6);
    }
  };