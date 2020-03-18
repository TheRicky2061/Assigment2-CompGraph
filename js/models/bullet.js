/**
 * module bullet.js
 * @module Bullet
 */

import {MoveableImageGraphic} from "./moveable_graphic.js";

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
		super($("#bullet").get(0), "bullet", x, y, -20, -40);
		this.vx = Math.cos(angle - Math.PI/2) * BULLET_VELOCITY;
		this.vy = Math.sin(angle - Math.PI/2) * BULLET_VELOCITY;
	}
}