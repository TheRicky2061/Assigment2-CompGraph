/**
 * module topology_image_renderer.js
 * @module TopologyImageGraphicRenderer
 */


import {ImageGraphicRenderer} from "./image_graphic_renderer.js";
import {Settings} from "../../config.js";


/**
 * A helper interface for rendering text graphics.
 * @extends ImageGraphicRenderer
 */
export class TopologyImageGraphicRenderer extends ImageGraphicRenderer {

	/**
	 * Creates a topology graphic rendering object.
	 * @param {TextGraphic} graphic  - text graphic to render.
	 */
	constructor(graphic) {
		super(graphic);
		this.arcStrokeStyle = "white";
	}

	/**
	 * Rendering function. Display on screen. Display guides if debugging.
	 * @param {CanvasRenderingContext2D} context - Canvas 2d context
	 */
	render(context) {
		context.translate(this.graphic.x, this.graphic.y);

		if(Settings.DEBUG) this.showDebugGuides(context);
		
		context.rotate(this.graphic.angle);
		context.scale(this.graphic.sx, this.graphic.sy);
		context.drawImage(this.graphic.image, this.graphic.imgX, this.graphic.imgY);	
	}

	/**
	 * Displays the objects rotation guides.
	 * @param {CanvasRenderingContext2D} context - Canvas 2d context
	 */
	showDebugGuides(context) {
		context.beginPath();

		context.strokeStyle = this.arcStrokeStyle;

		if(this.graphic.angle >= 0) {
			context.arc(0, 0, this.graphic.radius, 
				((this.graphic.angle+270*Math.PI/180)%360), (270*Math.PI)/180, true);
		} else {
			context.arc(0, 0, this.graphic.radius, 
				((this.graphic.angle+270*Math.PI/180)%360), (270*Math.PI)/180, false);
		}
		context.stroke();
		context.closePath();
	}
}