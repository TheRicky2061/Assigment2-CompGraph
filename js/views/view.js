/**
 * module view.js
 * @module View
 */

import {GraphicRenderer} from "./rendering/graphic_renderer.js";
import {ImageGraphicRenderer} from "./rendering/image_graphic_renderer.js";
import {TextGraphicRenderer} from "./rendering/text_graphic_renderer.js";
import {Settings} from "../config.js";


const ORIGIN_FILL_STYLE = "white";
const ORIGIN_STROKE_STYLE = "black";
const ORIGIN_LINE_WIDTH = 5;
const ORIGIN_RADIUS = 5;


/**
 * Basic View.
 */
export class View {

	/**
	 * Creates a View.
	 * @param {HTMLCanvasElement} canvas  - canvas to draw on.
	 * @param {String} backgroundColor  - color to assign to background.
	 */
	constructor(canvas, backgroundColor="white") {
		this.context = canvas.get(0).getContext("2d");
		this.backgroundColor = backgroundColor;
	}

	/**
	 * Sets the background color.
	 * @param {String} color  - color to assign to background.
	 */
	setBackgroundColor(color) {
		this.fillStyle = color;
	}

	/**
	 * Reset the canvas for drawing.
	 * @return {undefined}
	 */
	clear() {
		this.context.resetTransform()
		this.context.fillStyle = this.backgroundColor;
		this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
	}

	/**
	 * Draws the current origin on the canvas.
	 * @return {undefined}
	 */
	renderOrigin(){
		this.context.beginPath()
		this.context.fillStyle = ORIGIN_FILL_STYLE;
		this.context.lineWidth = ORIGIN_LINE_WIDTH;
		this.context.strokeStyle = ORIGIN_STROKE_STYLE;
		this.context.arc(0, 0, ORIGIN_RADIUS, 0, 2 * Math.PI);
		this.context.stroke();
		this.context.fill();
	}

	/**
	 * Draws an axis on the canvas on the current origin.
	 * @return {undefined}
	 */
	renderAxis() {
		this.context.lineWidth = 2;

		this.context.fillRect(0, 0, 50, 5)
		this.context.strokeRect(0, 0, 50, 5)

		this.context.fillRect(0, 0, 5, 50)
		this.context.strokeRect(0, 0, 5, 50)
	}

	/**
	 * Renders a normal graphic.
	 * @return {undefined}
	 */
	renderGraphic(graphic) {
		let graphicRenderer = new GraphicRenderer(graphic);
		this.render(graphicRenderer);
	}

	/**
	 * Renders an image graphic.
	 * @return {undefined}
	 */
	renderImageGraphic(graphic) {
		let graphicRenderer = new ImageGraphicRenderer(graphic);
		this.render(graphicRenderer);
	}

	/**
	 * Renders a text graphic.
	 * @param {TextGraphic} textGraphic  - text graphic to render.
	 */
	renderTextGraphic(textGraphic) {
		let graphicRenderer = new TextGraphicRenderer(textGraphic);
		this.render(graphicRenderer);
	}

	/**
	 * Render a graphic using the provided graphic rendering object.
	 * @param {GraphicRenderer} graphicRenderer  -  rendering object for rendering
	 * @return {undefined}
	 */
	render(graphicRenderer) {
		this.context.save();

		graphicRenderer.render(this.context);

		if(Settings.DEBUG) {
			this.renderOrigin();
			this.renderAxis();
		}
		
		this.renderChildren(graphicRenderer.graphic);
		this.context.restore();
	}

	/*
	 * Render a graphic's children graphics.
	 * @return {undefined}
	 */
	renderChildren(graphic) {
		for(let [_, childGraphic] of Object.entries(graphic.children)){
			childGraphic.acceptView(this);
		}
	}
	
}