import createStore from '../src/createStore';
import createDispatcher from '../src/createDispatcher';

describe('createDispatcher', () => {
  it('exposes dispatch function', () => {
    const store = createStore();
    const dispatcher = createDispatcher(store.getStore(), store.getState());

    expect(typeof dispatcher).toBe('function');
  });
});
