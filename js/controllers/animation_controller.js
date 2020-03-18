/**
 * module animation_controller.js
 * @module AnimationController
 */

import {Controller} from "./controller.js";


/**
 * Controller with animation support.
 * @extends Controller
 */
export class AnimationController extends Controller {

	/**
     * Create a Controller.
     * @param {Object} models  - Model objects.
     * @param {View} view  	   - View used for rendering the models.
     */
	constructor(models, views) {
		super(models, views);
		this.pressedKeys = {};

		$(document).on("keydown", this.onKeyDown.bind(this));
    	$(document).on("keyup", this.onKeyUp.bind(this));
	}

	/**
     * Checks if a specific key is being pressed.
     * @param {String} key - key to check if its being pressed.
     * @return {Boolean}   - true if the key is being pressed.
     */
	isKeyPressed(key) {
        return !!this.pressedKeys[key];
    }

    /**
     * Sets the given key to false when a keyboard pressed is released.
     * @param {KeyboardEvent} event  - the event callback.
     * @return {undefined}
     */
    onKeyUp(event) {
        this.pressedKeys[event.code] = false;
    }

    /**
     * Sets the given key to true when a keyboard pressed is pressed.
     * @param {KeyboardEvent} event  - the event callback.
     * @return {undefined}
     */
    onKeyDown(event) {
    	this.pressedKeys[event.code] = true;
    }

    /**
     * Performs the animation.
     * @return {undefined}
     */
	animate() {
		throw("Needs implementation");
	}

	/**
	 * Updates the view and starts the animation.
	 * @return {undefined}
	 */
	updateView() {
		super.updateView();
		requestAnimationFrame(()=>this.animate());
	}
}