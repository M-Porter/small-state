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

  // Creating a proxy allows us to observe and always return the newest store
  // and state.
  const containerProxy = new Proxy(store, {
    get(target, property) {
      switch(property) {
      case 'store': return target;
      case 'state': return target.getState();
      default: return target;
      }
    }
  });

  /**
   * Access small-state store within your views via the `storeContainer`
   * property.
   *
   * this.storeContainer.store => getStore(), getState(), dispatch()
   * this.storeContainer.state => getState() => {Object}
   */
  return View.extend({
    initialize: function() {
      this.storeContainer = containerProxy;
      this.sc$ = this.storeContainer;

      if (typeof View.prototype.initialize === 'function') {
        View.prototype.initialize.apply(this, arguments);
      }
    }
  });
}
