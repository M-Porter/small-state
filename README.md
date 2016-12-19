# small-state

**small-state** is a minimalistic state management library which encourages immutability and strict unidirectional data flow in frontend applications. This library was created for use in Backbone and Marionette applications to provide a predictable state container.

> My goal was to create a state management library with minimal API but completely predictable behavior, so it is possible to implement logging, hot reloading, time travel, universal apps, record and replay, without any buy-in from the developer."
> 
> — Dan Abramov on Redux

## Influences

- Redux
- Flux
- MobX

If you have used any of the libraries above, the action/reducer pattern in this library will come easily to you.

## Features
- Pure state reducers
- No side effects
- State based on [Immutable.js](https://facebook.github.io/immutable-js/)
- Promise based
- Minimal event system for registering state change hooks

## Installation

`npm install https://github.com/M-Porter/small-state`

This assumes you are using npm as your package manager.

**small-state** was written in ES2015 and currently is not precompiled before distribution so Babel is currently needed to use. Currently, only `babel-preset-2015` is required to use the library but more may be included in the future. View `.babelrc` with each release to stay up to date with required Babel plugins.

## Usage

### Setup

```js
import Marionette, { Application } from 'backbone.marionette';
import { createStore } from 'small-state';

const app = new Application();
app.appStore = createStore();

export default app;
```

The `createStore` call also accepts an object as a parameter. If passed, this object will become the inital state. For example...

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

**small-state** does not need to be attached to a Marionette application instance to work. It can also be mixed in with a plain javascript object.

```js
import { createStore } from 'small-state';

const app = {};
app.appStore = createStore();

export default app;
```

### Working with the store

### Mutating the state