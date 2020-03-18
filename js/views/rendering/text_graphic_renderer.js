/**
 * module text_graphic_renderer.js
 * @module TextGraphicRenderer
 */


import {GraphicRenderer} from "./graphic_renderer.js";


/**
 * A helper interface for rendering text graphics.
 * @extends GraphicRenderer
 */
export class TextGraphicRenderer extends GraphicRenderer {

	/**
	 * Creates a text graphic rendering object.
	 * @param {TextGraphic} graphic  - text graphic to render.
	 */
	constructor(graphic) {
		super(graphic);
	}

	/**
	 * Rendering function. Display text on the screen.
	 * @param {CanvasRenderingContext2D} context - Canvas 2d context
	 */
	render(context) {
		context.fillStyle = "white";
		context.font = this.graphic.font;
		context.translate(this.graphic.x, this.graphic.y)
		context.fillText(this.graphic.text, 0, 0);
	}
}