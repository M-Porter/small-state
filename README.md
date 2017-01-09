# small-state

[![Build Status](https://travis-ci.org/M-Porter/small-state.svg?branch=master)](https://travis-ci.org/M-Porter/small-state)

**small-state** is a minimalistic state management library which encourages 
immutability and strict unidirectional data flow in frontend applications. 
This library was created for use in Backbone and Marionette applications to 
provide a predictable state container.

> My goal was to create a state management library with minimal API but 
> completely predictable behavior, so it is possible to implement logging, hot 
> reloading, time travel, universal apps, record and replay, without any buy-in 
> from the developer."
> 
> — Dan Abramov on Redux

## Influences

- [Redux](http://redux.js.org/)
- [Flux](https://facebook.github.io/flux/)
- [MobX](https://mobxjs.github.io/mobx/)

If you have used any of the libraries above, the action/reducer pattern in 
this library will come easily to you.

## Features
- Pure state reducers
- No side effects
- Immutable State based on [seamless-immutable](https://github.com/rtfeldman/seamless-immutable)
- Promise based
- Minimal event system for registering state change hooks

## Installation

`npm install https://github.com/M-Porter/small-state`

This assumes you are using npm as your package manager.

**small-state** was written in ES2015 and currently is not precompiled before 
distribution so Babel is currently needed to use. Currently, only 
`babel-preset-2015` is required to use the library but more may be included 
in the future. View `.babelrc` with each release to stay up to date with 
required Babel plugins.

If you wish to use the UMD or CommonJS versions of the library, clone down 
the library and run `npm install` and `npm run build`. This will build the 
UMD, CommonJS and ES versions of the library.

## Usage

### Setup

```js
import Marionette, { Application } from 'backbone.marionette';
import { createStore } from 'small-state';

const app = new Application();
app.appStore = createStore();

export default app;
```

The `createStore` call also accepts an object as a parameter. If passed, 
this object will become the inital state. For example...

```js
app.appStore = createStore({
  foo: 'bar',
  someList: [1, 2, 3, 4, 5]
});
```
Or how I do it...

```js
app.appStore = createStore(window.INITIAL_STATE);
```

**small-state** does not need to be attached to a Marionette application 
instance to work. It can also be mixed in with a plain javascript object.

```js
import { createStore } from 'small-state';

const app = {};
app.appStore = createStore();

export default app;
```

### Working with the store

The store instance has 3 exposed functions: `getStore()`, `getState()`, 
and `dispatch()`. The `getState()` function is an alias for 
`getStore().getState()`.

```js
// Assume this for the code blocks below
import { createStore } from 'small-state';

const store = createStore();
```

The `getStore()` function returns the current store object which exposes useful
functions such as `on()`, `off()`, and `trigger()` which allows you to add
listener events to the store which can be trigger from the reducers.

```js
// Add listen event to the store
store.getStore().on('some:event', () => doSomething());

// Trigger event
store.getStore().trigger('some:event');

// Remove the event since small-state does not clean up after itself
store.getStore().off('some:event');
```

The `dispatch()` function is used to actually update the state. We will get
into how to actually update the state in the next section 
(_"Mutating the state"_) below.

```js
const store = store.getStore();

store.dispatch(someReducerFunction); // Dispatch returns a thenable
```

### Mutating the state

The most important part about **small-state**, and what you're probably here
for, is how to set and update the state of your application. You can assume this
is set for the rest of the code in this section:

```js
import { createStore } from 'small-state';

const store = createStore({
  count: 0
});
```

In **small-state**, the state is updated through _reducers_ which are 
_dispatched_ from the `store` object. The simplest of reducers could look like this:

```js
const incrementCounter = ({ state, resolve }) => {
  const newState = state.update('count', x => x + 1);
  resolve(newState);
}

const decrementCounter = ({ state, resolve }) => {
  const newState = state.update('count', x => x + 1);
  resolve(newState);
}

const resetCounter = ({ state, resolve }) => {
  const newState = state.setIn('count', 0);
  resolve(newState);
}
```

These reducers are then dispatched like so:

```js
store.dispatch(incrementCounter)
  .then(state => console.log(state.count)); // Prints out '1'

store.dispatch(incrementCounter)
  .then(state => console.log(state.count)); // Prints out '2'

store.dispatch(decrementCounter)
  .then(state => console.log(state.count)); // Prints out '1'

store.dispatch(resetCounter)
  .then(state => console.log(state.count)); // Prints out '0'
```

Notice that the function is passed to the dispatcher, not called directly. This
is because the dispatcher inject `store`, `state`, `payload`, `resolve`, and
`reject` into the reducer allowing for better encapsulation.

It is extremely important to **always** `resolve(state)` in each reducer after
the state was updated and modified. This is because the reducers are meant
to be pure functions with the state being immutable. If the state is not 
resolved, the state will not be updated.

### Events

After every reducer is resolved, the event `state:change` is triggered whether
or not the state was actually updated or not. Additionally, you can define your
own events in the reducers. This is useful if you prefer to use events over
thenables.

```js
// reducer with event
const incrementCounter = ({ state, store, resolve }) => {
  const newState = state.update('count', x => x + 1);

  store.trigger('count:incremented');

  resolve(newState);
}

// store and listener callbacks
store.getStore().on('count:incremented', () => console.log(store.getState().count));

store.dispatch(incrementCounter);

// Important to remove your events if you are creating them inside of destroyable
// js objects such as views in Backbone or Marionette.
store.getStore().off('count:incremented');
```

Events can be useful but can lead to issues. One of those issues is that
there is no guarentee that the state has been updated at the time of event 
triggers within your reducers. To ensure that your events are triggered _after_
the state has been updated, you can pass the events you wish to be triggered
alongside the resolved state.

[Much like how functions can only return single values, promises can only resolve
a single value.](http://stackoverflow.com/a/28703648) To get around this and to 
allow for resolving of state and events, the resolved value must be an array.

```js
// Incorrect
resolve(
  newState,
  ['event1', 'event2']
);

// Incorrect
resolve([
  newState,
  'event1', 
  'event2'
]);

// Correct
resolve([
  newState,
  ['event1', 'event2']
]);
```

```js
const incrementCounter = ({ state, store, resolve }) => {
  const newState = state.update('count', x => x + 1);

  // 'count:incremented' will now be updated AFTER the new state has been set
  resolve([newState, ['count:incremented']]);
}
```

## Connecting the store to your views

**small-state** comes with a helper function to automatically connect your store
and state to your views so that your views always have the latest state.

```js
import View from 'your/View';
import { connectStoreToView, createStore } from 'small-state';

const appStore = createStore();
const ConnectedView = connectStoreToView(View, appStore);

// view now has the property stateContainer (aliased as sc$)
const view = new ConnectedView();
```

In the above code block, `view` now has the property `stateContainer`, which can
also be accessed as the property `sc$`. The `stateContainer` in the views behave
slightly different than that of the small-state store.

_Assume `const view = new (connectStoreToView(View, appStore))` and `const store =
createStore()` for the points below:_

- `view.storeContainer` return the store object **but no methods can be invoked 
  on it**. This is because the `storeContainer` property is a `Proxy` of the 
  small-state store object.
- `view.storeContainer.store` is the same as `store` which has the methods
  `getState()`, `getStore()`, and `dispatch()`
- `view.storeContainer.store.getStore()` is the same as `store.getStore()` which
  has the methods `on()`, `of(), `trigger()`, and `getState()`
- `view.storeContainer.state` is the same as `store.getState()`
