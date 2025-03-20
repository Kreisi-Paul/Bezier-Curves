"use strict";

class Point2 {
    /**
     * @param {Number} x 
     * @param {Number} y 
    */
    constructor(x, y) {
        /** @type {Number} */
        this.x = x || 0;
        /** @type {Number} */
        this.y = y || 0;
    }

    /**
     * Applies `vector` to this Point
     * @param {Vector2} vector 
    */
    applyVector(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }

    /**
     * @returns {Point2} A copy of `this`
    */
    copy() {
        return new Point2(this.x, this.y);
    }
}

const Vector2 = require("./Vector2.js");
module.exports = Point2;
//VERSION:2025-03-20T22:13:03.589Z