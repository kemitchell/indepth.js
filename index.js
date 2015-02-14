exports.get = function get(object, keys, onFailure) {
  var length = keys.length;
  var firstKey = keys[0];
  if (length === 0) {
    throw new Error('Empty keys array');
  } else {
    if (firstKey in object) {
      return length === 1 ?
        object[firstKey] :
        get(object[firstKey], keys.slice(1), onFailure);
    } else {
      if (onFailure) {
        return onFailure;
      } else {
        throw new Error('No such property');
      }
    }
  }
};

exports.set = function set(object, keys, value, onFailure) {
  var length = keys.length;
  if (length === 0) {
    throw new Error('Empty keys array');
  } else {
    try {
      var firstKey = keys[0];
      if (length === 1) {
        object[firstKey] = value;
        return true;
      } else {
        return set(object[firstKey], keys.slice(1), value, onFailure);
      }
    } catch (e) {
      if (onFailure) {
        return onFailure;
      } else {
        throw e;
      }
    }
  }
};

exports.setWithParents = function setP(object, keys, value) {
  var length = keys.length;
  if (length === 0) {
    throw new Error('Empty keys array');
  } else {
    var firstKey = keys[0];
    if (length === 1) {
      object[firstKey] = value;
    } else {
      var nextKey = keys[1];
      if (!(firstKey in object)) {
        object[firstKey] = typeof nextKey === 'number' ? [] : {};
      }
      return setP(object[firstKey], keys.slice(1), value);
    }
  }
};

exports.setp = exports.setWithParents;

exports.del = function set(object, keys, onFailure) {
  var length = keys.length;
  if (length === 0) {
    throw new Error('Empty keys array');
  } else {
    try {
      var firstKey = keys[0];
      if (length === 1) {
        if (Array.isArray(object)) {
          object.splice(firstKey, 1);
        } else {
          delete object[firstKey];
        }
        return true;
      } else {
        return set(object[firstKey], keys.slice(1), onFailure);
      }
    } catch (e) {
      if (onFailure) {
        return onFailure;
      } else {
        throw e;
      }
    }
  }
};

exports.version = '0.1.2';
