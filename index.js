module.exports = (function() {
  var innerVal = 123;
  return {
    closureTest: function() {
      if (innerVal === 123) {
        console.log('oh yeah, closure exported correctly ;)');
      }
      else {
        console.log('no fun, bro ;(');
      }
    }
  }
})();
