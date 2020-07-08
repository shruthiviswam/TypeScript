var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.drawLine = function () {
        console.log(this.x);
        console.log(this.y);
    };
    return Point;
}());
// object1
var points = new Point;
points.x = 10;
points.y = 20;
points.drawLine();
// object2
var points2 = new Point;
points2.x = 100;
points2.y = 200;
points2.drawLine();
