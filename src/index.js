require('core-js/modules/es6.promise');

const createStore = require('./createStore').default;
const connectStoreToView = require('./connectStoreToView').default;

export {
  createStore,
  connectStoreToView
};
