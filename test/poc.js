const Point2 = require("../out/cjs/Point2");
const BezierCurve2 = require("../out/cjs/BezierCurve2");

let tmp = new BezierCurve2(
    new Point2(100, 100),
    new Point2(800, 100),
    new Point2(800, 800),
    20
);

console.log(tmp)

console.log(JSON.stringify(tmp.calculateInterpolatedPoints()))
console.log(tmp.getLength())
