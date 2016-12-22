import Immutable from 'seamless-immutable';
import Events from './events';
import createDispatcher from './dispatcher';

/**
 * @export
 * @param {Object} [initialState={}]
 * @return {Object}
 */
export default function createStore(initialState = {}) {

    /**
     * @type {Object} - Immutable state object
     */
    const state = Immutable.from(initialState);

    /**
     * The store object
     * @type {Object}
     */
    const store = {
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

    const dispatch = createDispatcher(store, state);

    return {
      getState,
      getStore,
      dispatch
    };
}
