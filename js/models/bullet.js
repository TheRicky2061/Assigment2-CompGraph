/**
 * module bullet.js
 * @module Bullet
 */

import {MoveableImageGraphic} from "./moveable_graphic.js";
import {Image} from "../image.js";

const BULLET_VELOCITY = 50;

/**
 * Represents bullet graphic.
 * @extends MoveableImageGraphic
 */
export class Bullet extends MoveableImageGraphic {

	/**
     * Create a bullet graphic.
     * @param {Number} x 	 - The x coordinate.
     * @param {Number} y 	 - The y coordinate.
     * @param {String} angle - the angle of the graphic.
     */
	constructor(x, y, angle) {
		let image = new Image($("#bullet").get(0), -20, -40);
		
		let vx = Math.cos(angle - Math.PI/2) * BULLET_VELOCITY;
		let vy = Math.sin(angle - Math.PI/2) * BULLET_VELOCITY;

		super(image, "bullet", x, y);

		this.setVelocity(vx, vy);

		
	}
}