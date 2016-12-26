/**
 * Factory create function which extends the passed in view to set
 * the application store and state to the view's store and state
 * properties in the initialize and onBeforeRender calls.
 *
 * @export
 * @param {Marionette.View} view
 * @param {Object} store
 * @return {Object}
 */
export default function connectStoreToView(View, store) {

  // Check to make sure the View actually is a view
  if (
    typeof View.extend !== 'function'
    && typeof View.__super__ !== 'object'
  ) {
    throw new Error('Expecting View to be an instance of Backbone.View');
  }

  // Check to make sure the passed store is a small-state store
  if (
    typeof store.getState !== 'function'
    || typeof store.getStore !== 'function'
    || typeof store.dispatch !== 'function'
  ) {
    throw new Error('Expecting store to be a small-state store.');
  }

  return View.extend({
    initialize: function() {
      this.appStore = store;
      this.state = this.appStore.getState();

      if (typeof View.prototype.initialize === 'function') {
        View.prototype.initialize.apply(this, arguments);
      }
    },

    onBeforeRender: function() {
      this.appStore = store;
      this.state = this.appStore.getState();

      if (typeof View.prototype.onBeforeRender === 'function') {
        View.prototype.onBeforeRender.apply(this, arguments);
      }
    }
  });
}
