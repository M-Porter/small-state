import Marionette from 'backbone.marionette';
import { createStore, connectStoreToView } from '../src';
import * as Reducers from './helpers/reducers/counter';

describe('connectStoreToView', () => {
  var app;
  var View;

  beforeEach(() => {
    app = {};
    app.appStore = createStore({ count: 0 });

    View = connectStoreToView(
      require('./helpers/marionette/View').default,
      app.appStore
    );
  });

  it('throws if View is not a Backbone view', () => {
    expect(() =>
      connectStoreToView({}, app.appStore)
    ).toThrow();
  });

  it('throws if store is not a small-state store', () => {
    expect(() =>
      connectStoreToView(View, {})
    ).toThrow();
  });

  it('correctly sets properties on the view', () => {
    const view = new View();
    view.render();

    // storeContainer property is a proxy which means no properties
    // or methods will be exposed.
    expect(Object.keys(view.sc$).length).toBe(0);

    const storeContainerMethods = Object.keys(view.sc$.store);

    expect(storeContainerMethods.length).toBe(3);
    expect(storeContainerMethods).toContain('getState');
    expect(storeContainerMethods).toContain('getStore');
    expect(storeContainerMethods).toContain('dispatch');

    const storeMethods = Object.keys(view.sc$.store.getStore());

    expect(storeMethods.length).toBe(4);
    expect(storeMethods).toContain('getState');
    expect(storeMethods).toContain('on');
    expect(storeMethods).toContain('off');
    expect(storeMethods).toContain('trigger');

    expect(view.foo).toEqual('bar');
  });

  it('correctly sets initial state to the store', () => {
    const view = new View();
    view.render();

    expect(view.sc$.state.count).toEqual(0);

    return app.appStore.dispatch(Reducers.incrementCounter)
      .then(() => {
        expect(view.sc$.state.count).toEqual(1);
      });
  });

  it('correctly updates store on render', () => {
    const view = new View();
    view.render();

    return app.appStore.dispatch(Reducers.incrementCounter)
      .then(() => view.sc$.store.dispatch(Reducers.incrementCounter))
      .then(() => app.appStore.dispatch(Reducers.incrementCounter))
      .then(() => view.sc$.store.dispatch(Reducers.incrementCounter))
      .then(() => app.appStore.dispatch(Reducers.incrementCounter))
      .then(() => {
        expect(view.sc$.state.count).toEqual(5);
        expect(app.appStore.getState().count).toEqual(5);
      });
  });
});
