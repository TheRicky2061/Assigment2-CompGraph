/**
 * module spaceship_renderer.js
 * @module SpaceShipGraphicRenderer
 */

import {TopologyImageGraphicRenderer} from "./topology_image_renderer.js";
import {Settings} from "../../config.js";

/**
 * A helper interface for rendering spaceship graphics.
 * @extends GraphicRenderer
 */
export class SpaceShipGraphicRenderer extends TopologyImageGraphicRenderer {

	/**
	 * Creates a spaceship graphic rendering object.
	 * @param {Spaceship} graphic  - spaceship graphic to render.
	 */
	constructor(graphic) {
		super(graphic)
	}

	/**
	 * Rendering function. Same as parent class, but also show trajectory.
	 * @param {CanvasRenderingContext2D} context - Canvas 2d context
	 */
	render(context) {
		
		super.render(context);

		if(Settings.DEBUG) {
			this.showTrajectory(context);
		}
	}

	/**
	 * Show's the spaceship's trajectory guids.
	 * @param {CanvasRenderingContext2D} context - Canvas 2d context
	 */
	showTrajectory(context) {
		context.strokeStyle = "white";
		context.beginPath();
		context.moveTo(0, 0);
		context.lineTo(0, -context.canvas.height-500);
		context.stroke();
		context.closePath();
	}
}
