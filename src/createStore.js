import Immutable from 'seamless-immutable';
import Events from './events';

/**
 * @export
 * @param {Object} [initialState={}]
 * @return {Object}
 */
export default function createStore(initialState = {}) {

  /**
   * @type {Object} - Immutable state object
   */
  var state = Immutable.from(initialState);

  /**
   * The store object
   * @type {Object}
   */
  var store = {
    getState,
    on: Events.on,
    off: Events.off,
    trigger: Events.trigger
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
  function dispatch(action, payload = {}) {
    if (typeof action !== 'function') {
      throw new Error('Expected reducer action to be a function.');
    }

    const dispatchPromise = new Promise((resolve, reject) => {
      action({
        store: getStore(),
        state: getState(),
        payload,
        resolve,
        reject
      });
    });

    /**
     * Adds custom hooks onto all promise resolves trigggering 'state:change'
     * events for all state mutations.
     *
     * If resolve(state) is not called, the new state will not be set from
     * the reducers.
     */
    dispatchPromise.then((result /* [newState, events] */) => {
      let localState;
      let events;

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
        for (const event of events) {
          getStore().trigger(event);
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
    getState,
    getStore,
    dispatch
  };
}
