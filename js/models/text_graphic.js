/**
 * module text_graphic.js
 * @module TextGraphic
 */


import {Graphic} from "./graphic.js";


/**
 * Represents an text graphic.
 * @extends Graphic
 */
export class TextGraphic extends Graphic {

	/**
     * Create a graphic.
     * @param {Number} x 	- The x coordinate.
     * @param {Number} y 	- The y coordinate.
     * @param {String} name - the name of the graphic.
     * @param {String} text - The text to be displayed.
     * @param {String} font - The fontface of the text.
     */
	constructor(x, y, name, text, font="30px Arial") {
		super(x, y, name);
		this.font = font;
		this.text = text;
	}

	/**
	 * Accepts a view for rendering.
	 * @param {View} view  - view to accept.
	 * @return {undefined}
	 */
	acceptView(view) {
		view.renderTextGraphic(this);
	}
}