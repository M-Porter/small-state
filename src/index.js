import 'core-js/modules/es6.promise';
import 'proxy-polyfill/proxy.min'; // unminifed version build fails

import createStore from './createStore';
import connectStoreToView from './connectStoreToView';

export {
  createStore,
  connectStoreToView
};
