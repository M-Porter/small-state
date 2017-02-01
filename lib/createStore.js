'use strict';

exports.__esModule = true;
exports.default = createStore;

var _seamlessImmutable = require('seamless-immutable');

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @export
 * @param {Object} [initialState={}]
 * @return {Object}
 */
function createStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


  /**
   * @type {Object} - Immutable state object
   */
  var state = _seamlessImmutable2.default.from(initialState);

  /**
   * The store object
   * @type {Object}
   */
  var store = {
    getState: getState,
    on: _events2.default.on,
    off: _events2.default.off,
    trigger: _events2.default.trigger
  };

  /**
   * Returns the store object
   * @returns {Object}
   */
  function getStore() {
    return store;
  }

  /**
   * Returns the current state as an immutable object
   * @returns {Object}
   */
  function getState() {
    return state;
  }

  /**
   * Mutates state
   * @param {Object} newState
   */
  function setState(newState) {
    state = newState;
  }

  /**
   * Dispatches an action function
   * @param {Function} action
   * @param {Object} [payload={}]
   * @returns {Promise}
   */
  function dispatch(action) {
    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof action !== 'function') {
      throw new Error('Expected reducer action to be a function.');
    }

    var dispatchPromise = new Promise(function (resolve, reject) {
      action({
        store: getStore(),
        state: getState(),
        payload: payload,
        resolve: resolve,
        reject: reject
      });
    });

    /**
     * Adds custom hooks onto all promise resolves trigggering 'state:change'
     * events for all state mutations.
     *
     * If resolve(state) is not called, the new state will not be set from
     * the reducers.
     */
    dispatchPromise.then(function (result /* [newState, events] */) {
      var localState = void 0;
      var events = void 0;

      if (Array.isArray(result)) {
        localState = result[0];
        if (result.length === 2) {
          events = result[1];
        }
      } else {
        localState = result;
      }

      setState(localState);

      getStore().trigger('state:changed');

      // If events is array, trigger all events in the array
      if (Array.isArray(events)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var event = _step.value;

            getStore().trigger(event);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      // If events is not an array and is just a string, trigger that event.
      else if (typeof events === 'string') {
          getStore().trigger(events);
        }

      return Promise.resolve(getState());
    });

    return dispatchPromise;
  }

  /**
   * Public API
   */
  return {
    getState: getState,
    getStore: getStore,
    dispatch: dispatch
  };
}