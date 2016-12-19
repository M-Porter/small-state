/**
 * @export
 * @param {Object} store
 * @param {Immutable.Map} state
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
    Promise.all([dispatchPromise]).then((newState) => {
        state = newState;
        store.trigger('state:change');
    });

    return dispatchPromise;
  }
}
