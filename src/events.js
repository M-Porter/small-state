/**
 *
 */
export function eventsOn(obj, event, fn) {
  obj._internalEvents = obj._internalEvents || {};
  (obj._internalEvents[event] = obj._internalEvents[event] || []).push(fn);
  return obj;
}

/**
 *
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
 *
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
 * @export
 */
const Events = {};

Events.on = function(event, fn) {
  return eventsOn(this, event, fn);
};

Events.off = function(event) {
  return eventsOff(this, event);
};

Events.trigger = function(event, ...args) {
  return eventsTrigger(this, event, args);
};

export default Events;
