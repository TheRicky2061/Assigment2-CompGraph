/**
 * module graphic.js
 * @module Graphic
 */

/* Basic class for representing a graphic on the screen. */
export class Graphic {

	/**
     * Create a graphic.
     * @param {Number} x 					- The x coordinate.
     * @param {Number} y 					- The y coordinate.
     * @param {String} name 				- the name of the graphic.
     * @param {Number} sx    (optional) 	- the scaling in the x direction.
     * @param {Number} sy    (optional) 	- the scaling in the y direction.
     * @param {Number} angle (optional) 	- the angle of the graphic.
     */
	constructor(x, y, name, sx=1, sy=1, angle=0) {
		this.x = x;
		this.y = y;
		this.sx = sx;
		this.sy = sy;
		this.name = name;

		this.angle = angle;
		this.children = {};
	}

	/**
     * Sets the graphic's scaling
     * @param {Number} x  - The scalar factor for x.
     * @param {Number} y  - The scalar factor for y.
     * @return {undefined}
     */
	setScale(sx, sy) {
		this.sx = sx;
		this.sy = sy;
	}

	/**
     * Sets the graphic's angle
     * @param {Float} angle  - The new angle.
     * @return {undefined}
     */
	setAngle(angle) {
		this.angle = angle;
	}
	 /**
     * Inserts a child graphic to the list of children graphics.
     * @param {Graphic} child 				- The child graphic to add.
     * @param {String} parent (optional) 	- The target parent to add it to.
     * @return {Boolean} true if inserted, false otherwise.
     */
	addChild(child, parent=null) {

		if(parent === null) {
			this.children[child.name] = child;
			return true;
		}

		let parentGraphic = this.getChild(parent);

		if(parentGraphic) return parentGraphic.addChild(child);

		throw("Child '" + parent + "' Not Found");
	}

	/**
	 * Try to find the child graphic with the given name 
	 * among the children and inner children.
	 * @param {String} lookup  - The name of the child to find.
	 * @return {Graphic|null} the lookup graphic, null if not found.
	 */
	getChild(lookup) {

		for(let [name, child] of Object.entries(this.children)) {

			if(name === lookup) return child;
			
			let innerChild = child.getChild(lookup);

			if(innerChild) return innerChild;
		}

		return null;
	}

	/**
	 * Accepts a view for rendering.
	 * @param {View} view  - view to accept.
	 * @return {undefined}
	 */
	acceptView(view) {
		view.renderGraphic(this);
	}
}
