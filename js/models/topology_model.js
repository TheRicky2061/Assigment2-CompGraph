/**
 * module topology_model.js
 * @module TopologyImageGraphic
 */


import {MoveableImageGraphic} from "./moveable_graphic.js";


/**
 * Represents a moveable image graphic that follows a 2D torus topology .
 * @extends MoveableImageGraphic
 */
export class TopologyImageGraphic extends MoveableImageGraphic {

    /**
     * Create an moveable topology image graphic.
     * @param {HTMLImageElement} image  - The image to display.
     * @param {String} name             - the name of the graphic.
     * @param {Number} x                - The x coordinate.
     * @param {Number} y                - The y coordinate.
     * @param {Number} vx               - Velocity in the x direction.
     * @param {Number} vy               - Velocity in the y direction.
     */
	constructor(image, name, x, y, vx=0, vy=0, display=true) {
		super(image, name, x, y, vx, vy, display);
	}

    /**
     * Update the same way, but correct the bounds.
     * @return {undefined}
     */
    update() {
        super.update();
        this.correctHorizontalBounds();
        this.correctVerticalBounds();
    }

    /**
     * Correct the bounds of the graphic. Teleports graphic if it goes outside of the viweable
     * area in the horizontal direction.
     * @return {undefined}
     */
	correctHorizontalBounds() {

		if(this.x < -this.radius) {
            this.x = TopologyImageGraphic.MAX_WIDTH + this.radius;
        }

        if(this.x > TopologyImageGraphic.MAX_WIDTH + this.radius) {
            this.x = -this.radius;
        }
	}

    /**
     * Correct the bounds of the graphic. Teleports graphic if it goes outside of the viweable
     * area in the vertical direction.
     * @return {undefined}
     */
	correctVerticalBounds() {

		if(this.y < -this.radius) {
            this.y = TopologyImageGraphic.MAX_HEIGHT + this.radius;
        }

        if(this.y > TopologyImageGraphic.MAX_HEIGHT + this.radius) {
            this.y = -this.radius;
        }
	}

    /**
     * Accepts a view for rendering.
     * @param {View} view  - view to accept.
     * @return {undefined}
     */
    acceptView(view) {
        view.renderTopologyGraphic(this);
    }

}