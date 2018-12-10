function Test () {
}

Test.prototype.test_equal = function (argument, expectedValue) {
  try {
    if (isNaN(expectedValue)) throw new Error ("expected value is not a number")
    if (argument !== expectedValue) throw new Error ("doesnt equal the expected value")
    if (argument === expectedValue) console.log("%c - Pass", "color: green")
    }
  catch(err) {
    console.log("%c - " + err.stack, "color: red")
  }
}

Test.prototype.test = function(func, message, argument, expectedvalue) {
  console.log(message)
  if (func === 'equal') {
    this.test_equal(argument, expectedvalue)
  }
}

var run = new Test();
var square = new Square(2)
run.test('equal', 'it compares two values', square.area(), "four");
run.test('equal', 'it compares two values', square.perimeter(), 8);
