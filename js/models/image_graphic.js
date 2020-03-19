/**
 * module image_graphic.js
 * @module ImageGraphic
 */


import {Graphic} from "./graphic.js";

/**
 * Represents an graphic with an image.
 * @extends Graphic
 */
export class ImageGraphic extends Graphic {

	/**
     * Create an image graphic.
     * @param {Image} image 			- The image to display.
     * @param {String} name 			- the name of the graphic.
     * @param {Number} x 				- The x coordinate.
     * @param {Number} y 				- The y coordinate.
     * @param {Boolean} display     	- Is the image visible or not.
     */
	constructor(image, name, x, y, display=true) {
		super(x, y, name);
		this.image = image;
		this.display = display;
	}

	/**
	 * Accepts a view for rendering.
	 * @param {View} view  - view to accept.
	 * @return {undefined}
	 */
	acceptView(view) {
		view.renderImageGraphic(this);
	}

}