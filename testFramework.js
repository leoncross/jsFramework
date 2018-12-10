function Test () {

}

Test.prototype.comparison = function (argument1, expectedvalue) {
  try {
    if (isNaN(expectedvalue)) throw "expected value is not a number"
    if (argument1 !== expectedvalue) throw "doesnt equal the expected value"
    if (argument1 === expectedvalue) console.log('Pass')
    }
  catch(err) {
    console.log('Error - ' + err)
  }
}


Test.prototype.run = function(message, argument, expectedvalue) {
  console.log(message)
  this.comparison(argument, expectedvalue)
}


var test = new Test();
var square = new Square(2)
test.run('it compares two values', square.area(), "four");
test.run('it compares two values', square.perimeter(), 8);
