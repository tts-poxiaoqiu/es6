// es5

// es6
class Point {}
class ColorPoint extends Point {
    //constructor() {} // Must call super constructor in derived class before accessing 'this' or returning from derived construct
    constructor(...args) {
        super(...args);
    }
}

let cp = new ColorPoint();

class BookPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }

    toString() {
        return this.color + ' ' + super.toString();
    }
}

console.log(Object.getPrototypeOf(BookPoint) === Point);