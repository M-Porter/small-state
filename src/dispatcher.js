/**
 * @export
 * @param {Object} store
 * @param {Object} state - Immutable state object
 */
export default function createDispatcher(store, state) {

  /**
   * Dispatches an action function
   * @param {Function} action
   * @param {Object} [payload={}]
   * @returns {Promise}
   */
  return function dispatch(action, payload = {}) {
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
    Promise.all([dispatchPromise]).then((newState, events) => {
        state = newState;

        store.trigger('state:change');

        // If events is array, trigger all events in the array
        if (Array.isArray(events)) {
          for (const event of events) {
            store.trigger(event);
          }
        }

        // If events is not an array and is just a string, trigger that event.
        else if (typeof events === 'string') {
          store.trigger(events);
        }

        return Promise.resolve(state);
    });

    return dispatchPromise;
  }
}
