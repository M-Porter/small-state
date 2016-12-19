import Immutable from 'immutable';
import Promise from 'bluebird';
import Events from './events';

/**
 * @export
 * @param {Object} [initialState={}]
 * @return {Object}
 */
export function createStore(initialState = {}) {
    /**
     * @type {Immutable.Map}
     */
    const state = Immutable.fromJS(initialState);

    /**
     * Returns the current state as an ImmutableJS object
     * @returns {Immutable.Map}
     */
    function getState() {
        return state;
    }

    /**
     * Dispatches an action function
     * @param {Function} action
     * @param {Object} [payload={}]
     * @returns {Promise}
     */
    function dispatch(action, payload = {}) {
        const dispatchPromise = new Promise((resolve, reject) => {
            action({
                store,
                state,
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
        Promise.all([dispatchPromise]).then((newState) => {
            state = newState;
            store.trigger('state:change');
        });

        return dispatchPromise;
    }

    /**
     * The store object.
     * @type {Object}
     */
    const store = {
        dispatch,
        getState,
        on: Events.on,
        off: Events.off,
        trigger: Events.trigger
    };

    return store;
}
