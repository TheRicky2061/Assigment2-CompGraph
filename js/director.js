/**
 * module director.js
 * @module Director
 */


/**
 * Director class for creating puppets.
 */
export class Director {

    /*
     * Create a puppet.
     * @param {Builder} builder - Builder to use for creating puppets.
     */
    createPuppet(builder) {
        builder.setPuppetBody();
        builder.setLowerBody();
        builder.setUpperBody();
        builder.setRightUpperLeg($("#rightUpperLeg").get(0));
        builder.setLeftUpperLeg($("#leftUpperLeg").get(0));
        builder.setTorso($("#torso").get(0));
        builder.setRightArm($("#rightArm").get(0));
        builder.setRightForeArm($("#rightForeArm").get(0));
        builder.setRightHand($("#rightHand").get(0))
        builder.setLeftArm($("#leftArm").get(0));
        builder.setLeftForeArm($("#leftForeArm").get(0));
        builder.setLeftHand($("#leftHand").get(0))
        builder.setRightLowerLeg($("#rightLowerLeg").get(0));
        builder.setLeftLowerLeg($("#leftLowerLeg").get(0));
        builder.setRightFoot($("#rightFoot").get(0));
        builder.setLeftFoot($("#leftFoot").get(0));
    }
}