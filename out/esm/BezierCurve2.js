"use strict";

class BezierCurve2 {
    /** @type {Point2} @private */
    #p0;
    get p0() {
        return this.#p0
    }
    set p0(point) {
        if(Object.getPrototypeOf(point) != Point2.prototype)
            throw new TypeError("Invalid object passed");
        this.#p0 = point;
    }

    /** @type {Point2} @private */
    #p1;
    get p1() {
        return this.#p1
    }
    set p1(point) {
        if(Object.getPrototypeOf(point) != Point2.prototype)
            throw new TypeError("Invalid object passed");
        this.#p1 = point;
    }

    /** @type {Point2} @private */
    #p2;
    get p2() {
        return this.#p2
    }
    set p2(point) {
        if(Object.getPrototypeOf(point) != Point2.prototype)
            throw new TypeError("Invalid object passed");
        this.#p2 = point;
    }

    /** @type {Number} @private */
    #intermediates;
    get intermediates() {
        return this.#intermediates;
    }
    set intermediates(amount) {
        if(typeof amount != "number" && amount%1==0)
            throw new TypeError("Invalid object passed");
        this.#intermediates = amount;
    }

    /**
     * @param {Point2} p0 
     * @param {Point2} p1 
     * @param {Point2} p2 
     * @param {Number} intermediates 
     */
    constructor(p0, p1, p2, intermediates) {
        this.p0 = p0 || new Point2(0, 0);
        this.p1 = p1 || new Point2(0, 0);
        this.p2 = p2 || new Point2(0, 0);
        this.intermediates = intermediates || 10;
    }

    /**
     * @returns {Number} The approx. length of this curve
     */
    getLength() {
        let length = 0;
        let interpolatedPoint2s = this.calculateInterpolatedPoints();
        for(let i=0; i<interpolatedPoint2s.length-1; i++) {
            length += new Line2(interpolatedPoint2s[i], interpolatedPoint2s[i+1]).getLength();
        }

        return length;
    }

    /**
     * Calculates the interpolated Point2s of this curve.
     * @returns {Point2[]}
     */
    calculateInterpolatedPoints() {
        /** @type {Point2[]} */
        let interpolatedPoints = new Array();
        /** intermediates between p0 and p1 @type {Point2[]} */
        let q0 = new Array();
        /** intermediates between p1 and p2 @type {Point2[]} */
        let q1 = new Array();

        let l0 = new Line2(this.#p0, this.#p1);
        let l1 = new Line2(this.#p1, this.#p2);

        q0 = l0.getIntermediates(this.#intermediates, true);
        q1 = l1.getIntermediates(this.#intermediates, true);

        for(let i=0; i<=this.#intermediates; i++) {
            let tmpVector = new Line2(q0[i], q1[i]).getVector();
            tmpVector.multiplyMagnitude((1/this.#intermediates)*i);

            q0[i].applyVector(tmpVector);

            interpolatedPoints.push(q0[i]);
        }

        return interpolatedPoints;
    }
}

import Line2 from "./Line2";
import Point2 from "./Point2";
export default BezierCurve2;
