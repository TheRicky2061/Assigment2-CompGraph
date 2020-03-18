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

	setRightUpperLeg(image) {

		this.puppet.addChild(
			new ImageGraphic(image, "rightUpperLeg", -22, 50, -50, -22),
			"lowerBody"
		);
	}

	setRightLowerLeg(image) {
		this.puppet.addChild(
			new ImageGraphic(image, "rightLowerLeg", -15, 105, -45, -20),
			"rightUpperLeg"
		);
	}

	setRightFoot(image) {
		this.puppet.addChild(
			new ImageGraphic(image, "rightFoot", -7, 120, -30, -15),
			"rightLowerLeg"
		);
	}

	setLeftUpperLeg(image) {
		this.puppet.addChild(
			new ImageGraphic(image, "leftUpperLeg", 23, 46, -25, -20),
			"lowerBody"
		);
	}

	setTorso(image) {

		this.puppet.addChild(
			new ImageGraphic(image, "torso", 0, 0, -107, -300),
			"upperBody"
		);
	}

	setRightArm(image) {
		this.puppet.addChild(
			new ImageGraphic(image, "rightArm", -100, -155, -39, -30),
			"torso"
		);
	}

	setRightForeArm(image) {
		this.puppet.addChild(
			new ImageGraphic(image, "rightForeArm", -15, 90, -37, -20),
			"rightArm"
		);
	}

	setRightHand(image) {
		this.puppet.addChild(
			new ImageGraphic(image, "rightHand", 5, 85, -15, -15),
			"rightForeArm"
		);
	}

	setLeftArm(image) {
		this.puppet.addChild(
			new ImageGraphic(image, "leftArm", 90, -155, -25, -30),
			"torso"
		);
	}

	setLeftForeArm(image) {
		this.puppet.addChild(
			new ImageGraphic(image, "leftForeArm", 15, 90, -35, -15),
			"leftArm"
		);
	}

	setLeftHand(image) {
		this.puppet.addChild(
			new ImageGraphic(image, "leftHand", -5, 90, -40, -15),
			"leftForeArm"
		);
	}

	setLeftLowerLeg(image) {
		this.puppet.addChild(
			new ImageGraphic(image, "leftLowerLeg", 10, 108, -34, -15),
			"leftUpperLeg"
		);
	}

	setLeftFoot(image) {
		this.puppet.addChild(
			new ImageGraphic(image, "leftFoot", 5, 120, -25, -12),
			"leftLowerLeg"
		);
	}
}