/**
 * module asteroid_view.js
 * @module AsteroidView
 */


import {View} from "./view.js";
import {ImageGraphicRenderer} from "./rendering/image_graphic_renderer.js";
import {TopologyImageGraphicRenderer} from "./rendering/topology_image_renderer.js";
import {SpaceShipGraphicRenderer} from "./rendering/spaceship_renderer.js";
import {Settings} from "../config.js";


/**
 * View to use for the Asteroid Controller.
 * @extends View
 */
export class AsteroidView extends View {

	/**
	 * Creates a topology graphic rendering object.
	 * @param {HTMLCanvasElement} canvas  - canvas to draw on.
	 */
	constructor(canvas) {
		super(canvas, "black");
	}

	/**
	 * Renders a spaceship graphic.
	 * @param {SpaceShip} spaceship  - spaceship to render.
	 */
	renderSpaceShip(spaceship) {
		let graphicRenderer = new SpaceShipGraphicRenderer(spaceship);
		this.render(graphicRenderer);
	}

	/**
	 * Renders an 2d topology graphic.
	 * @param {Asteroid} asteroid  - asteroid to render.
	 */
	renderTopologyGraphic(topologyGraphic) {
		let graphicRenderer = new TopologyImageGraphicRenderer(topologyGraphic);
		this.render(graphicRenderer);
	}

	
}