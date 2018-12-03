function a() {
  function b() {
    console.log(myVar);
  }
  var myVar = 1;
  b();
  console.log(myVar);
}

var myVar = 0;
console.log(myVar);
a();
