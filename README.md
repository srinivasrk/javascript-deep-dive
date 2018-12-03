## JavaScript weird parts

* Hoisting
  This does not work
  ```
  b();

  let b = function() {
    console.log('Hello World');
  }
  ```

  But this does
  ```
  b();

  function() {
    console.log('Hello World')
  }

  ```

  Named functions are not hoisted during execution context being created.


* Undefined !
  Almost never set a variable to undefined (let Javascript engine set Undefined)
  ```
  var a;
  console.log(a); --> outputs undefined
  ```

  ```
  var a;
  console.log(b); --> Uncaught ReferenceError
  ```

* Execution

  JavaScript is single threaded & Synchronous

  Execution stack has the global execution context as the first element

  When accessing variables the lexical ordering of the function matters.

  lexically b in global
  ```
  function b() {
    console.log(myVar);
  }

  function a() {
    var myVar = 1;
    b();
    console.log(myVar);
  }

  var myVar = 0;
  console.log(myVar);
  a();
  ```

  Lexically b is inside a()
  ```
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
  ```

* Event Queue
