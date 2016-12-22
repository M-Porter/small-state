# small-state

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

- Redux
- Flux
- MobX

If you have used any of the libraries above, the action/reducer pattern in 
this library will come easily to you.

## Features
- Pure state reducers
- No side effects
- State based on [seamless-immutable](https://github.com/rtfeldman/seamless-immutable)
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
store.getStore().getStore().on('some:event', () => doSomething());

// Trigger event
store.getStore().getStore().trigger('some:event');

// Remove the event since small-state does not clean up after itself
store.getStore().getStore().off('some:event');
```

The `dispatch()` function is used to actually update the state. We will get
into how to actually update the state in the next section 
(_"Mutating the state"_) below.

```
const store = store.getStore();

store.getStore().dispatch(someReducerFunction); // Dispatch returns a thenable
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
  counst newState = state.setIn('count', 0);
  resolve(newState);
}
```

These reducers are then dispatched like so:

```js
store.getStore().dispatch(incrementCounter)
  .then(state => console.log(state.count)); // Prints out '1'

store.getStore().dispatch(incrementCounter)
  .then(state => console.log(state.count)); // Prints out '2'

store.getStore().dispatch(decrementCounter)
  .then(state => console.log(state.count)); // Prints out '3'

store.getStore().dispatch(resetCounter)
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

store.getStore().dispatch(incrementCounter);

store.getStore().off('count:incremented');
```

The downside to the event listener is that due to javascript's asynchronous
nature, there is no guarentee that the state will be updated by the time the
event callback is executed.
