/**
 * Factory create function which extends the passed in view to set
 * the application store and state to the view's store and state
 * properties in the initialize and onBeforeRender calls.
 *
 * @export
 * @param {Marionette.View} view
 * @return {Object}
 */
export default function connectStoreToView(View, store) {

  return View.extend({
    initialize() {
      this.store = store;
      this.state = this.store.getState();

      this.__super__.initialize.call(this);
    },

    onBeforeRender() {
      this.store = store;
      this.state = this.store.getState();

      this.__super__.onBeforeRender.call(this);
    }
  });
}
