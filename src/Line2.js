"use strict";

class Line2 {
    /**
     * @param {Point2} p0 
     * @param {Point2} p1 
     */
    constructor(p0, p1) {
        /** @type {Point2} */
        this.p0 = p0;
        /** @type {Point2} */
        this.p1 = p1;
    }

    /**
     * Returns the length of this line
     * @returns {Number}
     */
    getLength() {
        return Math.abs(
            Math.sqrt(Math.pow(this.p1.x - this.p0.x, 2) + Math.pow(this.p1.y - this.p0.y, 2))
        );
    }

    /**
     * Returns a Vector representing `p0 -> p1`
     * @returns {Vector2}
     */
    getVector() {
        return new Vector2(this.p1.x - this.p0.x, this.p1.y - this.p0.y);
    }

    /**
     * Returns `n` intermediates of this line
     * @param {Number} n 
     * @param {Boolean | undefined} includeTerminals Include p0 and p1?
     * @returns {Point2[]}
     */
    getIntermediates(n, includeTerminals) {
        /** @type {Point2[]} */
        let intermediates = new Array();
        let intermediateVector = this.getVector();
        intermediateVector.multiplyMagnitude(1/n);

        for(let i=1; i<n; i++) {
            let tmpVector = intermediateVector.copy();
            tmpVector.multiplyMagnitude(i);

            let tmpPoint2 = this.p0.copy();
            tmpPoint2.applyVector(tmpVector);

            intermediates.push(tmpPoint2);
        }

        if(includeTerminals) {
            intermediates.unshift(this.p0);
            intermediates.push(this.p1);
        }

        return intermediates;
    }

    /**
     * @returns {Line2} A copy of `this`
     */
    copy() {
        return new Line2(this.p0.copy(), this.p1.copy());
    }
}

//###ESM###//
import Point2 from "./Point2.js";
import Vector2 from "./Vector2.js";
export default Line2;
//###ESM###//
//###COMMONJS###//
const Point2 = require("./Point2.js");
const Vector2 = require("./Vector2.js");
module.exports = Line2;
//###COMMONJS###//
