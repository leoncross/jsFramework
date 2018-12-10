function Square(length) {
  this.length = length;
}

Square.prototype.area = function () {
  return this.length * this.length
};
