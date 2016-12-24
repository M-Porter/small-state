export const incrementCounter = ({ store, state, resolve }) => {
  const newState = state.update('count', x => x + 1);
  resolve(newState);
}

export const decrementCounter = ({ state, resolve }) => {
  const newState = state.update('count', x => x - 1);
  resolve(newState);
}

export const resetCounter = ({ state, resolve }) => {
  const newState = state.set('count', 0);
  resolve(newState);
}

export const incrementCounterWithEvent = ({ state, resolve }) => {
  const newState = state.update('count', x => x + 1);
  resolve(newState, ['count:incremented']);
}

export const decrementCounterWithEvent = ({ state, resolve }) => {
  const newState = state.update('count', x => x - 1);
  resolve(newState, ['count:decremented']);
}

export const resetCounterWithEvent = ({ state, resolve }) => {
  const newState = state.set('count', 0);
  resolve(newState, ['count:reset']);
}
