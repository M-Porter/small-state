'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectStoreToView = exports.createStore = undefined;

require('core-js/modules/es6.promise');

require('core-js/modules/es6.object.define-property');

var _createStore = require('./createStore');

var _createStore2 = _interopRequireDefault(_createStore);

var _connectStoreToView = require('./connectStoreToView');

var _connectStoreToView2 = _interopRequireDefault(_connectStoreToView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createStore = _createStore2.default;
exports.connectStoreToView = _connectStoreToView2.default;