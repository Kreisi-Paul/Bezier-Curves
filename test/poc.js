const Point2 = require("../out/cjs/Point2");
const QuadraticBezierCurve2 = require("../out/cjs/QuadraticBezierCurve2");

let tmp = new QuadraticBezierCurve2(
    new Point2(100, 100),
    new Point2(800, 100),
    new Point2(800, 800),
    20
);

console.log(tmp)

console.log(JSON.stringify(tmp.calculateInterpolatedPoints()))
console.log(tmp.getLength())
