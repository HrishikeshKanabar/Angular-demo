var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.calculateArea = function (radius) {
        console.log("" + this.pi * radius * radius);
        return this.pi * radius * radius;
    };
    Circle.pi = 3.14;
    return Circle;
}());
Circle.pi; // returns 3.14
Circle.calculateArea(5); // returns 78.5
