(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SmallState"] = factory();
	else
		root["SmallState"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connectStoreToView = exports.createStore = undefined;

	__webpack_require__(45);

	__webpack_require__(44);

	var _createStore = __webpack_require__(22);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _connectStoreToView = __webpack_require__(21);

	var _connectStoreToView2 = _interopRequireDefault(_connectStoreToView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.createStore = _createStore2.default;
	exports.connectStoreToView = _connectStoreToView2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(38)('wks')
	  , uid        = __webpack_require__(20)
	  , Symbol     = __webpack_require__(1).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(14)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(7);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(9);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(4)
	  , IE8_DOM_DEFINE = __webpack_require__(27)
	  , toPrimitive    = __webpack_require__(42)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(10)
	  , TAG = __webpack_require__(2)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(7)
	  , document = __webpack_require__(1).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(1)
	  , core      = __webpack_require__(5)
	  , hide      = __webpack_require__(16)
	  , redefine  = __webpack_require__(18)
	  , ctx       = __webpack_require__(6)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(8)
	  , createDesc = __webpack_require__(34);
	module.exports = __webpack_require__(3) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(1)
	  , hide      = __webpack_require__(16)
	  , has       = __webpack_require__(15)
	  , SRC       = __webpack_require__(20)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(5).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(6)
	  , invoke             = __webpack_require__(28)
	  , html               = __webpack_require__(26)
	  , cel                = __webpack_require__(12)
	  , global             = __webpack_require__(1)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(10)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = connectStoreToView;
	/**
	 * Factory create function which extends the passed in view to set
	 * the application store and state to the view's store and state
	 * properties in the initialize and onBeforeRender calls.
	 *
	 * @export
	 * @param {Marionette.View} view
	 * @param {Object} store
	 * @return {Object}
	 */
	function connectStoreToView(View, store) {

	  // Check to make sure the View actually is a view
	  if (typeof View.extend !== 'function' && _typeof(View.__super__) !== 'object') {
	    throw new Error('Expecting View to be an instance of Backbone.View');
	  }

	  // Check to make sure the passed store is a small-state store
	  if (typeof store.getState !== 'function' || typeof store.getStore !== 'function' || typeof store.dispatch !== 'function') {
	    throw new Error('Expecting store to be a small-state store.');
	  }

	  // Creating a proxy allows us to observe and always return the newest store
	  // and state.
	  var containerProxy = {};

	  Object.defineProperty(containerProxy, 'store', {
	    get: function get() {
	      return store;
	    }
	  });

	  Object.defineProperty(containerProxy, 'state', {
	    get: function get() {
	      return store.getState();
	    }
	  });

	  /**
	   * Access small-state store within your views via the `storeContainer`
	   * property.
	   *
	   * this.storeContainer.store => getStore(), getState(), dispatch()
	   * this.storeContainer.state => getState() => {Object}
	   */
	  return View.extend({
	    initialize: function initialize() {
	      this.storeContainer = containerProxy;
	      this.sc$ = this.storeContainer;

	      if (typeof View.prototype.initialize === 'function') {
	        View.prototype.initialize.apply(this, arguments);
	      }
	    }
	  });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = createStore;

	var _seamlessImmutable = __webpack_require__(46);

	var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

	var _events = __webpack_require__(23);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @export
	 * @param {Object} [initialState={}]
	 * @return {Object}
	 */
	function createStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


	  /**
	   * @type {Object} - Immutable state object
	   */
	  var state = _seamlessImmutable2.default.from(initialState);

	  /**
	   * The store object
	   * @type {Object}
	   */
	  var store = {
	    getState: getState,
	    on: _events2.default.on,
	    off: _events2.default.off,
	    trigger: _events2.default.trigger
	  };

	  /**
	   * Returns the store object
	   * @returns {Object}
	   */
	  function getStore() {
	    return store;
	  }

	  /**
	   * Returns the current state as an immutable object
	   * @returns {Object}
	   */
	  function getState() {
	    return state;
	  }

	  /**
	   * Mutates state
	   * @param {Object} newState
	   */
	  function setState(newState) {
	    state = newState;
	  }

	  /**
	   * Dispatches an action function
	   * @param {Function} action
	   * @param {Object} [payload={}]
	   * @returns {Promise}
	   */
	  function dispatch(action) {
	    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (typeof action !== 'function') {
	      throw new Error('Expected reducer action to be a function.');
	    }

	    var dispatchPromise = new Promise(function (resolve, reject) {
	      action({
	        store: getStore(),
	        state: getState(),
	        payload: payload,
	        resolve: resolve,
	        reject: reject
	      });
	    });

	    /**
	     * Adds custom hooks onto all promise resolves trigggering 'state:change'
	     * events for all state mutations.
	     *
	     * If resolve(state) is not called, the new state will not be set from
	     * the reducers.
	     */
	    dispatchPromise.then(function (result /* [newState, events] */) {
	      var localState = void 0;
	      var events = void 0;

	      if (Array.isArray(result)) {
	        localState = result[0];
	        if (result.length === 2) {
	          events = result[1];
	        }
	      } else {
	        localState = result;
	      }

	      setState(localState);

	      getStore().trigger('state:changed');

	      // If events is array, trigger all events in the array
	      if (Array.isArray(events)) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var event = _step.value;

	            getStore().trigger(event);
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	      }

	      // If events is not an array and is just a string, trigger that event.
	      else if (typeof events === 'string') {
	          getStore().trigger(events);
	        }

	      return Promise.resolve(getState());
	    });

	    return dispatchPromise;
	  }

	  /**
	   * Public API
	   */
	  return {
	    getState: getState,
	    getStore: getStore,
	    dispatch: dispatch
	  };
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 *
	 * Taken from Backbone.js
	 *
	 * -----------------------------------------------------------------------------
	 *
	 * Copyright (c) 2010-2016 Jeremy Ashkenas, DocumentCloud
	 *
	 * Permission is hereby granted, free of charge, to any person
	 * obtaining a copy of this software and associated documentation
	 * files (the "Software"), to deal in the Software without
	 * restriction, including without limitation the rights to use,
	 * copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the
	 * Software is furnished to do so, subject to the following
	 * conditions:
	 *
	 * The above copyright notice and this permission notice shall be
	 * included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
	 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
	 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
	 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	 * OTHER DEALINGS IN THE SOFTWARE.
	 *
	 */

	// Backbone.Events
	// ---------------

	// A module that can be mixed in to *any object* in order to provide it with
	// a custom event channel. You may bind a callback to an event with `on` or
	// remove with `off`; `trigger`-ing an event fires all callbacks in
	// succession.
	//
	//     var object = {};
	//     _.extend(object, Backbone.Events);
	//     object.on('expand', function(){ alert('expanded'); });
	//     object.trigger('expand');
	//
	var Events = {};

	// Regular expression used to split event strings.
	var eventSplitter = /\s+/;

	// Iterates over the standard `event, callback` (as well as the fancy multiple
	// space-separated events `"change blur", callback` and jQuery-style event
	// maps `{event: callback}`).
	var eventsApi = function eventsApi(iteratee, events, name, callback, opts) {
	  var i = 0,
	      names;
	  if (name && (typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    // Handle event maps.
	    if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
	    for (names = _.keys(name); i < names.length; i++) {
	      events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
	    }
	  } else if (name && eventSplitter.test(name)) {
	    // Handle space-separated event names by delegating them individually.
	    for (names = name.split(eventSplitter); i < names.length; i++) {
	      events = iteratee(events, names[i], callback, opts);
	    }
	  } else {
	    // Finally, standard events.
	    events = iteratee(events, name, callback, opts);
	  }
	  return events;
	};

	// Bind an event to a `callback` function. Passing `"all"` will bind
	// the callback to all events fired.
	Events.on = function (name, callback, context) {
	  return internalOn(this, name, callback, context);
	};

	// Guard the `listening` argument from the public API.
	var internalOn = function internalOn(obj, name, callback, context, listening) {
	  obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
	    context: context,
	    ctx: obj,
	    listening: listening
	  });

	  if (listening) {
	    var listeners = obj._listeners || (obj._listeners = {});
	    listeners[listening.id] = listening;
	  }

	  return obj;
	};

	// Inversion-of-control versions of `on`. Tell *this* object to listen to
	// an event in another object... keeping track of what it's listening to
	// for easier unbinding later.
	Events.listenTo = function (obj, name, callback) {
	  if (!obj) return this;
	  var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
	  var listeningTo = this._listeningTo || (this._listeningTo = {});
	  var listening = listeningTo[id];

	  // This object is not listening to any other events on `obj` yet.
	  // Setup the necessary references to track the listening callbacks.
	  if (!listening) {
	    var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
	    listening = listeningTo[id] = { obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0 };
	  }

	  // Bind callbacks on obj, and keep track of them on listening.
	  internalOn(obj, name, callback, this, listening);
	  return this;
	};

	// The reducing API that adds a callback to the `events` object.
	var onApi = function onApi(events, name, callback, options) {
	  if (callback) {
	    var handlers = events[name] || (events[name] = []);
	    var context = options.context,
	        ctx = options.ctx,
	        listening = options.listening;
	    if (listening) listening.count++;

	    handlers.push({ callback: callback, context: context, ctx: context || ctx, listening: listening });
	  }
	  return events;
	};

	// Remove one or many callbacks. If `context` is null, removes all
	// callbacks with that function. If `callback` is null, removes all
	// callbacks for the event. If `name` is null, removes all bound
	// callbacks for all events.
	Events.off = function (name, callback, context) {
	  if (!this._events) return this;
	  this._events = eventsApi(offApi, this._events, name, callback, {
	    context: context,
	    listeners: this._listeners
	  });
	  return this;
	};

	// Tell this object to stop listening to either specific events ... or
	// to every object it's currently listening to.
	Events.stopListening = function (obj, name, callback) {
	  var listeningTo = this._listeningTo;
	  if (!listeningTo) return this;

	  var ids = obj ? [obj._listenId] : _.keys(listeningTo);

	  for (var i = 0; i < ids.length; i++) {
	    var listening = listeningTo[ids[i]];

	    // If listening doesn't exist, this object is not currently
	    // listening to obj. Break out early.
	    if (!listening) break;

	    listening.obj.off(name, callback, this);
	  }

	  return this;
	};

	// The reducing API that removes a callback from the `events` object.
	var offApi = function offApi(events, name, callback, options) {
	  if (!events) return;

	  var i = 0,
	      listening;
	  var context = options.context,
	      listeners = options.listeners;

	  // Delete all events listeners and "drop" events.
	  if (!name && !callback && !context) {
	    var ids = _.keys(listeners);
	    for (; i < ids.length; i++) {
	      listening = listeners[ids[i]];
	      delete listeners[listening.id];
	      delete listening.listeningTo[listening.objId];
	    }
	    return;
	  }

	  var names = name ? [name] : _.keys(events);
	  for (; i < names.length; i++) {
	    name = names[i];
	    var handlers = events[name];

	    // Bail out if there are no events stored.
	    if (!handlers) break;

	    // Replace events if there are any remaining.  Otherwise, clean up.
	    var remaining = [];
	    for (var j = 0; j < handlers.length; j++) {
	      var handler = handlers[j];
	      if (callback && callback !== handler.callback && callback !== handler.callback._callback || context && context !== handler.context) {
	        remaining.push(handler);
	      } else {
	        listening = handler.listening;
	        if (listening && --listening.count === 0) {
	          delete listeners[listening.id];
	          delete listening.listeningTo[listening.objId];
	        }
	      }
	    }

	    // Update tail event if the list has any events.  Otherwise, clean up.
	    if (remaining.length) {
	      events[name] = remaining;
	    } else {
	      delete events[name];
	    }
	  }
	  return events;
	};

	// Bind an event to only be triggered a single time. After the first time
	// the callback is invoked, its listener will be removed. If multiple events
	// are passed in using the space-separated syntax, the handler will fire
	// once for each event, not once for a combination of all events.
	Events.once = function (name, callback, context) {
	  // Map the event into a `{event: once}` object.
	  var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
	  if (typeof name === 'string' && context == null) callback = void 0;
	  return this.on(events, callback, context);
	};

	// Inversion-of-control versions of `once`.
	Events.listenToOnce = function (obj, name, callback) {
	  // Map the event into a `{event: once}` object.
	  var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
	  return this.listenTo(obj, events);
	};

	// Reduces the event callbacks into a map of `{event: onceWrapper}`.
	// `offer` unbinds the `onceWrapper` after it has been called.
	var onceMap = function onceMap(map, name, callback, offer) {
	  if (callback) {
	    var once = map[name] = _.once(function () {
	      offer(name, once);
	      callback.apply(this, arguments);
	    });
	    once._callback = callback;
	  }
	  return map;
	};

	// Trigger one or many events, firing all bound callbacks. Callbacks are
	// passed the same arguments as `trigger` is, apart from the event name
	// (unless you're listening on `"all"`, which will cause your callback to
	// receive the true name of the event as the first argument).
	Events.trigger = function (name) {
	  if (!this._events) return this;

	  var length = Math.max(0, arguments.length - 1);
	  var args = Array(length);
	  for (var i = 0; i < length; i++) {
	    args[i] = arguments[i + 1];
	  }eventsApi(triggerApi, this._events, name, void 0, args);
	  return this;
	};

	// Handles triggering the appropriate event callbacks.
	var triggerApi = function triggerApi(objEvents, name, callback, args) {
	  if (objEvents) {
	    var events = objEvents[name];
	    var allEvents = objEvents.all;
	    if (events && allEvents) allEvents = allEvents.slice();
	    if (events) triggerEvents(events, args);
	    if (allEvents) triggerEvents(allEvents, [name].concat(args));
	  }
	  return objEvents;
	};

	// A difficult-to-believe, but optimized internal dispatch function for
	// triggering events. Tries to keep the usual cases speedy (most internal
	// Backbone events have 3 arguments).
	var triggerEvents = function triggerEvents(events, args) {
	  var ev,
	      i = -1,
	      l = events.length,
	      a1 = args[0],
	      a2 = args[1],
	      a3 = args[2];
	  switch (args.length) {
	    case 0:
	      while (++i < l) {
	        (ev = events[i]).callback.call(ev.ctx);
	      }return;
	    case 1:
	      while (++i < l) {
	        (ev = events[i]).callback.call(ev.ctx, a1);
	      }return;
	    case 2:
	      while (++i < l) {
	        (ev = events[i]).callback.call(ev.ctx, a1, a2);
	      }return;
	    case 3:
	      while (++i < l) {
	        (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
	      }return;
	    default:
	      while (++i < l) {
	        (ev = events[i]).callback.apply(ev.ctx, args);
	      }return;
	  }
	};

	// Aliases for backwards compatibility.
	Events.bind = Events.on;
	Events.unbind = Events.off;

	exports.default = Events;

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(6)
	  , call        = __webpack_require__(30)
	  , isArrayIter = __webpack_require__(29)
	  , anObject    = __webpack_require__(4)
	  , toLength    = __webpack_require__(41)
	  , getIterFn   = __webpack_require__(43)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1).document && document.documentElement;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(3) && !__webpack_require__(14)(function(){
	  return Object.defineProperty(__webpack_require__(12)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 28 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(17)
	  , ITERATOR   = __webpack_require__(2)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(4);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(2)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(1)
	  , macrotask = __webpack_require__(19).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(10)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(1)
	  , dP          = __webpack_require__(8)
	  , DESCRIPTORS = __webpack_require__(3)
	  , SPECIES     = __webpack_require__(2)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(8).f
	  , has = __webpack_require__(15)
	  , TAG = __webpack_require__(2)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(1)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(4)
	  , aFunction = __webpack_require__(9)
	  , SPECIES   = __webpack_require__(2)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(40)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(7);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(11)
	  , ITERATOR  = __webpack_require__(2)('iterator')
	  , Iterators = __webpack_require__(17);
	module.exports = __webpack_require__(5).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(13);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(3), 'Object', {defineProperty: __webpack_require__(8).f});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(32)
	  , global             = __webpack_require__(1)
	  , ctx                = __webpack_require__(6)
	  , classof            = __webpack_require__(11)
	  , $export            = __webpack_require__(13)
	  , isObject           = __webpack_require__(7)
	  , aFunction          = __webpack_require__(9)
	  , anInstance         = __webpack_require__(24)
	  , forOf              = __webpack_require__(25)
	  , speciesConstructor = __webpack_require__(39)
	  , task               = __webpack_require__(19).set
	  , microtask          = __webpack_require__(33)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(2)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(35)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(37)($Promise, PROMISE);
	__webpack_require__(36)(PROMISE);
	Wrapper = __webpack_require__(5)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(31)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;(function() {
	  "use strict";

	function immutableInit(config) {

	  // https://github.com/facebook/react/blob/v15.0.1/src/isomorphic/classic/element/ReactElement.js#L21
	  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element');
	  var REACT_ELEMENT_TYPE_FALLBACK = 0xeac7;

	  var globalConfig = {
	    use_static: false
	  };
	  if (isObject(config)) {
	      if (config.use_static !== undefined) {
	          globalConfig.use_static = Boolean(config.use_static);
	      }
	  }

	  function isObject(data) {
	    return (
	      typeof data === 'object' &&
	      !Array.isArray(data) &&
	      data !== null
	    );
	  }

	  function instantiateEmptyObject(obj) {
	      var prototype = Object.getPrototypeOf(obj);
	      if (!prototype) {
	          return {};
	      } else {
	          return Object.create(prototype);
	      }
	  }

	  function addPropertyTo(target, methodName, value) {
	    Object.defineProperty(target, methodName, {
	      enumerable: false,
	      configurable: false,
	      writable: false,
	      value: value
	    });
	  }

	  function banProperty(target, methodName) {
	    addPropertyTo(target, methodName, function() {
	      throw new ImmutableError("The " + methodName +
	        " method cannot be invoked on an Immutable data structure.");
	    });
	  }

	  var immutabilityTag = "__immutable_invariants_hold";

	  function addImmutabilityTag(target) {
	    addPropertyTo(target, immutabilityTag, true);
	  }

	  function isImmutable(target) {
	    if (typeof target === "object") {
	      return target === null || Boolean(
	        Object.getOwnPropertyDescriptor(target, immutabilityTag)
	      );
	    } else {
	      // In JavaScript, only objects are even potentially mutable.
	      // strings, numbers, null, and undefined are all naturally immutable.
	      return true;
	    }
	  }

	  function isEqual(a, b) {
	    // Avoid false positives due to (NaN !== NaN) evaluating to true
	    return (a === b || (a !== a && b !== b));
	  }

	  function isMergableObject(target) {
	    return target !== null && typeof target === "object" && !(Array.isArray(target)) && !(target instanceof Date);
	  }

	  var mutatingObjectMethods = [
	    "setPrototypeOf"
	  ];

	  var nonMutatingObjectMethods = [
	    "keys"
	  ];

	  var mutatingArrayMethods = mutatingObjectMethods.concat([
	    "push", "pop", "sort", "splice", "shift", "unshift", "reverse"
	  ]);

	  var nonMutatingArrayMethods = nonMutatingObjectMethods.concat([
	    "map", "filter", "slice", "concat", "reduce", "reduceRight"
	  ]);

	  var mutatingDateMethods = mutatingObjectMethods.concat([
	    "setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds",
	    "setTime", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes",
	    "setUTCMonth", "setUTCSeconds", "setYear"
	  ]);

	  function ImmutableError(message) {
	    var err       = new Error(message);
	    // TODO: Consider `Object.setPrototypeOf(err, ImmutableError);`
	    err.__proto__ = ImmutableError;

	    return err;
	  }
	  ImmutableError.prototype = Error.prototype;

	  function makeImmutable(obj, bannedMethods) {
	    // Tag it so we can quickly tell it's immutable later.
	    addImmutabilityTag(obj);

	    if (true) {
	      // Make all mutating methods throw exceptions.
	      for (var index in bannedMethods) {
	        if (bannedMethods.hasOwnProperty(index)) {
	          banProperty(obj, bannedMethods[index]);
	        }
	      }

	      // Freeze it and return it.
	      Object.freeze(obj);
	    }

	    return obj;
	  }

	  function makeMethodReturnImmutable(obj, methodName) {
	    var currentMethod = obj[methodName];

	    addPropertyTo(obj, methodName, function() {
	      return Immutable(currentMethod.apply(obj, arguments));
	    });
	  }

	  function arraySet(idx, value, config) {
	    var deep          = config && config.deep;

	    if (idx in this) {
	      if (deep && this[idx] !== value && isMergableObject(value) && isMergableObject(this[idx])) {
	        value = Immutable.merge(this[idx], value, {deep: true, mode: 'replace'});
	      }
	      if (isEqual(this[idx], value)) {
	        return this;
	      }
	    }

	    var mutable = asMutableArray.call(this);
	    mutable[idx] = Immutable(value);
	    return makeImmutableArray(mutable);
	  }

	  var immutableEmptyArray = Immutable([]);

	  function arraySetIn(pth, value, config) {
	    var head = pth[0];

	    if (pth.length === 1) {
	      return arraySet.call(this, head, value, config);
	    } else {
	      var tail = pth.slice(1);
	      var thisHead = this[head];
	      var newValue;

	      if (typeof(thisHead) === "object" && thisHead !== null) {
	        // Might (validly) be object or array
	        newValue = Immutable.setIn(thisHead, tail, value);
	      } else {
	        var nextHead = tail[0];
	        // If the next path part is a number, then we are setting into an array, else an object.
	        if (nextHead !== '' && isFinite(nextHead)) {
	          newValue = arraySetIn.call(immutableEmptyArray, tail, value);
	        } else {
	          newValue = objectSetIn.call(immutableEmptyObject, tail, value);
	        }
	      }

	      if (head in this && thisHead === newValue) {
	        return this;
	      }

	      var mutable = asMutableArray.call(this);
	      mutable[head] = newValue;
	      return makeImmutableArray(mutable);
	    }
	  }

	  function makeImmutableArray(array) {
	    // Don't change their implementations, but wrap these functions to make sure
	    // they always return an immutable value.
	    for (var index in nonMutatingArrayMethods) {
	      if (nonMutatingArrayMethods.hasOwnProperty(index)) {
	        var methodName = nonMutatingArrayMethods[index];
	        makeMethodReturnImmutable(array, methodName);
	      }
	    }

	    if (!globalConfig.use_static) {
	      addPropertyTo(array, "flatMap",  flatMap);
	      addPropertyTo(array, "asObject", asObject);
	      addPropertyTo(array, "asMutable", asMutableArray);
	      addPropertyTo(array, "set", arraySet);
	      addPropertyTo(array, "setIn", arraySetIn);
	      addPropertyTo(array, "update", update);
	      addPropertyTo(array, "updateIn", updateIn);
	    }

	    for(var i = 0, length = array.length; i < length; i++) {
	      array[i] = Immutable(array[i]);
	    }

	    return makeImmutable(array, mutatingArrayMethods);
	  }

	  function makeImmutableDate(date) {
	    if (!globalConfig.use_static) {
	      addPropertyTo(date, "asMutable", asMutableDate);
	    }

	    return makeImmutable(date, mutatingDateMethods);
	  }

	  function asMutableDate() {
	    return new Date(this.getTime());
	  }

	  /**
	   * Effectively performs a map() over the elements in the array, using the
	   * provided iterator, except that whenever the iterator returns an array, that
	   * array's elements are added to the final result instead of the array itself.
	   *
	   * @param {function} iterator - The iterator function that will be invoked on each element in the array. It will receive three arguments: the current value, the current index, and the current object.
	   */
	  function flatMap(iterator) {
	    // Calling .flatMap() with no arguments is a no-op. Don't bother cloning.
	    if (arguments.length === 0) {
	      return this;
	    }

	    var result = [],
	        length = this.length,
	        index;

	    for (index = 0; index < length; index++) {
	      var iteratorResult = iterator(this[index], index, this);

	      if (Array.isArray(iteratorResult)) {
	        // Concatenate Array results into the return value we're building up.
	        result.push.apply(result, iteratorResult);
	      } else {
	        // Handle non-Array results the same way map() does.
	        result.push(iteratorResult);
	      }
	    }

	    return makeImmutableArray(result);
	  }

	  /**
	   * Returns an Immutable copy of the object without the given keys included.
	   *
	   * @param {array} keysToRemove - A list of strings representing the keys to exclude in the return value. Instead of providing a single array, this method can also be called by passing multiple strings as separate arguments.
	   */
	  function without(remove) {
	    // Calling .without() with no arguments is a no-op. Don't bother cloning.
	    if (typeof remove === "undefined" && arguments.length === 0) {
	      return this;
	    }

	    if (typeof remove !== "function") {
	      // If we weren't given an array, use the arguments list.
	      var keysToRemoveArray = (Array.isArray(remove)) ?
	         remove.slice() : Array.prototype.slice.call(arguments);

	      // Convert numeric keys to strings since that's how they'll
	      // come from the enumeration of the object.
	      keysToRemoveArray.forEach(function(el, idx, arr) {
	        if(typeof(el) === "number") {
	          arr[idx] = el.toString();
	        }
	      });

	      remove = function(val, key) {
	        return keysToRemoveArray.indexOf(key) !== -1;
	      };
	    }

	    var result = instantiateEmptyObject(this);

	    for (var key in this) {
	      if (this.hasOwnProperty(key) && remove(this[key], key) === false) {
	        result[key] = this[key];
	      }
	    }

	    return makeImmutableObject(result);
	  }

	  function asMutableArray(opts) {
	    var result = [], i, length;

	    if(opts && opts.deep) {
	      for(i = 0, length = this.length; i < length; i++) {
	        result.push(asDeepMutable(this[i]));
	      }
	    } else {
	      for(i = 0, length = this.length; i < length; i++) {
	        result.push(this[i]);
	      }
	    }

	    return result;
	  }

	  /**
	   * Effectively performs a [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) over the elements in the array, expecting that the iterator function
	   * will return an array of two elements - the first representing a key, the other
	   * a value. Then returns an Immutable Object constructed of those keys and values.
	   *
	   * @param {function} iterator - A function which should return an array of two elements - the first representing the desired key, the other the desired value.
	   */
	  function asObject(iterator) {
	    // If no iterator was provided, assume the identity function
	    // (suggesting this array is already a list of key/value pairs.)
	    if (typeof iterator !== "function") {
	      iterator = function(value) { return value; };
	    }

	    var result = {},
	        length = this.length,
	        index;

	    for (index = 0; index < length; index++) {
	      var pair  = iterator(this[index], index, this),
	          key   = pair[0],
	          value = pair[1];

	      result[key] = value;
	    }

	    return makeImmutableObject(result);
	  }

	  function asDeepMutable(obj) {
	    if (
	      (!obj) ||
	      (typeof obj !== 'object') ||
	      (!Object.getOwnPropertyDescriptor(obj, immutabilityTag)) ||
	      (obj instanceof Date)
	    ) { return obj; }
	    return Immutable.asMutable(obj, {deep: true});
	  }

	  function quickCopy(src, dest) {
	    for (var key in src) {
	      if (Object.getOwnPropertyDescriptor(src, key)) {
	        dest[key] = src[key];
	      }
	    }

	    return dest;
	  }

	  /**
	   * Returns an Immutable Object containing the properties and values of both
	   * this object and the provided object, prioritizing the provided object's
	   * values whenever the same key is present in both objects.
	   *
	   * @param {object} other - The other object to merge. Multiple objects can be passed as an array. In such a case, the later an object appears in that list, the higher its priority.
	   * @param {object} config - Optional config object that contains settings. Supported settings are: {deep: true} for deep merge and {merger: mergerFunc} where mergerFunc is a function
	   *                          that takes a property from both objects. If anything is returned it overrides the normal merge behaviour.
	   */
	  function merge(other, config) {
	    // Calling .merge() with no arguments is a no-op. Don't bother cloning.
	    if (arguments.length === 0) {
	      return this;
	    }

	    if (other === null || (typeof other !== "object")) {
	      throw new TypeError("Immutable#merge can only be invoked with objects or arrays, not " + JSON.stringify(other));
	    }

	    var receivedArray = (Array.isArray(other)),
	        deep          = config && config.deep,
	        mode          = config && config.mode || 'merge',
	        merger        = config && config.merger,
	        result;

	    // Use the given key to extract a value from the given object, then place
	    // that value in the result object under the same key. If that resulted
	    // in a change from this object's value at that key, set anyChanges = true.
	    function addToResult(currentObj, otherObj, key) {
	      var immutableValue = Immutable(otherObj[key]);
	      var mergerResult = merger && merger(currentObj[key], immutableValue, config);
	      var currentValue = currentObj[key];

	      if ((result !== undefined) ||
	        (mergerResult !== undefined) ||
	        (!currentObj.hasOwnProperty(key)) ||
	        !isEqual(immutableValue, currentValue)) {

	        var newValue;

	        if (mergerResult) {
	          newValue = mergerResult;
	        } else if (deep && isMergableObject(currentValue) && isMergableObject(immutableValue)) {
	          newValue = Immutable.merge(currentValue, immutableValue, config);
	        } else {
	          newValue = immutableValue;
	        }

	        if (!isEqual(currentValue, newValue) || !currentObj.hasOwnProperty(key)) {
	          if (result === undefined) {
	            // Make a shallow clone of the current object.
	            result = quickCopy(currentObj, instantiateEmptyObject(currentObj));
	          }

	          result[key] = newValue;
	        }
	      }
	    }

	    function clearDroppedKeys(currentObj, otherObj) {
	      for (var key in currentObj) {
	        if (!otherObj.hasOwnProperty(key)) {
	          if (result === undefined) {
	            // Make a shallow clone of the current object.
	            result = quickCopy(currentObj, instantiateEmptyObject(currentObj));
	          }
	          delete result[key];
	        }
	      }
	    }

	    var key;

	    // Achieve prioritization by overriding previous values that get in the way.
	    if (!receivedArray) {
	      // The most common use case: just merge one object into the existing one.
	      for (key in other) {
	        if (Object.getOwnPropertyDescriptor(other, key)) {
	          addToResult(this, other, key);
	        }
	      }
	      if (mode === 'replace') {
	        clearDroppedKeys(this, other);
	      }
	    } else {
	      // We also accept an Array
	      for (var index = 0, length = other.length; index < length; index++) {
	        var otherFromArray = other[index];

	        for (key in otherFromArray) {
	          if (otherFromArray.hasOwnProperty(key)) {
	            addToResult(result !== undefined ? result : this, otherFromArray, key);
	          }
	        }
	      }
	    }

	    if (result === undefined) {
	      return this;
	    } else {
	      return makeImmutableObject(result);
	    }
	  }

	  function objectReplace(value, config) {
	    var deep          = config && config.deep;

	    // Calling .replace() with no arguments is a no-op. Don't bother cloning.
	    if (arguments.length === 0) {
	      return this;
	    }

	    if (value === null || typeof value !== "object") {
	      throw new TypeError("Immutable#replace can only be invoked with objects or arrays, not " + JSON.stringify(value));
	    }

	    return Immutable.merge(this, value, {deep: deep, mode: 'replace'});
	  }

	  var immutableEmptyObject = Immutable({});

	  function objectSetIn(path, value, config) {
	    if (!(path instanceof Array) || path.length === 0) {
	      throw new TypeError("The first argument to Immutable#setIn must be an array containing at least one \"key\" string.");
	    }

	    var head = path[0];
	    if (path.length === 1) {
	      return objectSet.call(this, head, value, config);
	    }

	    var tail = path.slice(1);
	    var newValue;
	    var thisHead = this[head];

	    if (this.hasOwnProperty(head) && typeof(thisHead) === "object" && thisHead !== null) {
	      // Might (validly) be object or array
	      newValue = Immutable.setIn(thisHead, tail, value);
	    } else {
	      newValue = objectSetIn.call(immutableEmptyObject, tail, value);
	    }

	    if (this.hasOwnProperty(head) && thisHead === newValue) {
	      return this;
	    }

	    var mutable = quickCopy(this, instantiateEmptyObject(this));
	    mutable[head] = newValue;
	    return makeImmutableObject(mutable);
	  }

	  function objectSet(property, value, config) {
	    var deep          = config && config.deep;

	    if (this.hasOwnProperty(property)) {
	      if (deep && this[property] !== value && isMergableObject(value) && isMergableObject(this[property])) {
	        value = Immutable.merge(this[property], value, {deep: true, mode: 'replace'});
	      }
	      if (isEqual(this[property], value)) {
	        return this;
	      }
	    }

	    var mutable = quickCopy(this, instantiateEmptyObject(this));
	    mutable[property] = Immutable(value);
	    return makeImmutableObject(mutable);
	  }

	  function update(property, updater) {
	    var restArgs = Array.prototype.slice.call(arguments, 2);
	    var initialVal = this[property];
	    return Immutable.set(this, property, updater.apply(initialVal, [initialVal].concat(restArgs)));
	  }

	  function getInPath(obj, path) {
	    /*jshint eqnull:true */
	    for (var i = 0, l = path.length; obj != null && i < l; i++) {
	      obj = obj[path[i]];
	    }

	    return (i && i == l) ? obj : undefined;
	  }

	  function updateIn(path, updater) {
	    var restArgs = Array.prototype.slice.call(arguments, 2);
	    var initialVal = getInPath(this, path);

	    return Immutable.setIn(this, path, updater.apply(initialVal, [initialVal].concat(restArgs)));
	  }

	  function asMutableObject(opts) {
	    var result = instantiateEmptyObject(this), key;

	    if(opts && opts.deep) {
	      for (key in this) {
	        if (this.hasOwnProperty(key)) {
	          result[key] = asDeepMutable(this[key]);
	        }
	      }
	    } else {
	      for (key in this) {
	        if (this.hasOwnProperty(key)) {
	          result[key] = this[key];
	        }
	      }
	    }

	    return result;
	  }

	  // Creates plain object to be used for cloning
	  function instantiatePlainObject() {
	    return {};
	  }

	  // Finalizes an object with immutable methods, freezes it, and returns it.
	  function makeImmutableObject(obj) {
	    if (!globalConfig.use_static) {
	      addPropertyTo(obj, "merge", merge);
	      addPropertyTo(obj, "replace", objectReplace);
	      addPropertyTo(obj, "without", without);
	      addPropertyTo(obj, "asMutable", asMutableObject);
	      addPropertyTo(obj, "set", objectSet);
	      addPropertyTo(obj, "setIn", objectSetIn);
	      addPropertyTo(obj, "update", update);
	      addPropertyTo(obj, "updateIn", updateIn);
	    }

	    return makeImmutable(obj, mutatingObjectMethods);
	  }

	  // Returns true if object is a valid react element
	  // https://github.com/facebook/react/blob/v15.0.1/src/isomorphic/classic/element/ReactElement.js#L326
	  function isReactElement(obj) {
	    return typeof obj === 'object' &&
	           obj !== null &&
	           (obj.$$typeof === REACT_ELEMENT_TYPE_FALLBACK || obj.$$typeof === REACT_ELEMENT_TYPE);
	  }

	  function isFileObject(obj) {
	    return typeof File !== 'undefined' &&
	           obj instanceof File;
	  }

	  function Immutable(obj, options, stackRemaining) {
	    if (isImmutable(obj) || isReactElement(obj) || isFileObject(obj)) {
	      return obj;
	    } else if (Array.isArray(obj)) {
	      return makeImmutableArray(obj.slice());
	    } else if (obj instanceof Date) {
	      return makeImmutableDate(new Date(obj.getTime()));
	    } else {
	      // Don't freeze the object we were given; make a clone and use that.
	      var prototype = options && options.prototype;
	      var instantiateEmptyObject =
	        (!prototype || prototype === Object.prototype) ?
	          instantiatePlainObject : (function() { return Object.create(prototype); });
	      var clone = instantiateEmptyObject();

	      if (true) {
	        /*jshint eqnull:true */
	        if (stackRemaining == null) {
	          stackRemaining = 64;
	        }
	        if (stackRemaining <= 0) {
	          throw new ImmutableError("Attempt to construct Immutable from a deeply nested object was detected." +
	            " Have you tried to wrap an object with circular references (e.g. React element)?" +
	            " See https://github.com/rtfeldman/seamless-immutable/wiki/Deeply-nested-object-was-detected for details.");
	        }
	        stackRemaining -= 1;
	      }

	      for (var key in obj) {
	        if (Object.getOwnPropertyDescriptor(obj, key)) {
	          clone[key] = Immutable(obj[key], undefined, stackRemaining);
	        }
	      }

	      return makeImmutableObject(clone);
	    }
	  }

	  // Wrapper to allow the use of object methods as static methods of Immutable.
	  function toStatic(fn) {
	    function staticWrapper() {
	      var args = [].slice.call(arguments);
	      var self = args.shift();
	      return fn.apply(self, args);
	    }

	    return staticWrapper;
	  }

	  // Wrapper to allow the use of object methods as static methods of Immutable.
	  // with the additional condition of choosing which function to call depending
	  // if argument is an array or an object.
	  function toStaticObjectOrArray(fnObject, fnArray) {
	    function staticWrapper() {
	      var args = [].slice.call(arguments);
	      var self = args.shift();
	      if (Array.isArray(self)) {
	          return fnArray.apply(self, args);
	      } else {
	          return fnObject.apply(self, args);
	      }
	    }

	    return staticWrapper;
	  }

	  // Wrapper to allow the use of object methods as static methods of Immutable.
	  // with the additional condition of choosing which function to call depending
	  // if argument is an array or an object or a date.
	  function toStaticObjectOrDateOrArray(fnObject, fnArray, fnDate) {
	    function staticWrapper() {
	      var args = [].slice.call(arguments);
	      var self = args.shift();
	      if (Array.isArray(self)) {
	          return fnArray.apply(self, args);
	      } else if (self instanceof Date) {
	          return fnDate.apply(self, args);
	      } else {
	          return fnObject.apply(self, args);
	      }
	    }

	    return staticWrapper;
	  }

	  // Export the library
	  Immutable.from           = Immutable;
	  Immutable.isImmutable    = isImmutable;
	  Immutable.ImmutableError = ImmutableError;
	  Immutable.merge          = toStatic(merge);
	  Immutable.replace        = toStatic(objectReplace);
	  Immutable.without        = toStatic(without);
	  Immutable.asMutable      = toStaticObjectOrDateOrArray(asMutableObject, asMutableArray, asMutableDate);
	  Immutable.set            = toStaticObjectOrArray(objectSet, arraySet);
	  Immutable.setIn          = toStaticObjectOrArray(objectSetIn, arraySetIn);
	  Immutable.update         = toStatic(update);
	  Immutable.updateIn       = toStatic(updateIn);
	  Immutable.flatMap        = toStatic(flatMap);
	  Immutable.asObject       = toStatic(asObject);
	  if (!globalConfig.use_static) {
	      Immutable.static = immutableInit({
	          use_static: true
	      });
	  }

	  Object.freeze(Immutable);

	  return Immutable;
	}

	  var Immutable = immutableInit();
	  /* istanbul ignore if */
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return Immutable;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module === "object") {
	    module.exports = Immutable;
	  } else if (typeof exports === "object") {
	    exports.Immutable = Immutable;
	  } else if (typeof window === "object") {
	    window.Immutable = Immutable;
	  } else if (typeof global === "object") {
	    global.Immutable = Immutable;
	  }
	})();


/***/ }
/******/ ])
});
;