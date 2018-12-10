function Test () {

}

Test.prototype.test_equal = function (argument, expectedValue) {
  try {
    if (isNaN(expectedValue)) throw "expected value is not a number"
    if (argument !== expectedValue) throw "doesnt equal the expected value"
    if (argument === expectedValue) console.log("%cPass", "color: green")
    }
  catch(err) {
    console.log("%cError - " + err, "color: red")
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
