/**
 * module graphic_renderer.js
 * @module GraphicRenderer
 */


/**
 * A helper interface for rendering graphics.
 */
export class GraphicRenderer {

	/**
	 * Creates a graphic rendering object.
	 * @param {Graphic} graphic  - graphic to render.
	 */
	constructor(graphic) {
		this.graphic = graphic;
	}

	/**
	 * Rendering function
	 * @param {CanvasRenderingContext2D} context - Canvas 2d context
	 */
	render(context) {
		context.translate(this.graphic.x, this.graphic.y);
		context.rotate(this.graphic.angle * Math.PI/180);
		context.scale(this.graphic.sx, this.graphic.sy);
	}
}



