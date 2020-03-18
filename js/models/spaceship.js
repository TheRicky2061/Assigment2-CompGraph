/**
 * module spaceship.js
 * @module SpaceShip
 */


import {TopologyImageGraphic} from "./topology_model.js";
import {ImageGraphic} from "./image_graphic.js";
import {Bullet} from "./bullet.js";

/* @const {Number}. - Spaceship's Constant Angular Acceleration */
const ANGULAR_ACCELERATION = 1;

/**
 * Represents an spaceship graphic.
 * @extends TopologyImageGraphic
 */
export class SpaceShip extends TopologyImageGraphic {

	/**
     * Create an spaceship graphic.
     * @param {Number} x  - The x coordinate.
     * @param {Number} y  - The y coordinate.
     */
	constructor(x, y) {
		super($("#spaceship").get(0), "spaceship", x, y, -67, -75);
		this.av = 0;
		this.sx = 0.7;
        this.sy = 0.7;
        this.gunReady = true;

		this.setEngines();
	}

	/**
	 * Accepts a view for rendering.
	 * @param {View} view  - view to accept.
	 * @return {undefined}
	 */
	acceptView(view) {
		view.renderSpaceShip(this);
	}

	/**
	 * Sets the engines children graphics.
	 * @return {undefined}
	 */
	setEngines() {
		let engine1 = new ImageGraphic($("#engine").get(0), "engine1", -65, 10, -50, -100, false);
		let engine2 = new ImageGraphic($("#engine").get(0), "engine2", 65, 10, -50, -100, false);

		engine1.angle = engine2.angle = 180;
		engine1.sx = engine2.sx = 0.4;
		engine1.sy = engine2.sy = 0.4;

		this.addChild(engine1);
		this.addChild(engine2);
	}


	/**
	 * Turns on the spaceship engines by making them visible.
	 * @return {undefined}
	 */
	turnOnEngines(direction) {
		let engine1 = this.getChild("engine1");
		let engine2 = this.getChild("engine2");

		engine1.display = true;
		engine2.display = true;

		if(direction === "front") {
			engine1.x = -65;
			engine1.y = engine2.y = 10;
			engine1.angle = engine2.angle = 180;

			engine2.x = 65;

		} else if(direction === "back"){
			engine1.x = -65;
			engine1.y = engine2.y = -10;
			engine1.angle = engine2.angle = 0;

			engine2.x = 65;
		}
	}

	/**
	 * Turns off the spaceship engines by making them invisible.
	 * @return {undefined}
	 */
	turnOffEngines() {
		this.getChild("engine1").display = false;
		this.getChild("engine2").display = false;
	}

	/**
	 * Aside by updating the position and rotation, decrease its velocity.
	 * @return {undefined}
	 */
	update() {
        super.update();
        this.decreaseVelocity();
	}

	/**
	 * Decrease the spaceship velocity.
	 * @return {undefined}
	 */
	decreaseVelocity() {
		this.av *= 0.85;
        this.vx *= 0.95;
        this.vy *= 0.95;
	}

	/**
	 * Rotate the spaceship by a constant angular velocity.
	 * @param {String} direction  - The direction to turn.
	 * @return {undefined}
	 */
	rotate(direction) {
		if(direction == "left")
			this.av -= ANGULAR_ACCELERATION;
		else if(direction == "right")
			this.av += ANGULAR_ACCELERATION;
		else
			throw("Invalid direction");
	}

	/**
	 * Accelerate the spaceship in the forward direction of the current angle.
	 * @return {undefined}
	 */
	accelerate() {
		this.vx += 0.5 * Math.cos(this.angle - Math.PI/2);
        this.vy += 0.5 * Math.sin(this.angle - Math.PI/2);
	}

	/**
	 * Accelerate the spaceship in the backwards direction of the current angle.
	 * @return {undefined}
	 */
	decelerate() {
		this.vx -= 0.5 * Math.cos(this.angle - Math.PI/2);
        this.vy -= 0.5 * Math.sin(this.angle - Math.PI/2);
	}

	/**
	 * Fires a bullet in the current x, y and angle values.
	 * @return {Bullet}  -  the bullet that the spaceship is firing.
	 */
	fire() {
		return new Bullet(this.x, this.y, this.angle);
	}
}