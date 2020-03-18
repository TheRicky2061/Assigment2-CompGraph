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
     * @param {HTMLImageElement} image 	- The image to display.
     * @param {String} name 			- the name of the graphic.
     * @param {Number} x 				- The x coordinate.
     * @param {Number} y 				- The y coordinate.
     * @param {Number} imgX 			- The x coordinate to place image.
     * @param {Number} imgY 			- The y coordinate to place image.
     * @param {Boolean} display     	- Is the image visible or not.
     */
	constructor(image, name, x, y, imgX, imgY, display=true) {
		super(x, y, name);

		this.image = image;
		
		this.imgX = imgX;
		this.imgY = imgY;

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