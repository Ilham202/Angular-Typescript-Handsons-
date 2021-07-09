var Rectangle = /** @class */ (function () {
    function Rectangle() {
        this.area = function (x, y) {
            console.log("Area is : " + (x * y));
        };
    }
    return Rectangle;
}());
var rect = new Rectangle();
console.log(rect.area(3, 5));
