"use strict";

class Vector2 {
    /** @type {Number} */
    x;
    /** @type {Number} */
    y;

    /**
     * @param {Number} x 
     * @param {Number} y 
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Adds a {@link Vector2} to this Vector
     * @param {Vector2} vector 
     */
    addVector(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }

    getMagnitude() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    /**
     * Normlalizes this Vector, resulting in a magnitude of 1
     */
    normalizeVector() {
        let magnitude = this.getMagnitude();
        this.x = this.x / magnitude;
        this.y = this.x / magnitude;
    }

    /**
     * Multiplies this Vector's magnitude by `n`
     * @param {Number} n 
     * @returns {Number} The new magnitude
     */
    multiplyMagnitude(n) {
        this.x = this.x * n;
        this.y = this.y * n;

        return this.getMagnitude();
    }

    /**
     * Sets the magnitude of this Vector
     * @param {Number} n 
     */
    setMagnitude(n) {
        this.normalizeVector();
        this.multiplyMagnitude(n);
    }

    /**
     * @returns {Vector2} A copy of `this`
     */
    copy() {
        return new Vector2(this.x, this.y);
    }
}

module.exports = Vector2;
