/**
 * module asteroid.js
 * @module Asteroid
 */

import {TopologyImageGraphic} from "./topology_model.js";


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

		super($("#asteroid1").get(0), null, x, y, -55, -55);
		
		this.angle = Math.round(Math.random() * 360) * Math.PI/180;

        this.sx = 0.7;
        this.sy = 0.7;

        let velocity = Math.floor((Math.random() * 5) + 1);

		this.vx = Math.cos(this.angle) * velocity;
		this.vy = Math.sin(this.angle) * velocity;
		this.av = Math.random() * 5;
	}
}