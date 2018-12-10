function Square(length) {
  this.length = length;
}

Square.prototype.area = function () {
  return this.length * this.length
};

Square.prototype.perimeter = function () {
  return this.length * 4
};
