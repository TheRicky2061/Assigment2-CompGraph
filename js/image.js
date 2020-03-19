/**
 * module image.js
 * @module Image
 */

/**
 * Image class with commonly used attributes.
 */
export class Image {

	/*
     * Create an image object.
     * @param {HTMLImageElement} imageElement - image to draw on canvas.
     * @param {Number} x - where to set the image horizontally relative to the origin.
     * @param {Number} y - where to set the image vertically relative to the origin.
     */
	constructor(imageElement, x, y) {
		this.element = imageElement,
		this.x = x;
		this.y = y;
	}
}