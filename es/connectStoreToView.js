'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = connectStoreToView;
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
function connectStoreToView(View, store) {

  // Check to make sure the View actually is a view
  if (typeof View.extend !== 'function' && _typeof(View.__super__) !== 'object') {
    throw new Error('Expecting View to be an instance of Backbone.View');
  }

  // Check to make sure the passed store is a small-state store
  if (typeof store.getState !== 'function' || typeof store.getStore !== 'function' || typeof store.dispatch !== 'function') {
    throw new Error('Expecting store to be a small-state store.');
  }

  // Creating a proxy allows us to observe and always return the newest store
  // and state.
  var containerProxy = {};

  Object.defineProperty(containerProxy, 'store', {
    get: function get() {
      return store;
    }
  });

  Object.defineProperty(containerProxy, 'state', {
    get: function get() {
      return store.getState();
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
    initialize: function initialize() {
      this.storeContainer = containerProxy;
      this.sc$ = this.storeContainer;

      if (typeof View.prototype.initialize === 'function') {
        View.prototype.initialize.apply(this, arguments);
      }
    }
  });
}