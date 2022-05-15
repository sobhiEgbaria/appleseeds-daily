function Square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }
  
  Square.prototype.isSquare = function() {

    if (this.a === this.b && this.b === this.c && this.c === this.d) {
      return true;
    } else {
      return false;
    }
  };
  
  let someSquare = new Square(3, 4, 4, 4).isSquare();
  console.log(someSquare);
  