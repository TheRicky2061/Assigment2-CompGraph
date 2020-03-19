/**
 * module asteroid_controller.js
 * @module AsteroidController
 */

import {AnimationController} from "./animation_controller.js";
import {AsteroidView} from "../views/asteroid_view.js";
import {Settings} from "../config.js";

import {MoveableImageGraphic} from "../models/moveable_graphic.js";
import {SpaceShip} from "../models/spaceship.js";
import {Asteroid} from "../models/asteroid.js";
import {TextGraphic} from "../models/text_graphic.js";

/**
 * Controller for the Asteroids game.
 * @extends AnimationController
 */
export class AsteroidController extends AnimationController {

	/* @const {Number}  - Maximum number of asteroids that can be displayed, */
	static MAXIMUM_ASTEROIDS_ON_SCREEN = 3;

	/* @const {Number}  - Delay between spaceship shots. */
	static RELOAD_DELAY = 2 * 1000;	// 2 seconds

	/**
     * Create an asteroid controller.
     * @param {HTMLCanvasElement} canvas  - canvas used for drawing.
     */
	constructor(canvas) {
		let _canvas = canvas.get(0);

		MoveableImageGraphic.MAX_WIDTH = _canvas.width;
		MoveableImageGraphic.MAX_HEIGHT = _canvas.height;

		let models = {
			spaceship: new SpaceShip(_canvas.width * 0.5, _canvas.height * 0.9), 
			asteroids: [], 
			score: new TextGraphic(100, 100, "score", 0),
			status: new TextGraphic(100, 150, "status", "Gun Ready")
		}

		super(models, new AsteroidView(canvas));

		this.lastBulletFired = 0;
	}

	/**
	 * Set the amount of time it takes the ship to reload.
	 * @param {Number} delay  - the delay to set.
	 * @return {undefined}
	 */
	setReloadDelay(delay) {
		AsteroidController.RELOAD_DELAY = delay * 1000;
		this.lastBulletFired = 0;
	}

	/**
	 * Set the maximum asteroids that can appear.
	 * @param {Number} maximum  - maximum asteroids on screen.
	 * @return {undefined}
	 */
	setMaximumAsteroids(maximum) {
		AsteroidController.MAXIMUM_ASTEROIDS_ON_SCREEN = maximum;
	}

	/**
	 * event for keypresses.
	 * adds listener for space keypress.
	 * @param {KeyboardEvent} event  - The event callback.
	 * @return {undefined}
	 */
	onKeyDown(event) {

        if(event.code === "Space")
            this.firetBulletFromSpaceShip();
        else
            super.onKeyDown(event);
    }

    /**
	 * The animation for requestAnimationFrame.
	 * @return {undefined}
	 */
	animate() {
		this.updateModels();

		if(this.isKeyPressed("KeyW")) {
			this.models.spaceship.turnOnEngines("front");
			this.models.spaceship.accelerate();
		} else if(this.isKeyPressed("KeyS")) {
			this.models.spaceship.turnOnEngines("back");
			this.models.spaceship.decelerate();
		} else {
			this.models.spaceship.turnOffEngines();
		}

        if(this.isKeyPressed("KeyD")) {
            this.models.spaceship.rotate("right");
        } else if(this.isKeyPressed("KeyA")) {
            this.models.spaceship.rotate("left");
        }

        this.updateView();
	}

	/**
	 * Updates Spaceship, bullet and asteroids.
	 * @return {undefined}
	 */
	updateModels() {
		this.updateSpaceShip();
		this.updateBullet();
		this.updateAsteroids();
	}

	/**
	 * Updates Spaceship model.
	 * @return {undefined}
	 */
	updateSpaceShip() {

		this.models.spaceship.update();

		if(this.gunReadyToFire()) {
			this.models.spaceship.gunReady = true;
			this.models.status.text = "Gun Ready";
		}

		if(this.models.spaceship.isOffScreen() && Settings.DEBUG) {
			console.log("Spaceship offscreen");
		}
	}

	/**
	 * Verifies that the spaceship's gun can be fired.
	 * @return {undefined}
	 */
	gunReadyToFire() {
		return (new Date().getTime() - this.lastBulletFired) >= AsteroidController.RELOAD_DELAY;
	}

	/**
	 * Updates all of the Asteroid models on the screen.
	 * @return {undefined}
	 */
	updateAsteroids() {

		if(this.models.asteroids.length < AsteroidController.MAXIMUM_ASTEROIDS_ON_SCREEN) {
			this.models.asteroids.push(new Asteroid());
		} else {
			while(this.models.asteroids.length > AsteroidController.MAXIMUM_ASTEROIDS_ON_SCREEN)
				this.models.asteroids.pop();
		}

		for(const asteroid of Object.values(this.models.asteroids)) {
			asteroid.update();

			if(asteroid.isCollidingWith(this.models.spaceship)) {
				this.models.score.text -= 1;
				this.destroyAsteroid(asteroid);

				if(Settings.DEBUG) {
					console.log("Asteroid hits spaceship");
				}

				break;
			}
		}
	}

	/**
	 * Updates the bullet if it's defined.
	 * @return {undefined}
	 */
	updateBullet() {

		if(!this.models.bullet) return;

		this.models.bullet.update();

		if(this.models.bullet.isOffScreen()) 
			return this.destroyBullet();

		for(const asteroid of Object.values(this.models.asteroids)) {

			if(this.models.bullet.isCollidingWith(asteroid)) {
				this.models.score.text += 1;
				this.destroyBullet();
				this.destroyAsteroid(asteroid);
				break;
			}
		}
	}

	/**
	 * Deletes the bullet model.
	 * @return {undefined}
	 */
	destroyBullet() {
		this.models.bullet = undefined;
		if(Settings.DEBUG) console.log("Bullet disappeard");
	}

	/**
	 * Destroys the given asteroid.
	 * @return {undefined}
	 */
	destroyAsteroid(asteroid) {
		let index = this.models.asteroids.indexOf(asteroid);
		this.models.asteroids.splice(index, 1);
	}

	/**
	 * Fires a bullet from the spaceship when the gun has reloaded and no bullets
	 * on the screen.
	 * @return {undefined}
	 */
	firetBulletFromSpaceShip() {

		if(this.models.spaceship.gunReady) {
			this.models.bullet = this.models.spaceship.fire();
			this.lastBulletFired = new Date().getTime();
			this.models.spaceship.gunReady = false;
			this.models.status.text = "Reloading...";
		}
	}
}