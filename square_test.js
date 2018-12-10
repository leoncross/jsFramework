function Test () {

}

Test.prototype.comparison = function (argument1, expectedvalue) {
  if (argument1 === expectedvalue){
    console.log('Pass')
  } else {
    console.log('Fail')
  }
}


var square = new Square(2)
var test = new Test ()
test.comparison(square.area(), 4)
