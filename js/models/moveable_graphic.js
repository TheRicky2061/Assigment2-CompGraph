/**
 * module moveable_graphic.js
 * @module MoveableGraphic
 */


import {ImageGraphic} from "./image_graphic.js";


/**
 * Represents an image graphic that can be moved with a velocity.
 * @extends ImageGraphic
 */
export class MoveableImageGraphic extends ImageGraphic {

	/*@static {Number} MAX_WIDTH   - Maximum Viewable area in the x direction */
	static MAX_WIDTH = 0;

	/*@static {Number} MAX_HEIGHT  - Maximum Viewable area in the y direction */
    static MAX_HEIGHT = 0;

    /**
	 * Calculates the distance between tow graphics
	 * @param {Graphic} object1  - the first graphic.
	 * @param {Graphic} object1  - the second graphic.
	 */
	static distance(object1, object2) {

		let verticalDistance = Math.pow(object1.x - object2.x, 2);
		let horizontalDistance = Math.pow(object1.y - object2.y, 2)

		let distance = Math.sqrt( verticalDistance + horizontalDistance );

		return distance;
	}

	/**
     * Create an image graphic.
     * @param {HTMLImageElement} image 	- The image to display.
     * @param {String} name 			- the name of the graphic.
     * @param {Number} x 				- The x coordinate.
     * @param {Number} y 				- The y coordinate.
     * @param {Number} imgX 			- The x coordinate to place image.
     * @param {Number} imgY 			- The y coordinate to place image.
     * @param {Boolean} display     	- Is the image visible or not.
     */
	constructor(image, name, x, y, imgX, imgY, vx=0, vy=0, display=true) {
		super(image, name, x, y, imgX, imgY, display);
		this.radius = image.height*0.40;
		this.vx = vx;
		this.vy = vy;
	}

	/**
	 * Updates the position and rotation of the graphic.
	 * @return {undefined}
	 */
	update() {
		this.updatePosition();
		this.updateRotation();
	}

	/**
	 * Updates the position of the graphic.
	 * @return {undefined}
	 */
	updatePosition() {
        this.x += this.vx;
        this.y += this.vy;
    }

    /**
	 * Updates the rotation of the graphic.
	 * @return {undefined}
	 */
    updateRotation() {
        this.angle += this.av * Math.PI/180;

        if(this.angle >= Math.PI *2) {
            this.angle = 0;
        } else if(this.angle <= -Math.PI *2) {
            this.angle = 0;
        }
    }

    /**
	 * Checks if an object is colliding with another.
	 * @return {boolean}  - true if the two graphics are close enough
	 */
	isCollidingWith(object) {
		return MoveableImageGraphic.distance(this, object) <= object.radius;
	}

	/**
	 * Checks if an object is outside of the viewable area.
	 * @return {boolean}  - true if the graphic is outside of the viewable area.
	 */
	isOffScreen() {

		if(this.x <= 0 || this.y <= 0) return true;

		if(this.x > MoveableImageGraphic.MAX_WIDTH) return true;

		if(this.y >= MoveableImageGraphic.MAX_HEIGHT) return true;

		return false;
	}
}