import createStore from '../src/createStore';
import * as Reducers from './helpers/reducers/counter';

describe('store events', () => {
  it('triggers state:changed after every dispatch', () => {
    const store = createStore({
      count: 0
    });

    let callback = jest.fn();

    store.getStore().on('state:changed', callback);

    return store.dispatch(Reducers.incrementCounter)
      .then(() =>
        expect(callback).toHaveBeenCalled()
      );
  });

  it('listens and responds to events in reducers', () => {
    const store = createStore({
      count: 0
    });

    const incrementCallback = jest.fn();
    const decrementCallback = jest.fn();
    const resetCallback = jest.fn();

    store.getStore().on('count:incremented', incrementCallback);
    store.getStore().on('count:reset', resetCallback);
    store.getStore().on('count:decremented', decrementCallback);

    return store.dispatch(Reducers.incrementCounterWithEvent)
      .then(() => {
        expect(incrementCallback).toHaveBeenCalled()
      })
      .then(store.dispatch(Reducers.resetCounterWithEvent))
      .then(() => {
        expect(resetCallback).toHaveBeenCalled();
      })
      .then(store.dispatch(Reducers.decrementCounterWithEvent))
      .then(() => {
        expect(decrementCallback).toHaveBeenCalled();
      });
  });
});
