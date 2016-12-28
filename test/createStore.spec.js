import { createStore } from '../src';

describe('createStore', () => {
  it('exposes the public API', () => {
    const store = createStore();
    const methods = Object.keys(store);

    expect(methods.length).toBe(3);
    expect(methods).toContain('getState');
    expect(methods).toContain('getStore');
    expect(methods).toContain('dispatch');
  });

  it('accepts an initial state', () => {
    const store = createStore({
      count: 0,
      foo: 'bar'
    });

    expect(store.getState()).toEqual({
      count: 0,
      foo: 'bar'
    });
  });
});
