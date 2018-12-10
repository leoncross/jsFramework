function Test () {

}

Test.prototype.comparison = function (argument1, expectedvalue) {
  try {
    if (isNaN(expectedvalue)) throw "expected value is not a number"
    if (argument1 === expectedvalue) console.log('Pass')
    }
  catch(err) {
    console.log('Error - ' + err)
  }
}


Test.prototype.tests = function() {
  var square = new Square(2)
  this.comparison(square.area(), 4)
  this.comparison(square.area(), "four")
}


var run = new Test();
run.tests();
//
// var square = new Square(2)
// test.comparison(square.area(), "four")

// console.log(isNaN(4))

// 1) Throw an error, rather than logging a string and and catch the error,
// and use the Stack object to log a useful error message.
//
// 2) Abstract the test description to a string that's
// passed to a generic function - 'test()'
