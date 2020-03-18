/**
 * module puppet_builder.js
 * @module PuppetBuilder
 */


/**
 * PuppetBuilder class for building puppets.
 */
export class PuppetBuilder {

	constructor() {
		this.reset();
	}

	reset() {
		this.puppet = null;
	}

	setPuppetBody() {
		throw("Needs implementation");
	}

	setLowerBody() {
		throw("Needs implementation");
	}

	setUpperBody() {
		throw("Needs implementation");
	}

	setTorso(image) {
		throw("Needs implementation");
	}

	setRightArm(image) {
		throw("Needs implementation");
	}

	setLeftArm(image) {
		throw("Needs implementation");
	}

	setRightForeArm(image) {
		throw("Needs implementation");
	}

	setLeftHand(image) {
		throw("Needs implementation");
	}

	setRightLowerLeg(image) {
		throw("Needs implementation");
	}

	setRightFoot(image) {
		throw("Needs implementation");
	}

	setLeftLowerLeg(image) {
		throw("Needs implementation");
	}

	setLeftFoot(image) {
		throw("Needs implementation");
	}

	setRightHand(image) {
		throw("Needs implementation");
	}	

	setRightUpperLeg(image) {
		throw("Needs implementation");
	}

	setLeftUpperLeg(image) {
		throw("Needs implementation");
	}

	/**
	 * @return {Puppet} - built puppet.
	 */
	getPuppet() {
		let puppet = this.puppet;
		this.reset();
		return puppet;
	}
}