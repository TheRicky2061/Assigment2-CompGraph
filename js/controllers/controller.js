/**
 * module controller.js
 * @module Controller
 */


/**
 * Basic controller for inheriting. Has a view and various models. 
 */
export class Controller {

	/**
     * Create a Controller.
     * @param {Object} models  - Model objects.
     * @param {View} view  	   - View used for rendering the models.
     */
	constructor(models, view) {
		this.models = models;
		this.view = view;
	}

	/**
	 * Clears the canvas and passes the models to the view.
	 * @return {undefined}
	 */
	updateView() {
		this.view.clear();
		this.passModelsToView(this.models);
	}

	/**
	 * Passes the models to the view.
	 * @return {undefined}
	 */
	passModelsToView(models) {

		for(const model of Object.values(models)) {

			// If this is another list of objects, also give each one to the view.
			if(model instanceof Array)
				this.passModelsToView(model);

			// Model might be null, so check it first just in case.
			else if(model)
				model.acceptView(this.view);
		}
	}
}