import Immutable from 'immutable';
import Events from './events';
import createDispatcher from './dispatcher';

/**
 * @export
 * @param {Object} [initialState={}]
 * @return {Object}
 */
export default function createStore(initialState = {}) {
    /**
     * @type {Immutable.Map}
     */
    const state = Immutable.fromJS(initialState);

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
     * Returns the current state as an ImmutableJS object
     * @returns {Immutable.Map}
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
