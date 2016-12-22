/**
 * @param {Object} obj
 * @param {String} event
 * @param {Function} fn
 */
export function eventsOn(obj, event, fn) {
  obj._internalEvents = obj._internalEvents || {};
  (obj._internalEvents[event] = obj._internalEvents[event] || []).push(fn);
  return obj;
}

/**
 * @param {Object} obj
 * @param {String} event
 * @param {Function} fn
 */
export function eventsOff(obj, event, fn) {
  obj._internalEvents = obj._internalEvents || {};

  if (event === undefined) {
    obj._internalEvents = {};
    return obj;
  }

  const callbacks = obj._internalEvents[event];
  if (!callbacks) {
    return obj;
  }

  if (fn === undefined) {
    delete obj._internalEvents[event];
    return obj;
  }

  for (let i = 0; i < callbacks.length; i++) {
    if (callbacks[i] === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  return obj;
}

/**
 * @param {Object} obj
 * @param {String} event
 * @param {Array} args
 */
export function eventsTrigger(obj, event, args) {
  obj._internalEvents = obj._internalEvents || {};

  const callbacks = obj._internalEvents[event];
  if (callbacks) {
    for (let i = 0; i < callbacks.length; i++) {
      callbacks[i].apply(obj, args);
    }
  }

  return obj;
}

/**
 * Public APIs
 *
 * @export
 */
const Events = {};

/**
 * @param {String} event
 * @param {Function} fn
 */
Events.on = function(event, fn) {
  return eventsOn(this, event, fn);
};

/**
 * @param {String} event
 */
Events.off = function(event) {
  return eventsOff(this, event);
};

/**
 * @param {String} event
 * @param {Array} args
 */
Events.trigger = function(event, ...args) {
  return eventsTrigger(this, event, args);
};

export default Events;
