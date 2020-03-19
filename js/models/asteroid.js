/**
 * module asteroid.js
 * @module Asteroid
 */

import {TopologyImageGraphic} from "./topology_model.js";
import {Image} from "../image.js";

/**
 * Represents an Asteroid graphic.
 * @extends TopologyImageGraphic
 */
export class Asteroid extends TopologyImageGraphic {

	/**
     * Create a Asteroid Graphic at random coordinates.
     */
	constructor() {

		let x = Math.round(Math.random() * TopologyImageGraphic.MAX_WIDTH);
		let y = Math.round(Math.random() * TopologyImageGraphic.MAX_HEIGHT/3);
		let image = new Image($("#asteroid1").get(0), -55, -55);

		super(image, "asteroid", x, y);

		let velocity = Math.floor((Math.random() * 5) + 1);
		let angle = Math.round(Math.random() * 360) * Math.PI/180;
		let vx = Math.cos(angle) * velocity;
		let vy = Math.sin(angle) * velocity;

		this.setScale(0.7, 0.7);
		this.setAngle(angle);
		this.setAngularVelocity(Math.random() * 5);
        this.setVelocity(vx, vy);

	}
}