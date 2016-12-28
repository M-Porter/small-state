import { createStore } from '../src';
import * as Reducers from './helpers/reducers/counter';

describe('state', () => {
  it('throws if mutated directly', () => {
    const store = createStore({
      foo: 'bar'
    });

    expect(() =>
      store.getState().foo = 'should not work'
    ).toThrow();

    expect(() =>
      store.getState()['fizz'] = 'buzz'
    ).toThrow();
  });

  it('can be mutated through a reducer', () => {
    const store = createStore({
      count: 0
    });

    return store.dispatch(Reducers.incrementCounter)
      .then(() => {
        expect(store.getState().count).toEqual(1);
        return store.dispatch(Reducers.resetCounter);
      })
      .then(() => {
        expect(store.getState().count).toEqual(0);
        return store.dispatch(Reducers.decrementCounter);
      })
      .then(() => {
         expect(store.getState().count).toEqual(-1);
      });
  });

  it('getState equals resolved state', () => {
    const store = createStore({
      count: 0
    });

    return store.dispatch(Reducers.incrementCounter)
      .then((state) =>
        expect(store.getState()).toEqual(state)
      );
  });
});
