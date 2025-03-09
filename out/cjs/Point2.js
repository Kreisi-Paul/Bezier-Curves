"use strict";

class Point2 {
    
    /**
     * @type {Number}
     * @public
    */
   x;
   /**
     * @type {Number}
     * @public
   */
  y;
  
  /**
   * @param {Number} x 
   * @param {Number} y 
  */
 constructor(x, y) {
     this.x = x || 0;
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

const Vector2 = require("./Vector2");
module.exports = Point2;
