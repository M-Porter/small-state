require('core-js/modules/es6.promise');
require('proxy-polyfill');

const createStore = require('./createStore').default;
const connectStoreToView = require('./connectStoreToView').default;

export {
  createStore,
  connectStoreToView
};
