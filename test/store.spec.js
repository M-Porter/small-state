import { createStore } from '../src';

describe('store', () => {
  it('exposes the public API', () => {
    const store = createStore();
    const methods = Object.keys(store.getStore());

    expect(methods.length).toBe(4);
    expect(methods).toContain('getState');
    expect(methods).toContain('on');
    expect(methods).toContain('off');
    expect(methods).toContain('trigger');
  });

  it('returns store state with getState', () => {
    const store = createStore();

    expect(store.getState()).toBeInstanceOf(Object);
  });
});
