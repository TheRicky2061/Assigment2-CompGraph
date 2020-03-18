/**
 * module image_graphic_renderer.js
 * @module ImageGraphicRenderer
 */


import {GraphicRenderer} from "./graphic_renderer.js";

/**
 * A helper interface for rendering image graphics.
 * @extends GraphicRenderer
 */
export class ImageGraphicRenderer extends GraphicRenderer {
	
	/**
	 * Creates a image graphic rendering object.
	 * @param {ImageGraphic} graphic  - image graphic to render.
	 */
	constructor(graphic) {
		super(graphic);
	}

	/**
	 * Rendering function. Same as parent class, but also draw the image in the graphic.
	 * @param {CanvasRenderingContext2D} context - Canvas 2d context
	 */
	render(context) {
		
		if(this.graphic.display) {
			super.render(context);
			context.drawImage(this.graphic.image, this.graphic.imgX, this.graphic.imgY);
		}
	}
}