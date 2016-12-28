import { createStore } from '../src';

describe('store dispatch', () => {
  it('throws if reducer is not a function', () => {
    const store = createStore();

    expect(() =>
      store.dispatch()
    ).toThrow();

    expect(() =>
      store.dispatch([])
    ).toThrow();

    expect(() =>
      store.dispatch({})
    ).toThrow();

    expect(() =>
      store.dispatch(1)
    ).toThrow();

    expect(() =>
      store.dispatch(undefined)
    ).toThrow();

    expect(() =>
      store.dispatch('function')
    ).toThrow();

    expect(() =>
      store.dispatch(() => {})
    ).not.toThrow();
  });
});
