/**
 * module puppet_controller.js
 * @module PuppetController
 */

import {Controller} from "./controller.js";
import {View} from "../views/view.js";


/**
 * Controller for the Puppet.
 * @extends Controller
 */
export class PuppetController extends Controller {

	/**
     * Create a puppet controller.
     * @param {HTMLCanvasElement} canvas  - canvas used for drawing.
     * @param {Puppet} puppet 			  - puppet to display
     * @return {undefined}
     */
	constructor(canvas, puppet) {

		super({puppet: puppet}, new View(canvas));

		this.initGui();
	}

	/**
     * Changes the current puppet.
     * @param {Puppet} puppet  - puppet to display
     * @return {undefined}
     */
	setPuppet(puppet) {
		this.models.puppet = puppet;
	}

	/**
     * Initializes the dat.GUI interface.
     * @return {undefined}
     */
	initGui() {

		this.parameters = {
			puppetX: 290, puppetY: 222, puppetA: 0, 
			lowerBodyAngle: 0, upperBodyAngle: 0,
			rightArmAngle: 0, rightForeArmAngle:0, rightHandAngle:0,
			leftArmAngle: 0, leftForeArmAngle: 0, leftHandAngle: 0,
			rightUpperLegAngle: 0, leftUpperLegAngle: 0,
			rightLowerLegAngle: 0, leftLowerLegAngle: 0,
			rightFootAngle: 0, leftFootAngle: 0,
		}

		this.gui = new dat.GUI({ autoPlace: true, width: 400 });

		this.gui.add(this.parameters, "puppetX").min(100).max(500).step(1).onChange((function(value){
			this.models.puppet.x = value;
			this.updateView();
		}).bind(this));

		this.gui.add(this.parameters, "puppetY").min(150).max(420).step(1).onChange((function(value){
			this.models.puppet.y = value;
			this.updateView();
		}).bind(this));

		this.gui.add(this.parameters, "puppetA").min(0).max(360).step(1).onChange((function(value){
			this.models.puppet.angle = value;
			this.updateView();
		}).bind(this));

		this.gui.add(this.parameters, "lowerBodyAngle").min(-35).max(35).step(1).onChange((function(value){
			this.models.puppet.getChild("lowerBody").angle = -value;
			this.updateView();
		}).bind(this));

		this.gui.add(this.parameters, "upperBodyAngle").min(-35).max(35).step(1).onChange((function(value){
			this.models.puppet.getChild("upperBody").angle = -value;
			this.updateView();
		}).bind(this));

		this.gui.add(this.parameters, "rightUpperLegAngle").min(0).max(130).step(1).onChange((function(value){
			this.models.puppet.getChild("rightUpperLeg").angle = value;
			this.updateView();
		}).bind(this));

		this.gui.add(this.parameters, "rightLowerLegAngle").min(-90).max(90).step(1).onChange((function(value){
			this.models.puppet.getChild("rightLowerLeg").angle = value;
			this.updateView();
		}).bind(this));

		this.gui.add(this.parameters, "rightFootAngle").min(-45).max(45).step(1).onChange((function(value){
			this.models.puppet.getChild("rightFoot").angle = value;
			this.updateView();
		}).bind(this));

		this.gui.add(this.parameters, "leftUpperLegAngle").min(0).max(130).step(1).onChange((function(value){
			this.models.puppet.getChild("leftUpperLeg").angle = -value;
			this.updateView();
		}).bind(this));

		this.gui.add(this.parameters, "leftLowerLegAngle").min(-90).max(90).step(1).onChange((function(value){
			this.models.puppet.getChild("leftLowerLeg").angle = -value;
			this.updateView();
		}).bind(this));

		this.gui.add(this.parameters, "leftFootAngle").min(-45).max(45).step(1).onChange((function(value){
			this.models.puppet.getChild("leftFoot").angle = -value;
			this.updateView();
		}).bind(this));

		this.gui.add(this.parameters, "rightArmAngle").min(-75).max(180).step(1).onChange((function(value){
			this.models.puppet.getChild("rightArm").angle = value;
			this.updateView();
		}).bind(this));

		this.gui.add(this.parameters, "rightForeArmAngle").min(0).max(180).step(1).onChange((function(value){
			this.models.puppet.getChild("rightForeArm").angle = -value;
			this.updateView();
		}).bind(this));

		this.gui.add(this.parameters, "rightHandAngle").min(-90).max(90).step(1).onChange((function(value){
			this.models.puppet.getChild("rightHand").angle = -value;
			this.updateView();
		}).bind(this));

		this.gui.add(this.parameters, "leftArmAngle").min(-75).max(180).step(1).onChange((function(value){
			this.models.puppet.getChild("leftArm").angle = -value;
			this.updateView();
		}).bind(this));

		this.gui.add(this.parameters, "leftForeArmAngle").min(0).max(180).step(1).onChange((function(value){
			this.models.puppet.getChild("leftForeArm").angle = value;
			this.updateView();
		}).bind(this));

		this.gui.add(this.parameters, "leftHandAngle").min(-90).max(90).step(1).onChange((function(value){
			this.models.puppet.getChild("leftHand").angle = -value;
			this.updateView();
		}).bind(this));		
	}

}