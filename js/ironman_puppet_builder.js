/**
 * module ironman_puppet_builder.js
 * @module IronManPuppetBuilder
 */


/**
 * PuppetBuilder class for building puppets.
 */

import {PuppetBuilder} from "./puppet_builder.js";
import {ImageGraphic} from "./models/image_graphic.js";
import {Graphic} from "./models/graphic.js";
import {Image} from "./image.js";


/**
 * Builds Iron Man Puppets.
 * @extends PuppetBuilder
 */
export class IronManPuppetBuilder extends PuppetBuilder {

	constructor() {
		super();
	}

	setPuppetBody() {
		this.puppet = new Graphic(290, 180, "puppet");
	}

	setLowerBody() {
		this.puppet.addChild(
			new Graphic(0, 100, "lowerBody")
		);
	}

	setUpperBody() {
		this.puppet.addChild(
			new Graphic(0, 140, "upperBody")
		);
	}

	setRightUpperLeg(imageElement) {

		let image = new Image(imageElement, -50, -22);

		this.puppet.addChild(
			new ImageGraphic(image, "rightUpperLeg", -22, 50),
			"lowerBody"
		);
	}

	setRightLowerLeg(imageElement) {

		let image = new Image(imageElement, -45, -20);

		this.puppet.addChild(
			new ImageGraphic(image, "rightLowerLeg", -15, 105),
			"rightUpperLeg"
		);
	}

	setRightFoot(imageElement) {

		let image = new Image(imageElement, -30, -15);

		this.puppet.addChild(
			new ImageGraphic(image, "rightFoot", -7, 120),
			"rightLowerLeg"
		);
	}

	setLeftUpperLeg(imageElement) {

		let image = new Image(imageElement, -25, -20);

		this.puppet.addChild(
			new ImageGraphic(image, "leftUpperLeg", 23, 46),
			"lowerBody"
		);
	}

	setTorso(imageElement) {

		let image = new Image(imageElement, -107, -300);

		this.puppet.addChild(
			new ImageGraphic(image, "torso", 0, 0),
			"upperBody"
		);
	}

	setRightArm(imageElement) {

		let image = new Image(imageElement, -39, -30);

		this.puppet.addChild(
			new ImageGraphic(image, "rightArm", -100, -155),
			"torso"
		);
	}

	setRightForeArm(imageElement) {

		let image = new Image(imageElement, -37, -20);

		this.puppet.addChild(
			new ImageGraphic(image, "rightForeArm", -15, 90),
			"rightArm"
		);
	}

	setRightHand(imageElement) {

		let image = new Image(imageElement, -15, -15);

		this.puppet.addChild(
			new ImageGraphic(image, "rightHand", 5, 85),
			"rightForeArm"
		);
	}

	setLeftArm(imageElement) {

		let image = new Image(imageElement, -25, -30);

		this.puppet.addChild(
			new ImageGraphic(image, "leftArm", 90, -155),
			"torso"
		);
	}

	setLeftForeArm(imageElement) {

		let image = new Image(imageElement, -35, -15);

		this.puppet.addChild(
			new ImageGraphic(image, "leftForeArm", 15, 90),
			"leftArm"
		);
	}

	setLeftHand(imageElement) {

		let image = new Image(imageElement, -40, -15);

		this.puppet.addChild(
			new ImageGraphic(image, "leftHand", -5, 90),
			"leftForeArm"
		);
	}

	setLeftLowerLeg(imageElement) {

		let image = new Image(imageElement, -34, -15);

		this.puppet.addChild(
			new ImageGraphic(image, "leftLowerLeg", 10, 108),
			"leftUpperLeg"
		);
	}

	setLeftFoot(imageElement) {

		let image = new Image(imageElement, -25, -12);

		this.puppet.addChild(
			new ImageGraphic(image, "leftFoot", 5, 120),
			"leftLowerLeg"
		);
	}
}