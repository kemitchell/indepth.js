indepth
=======

get, set, and delete nested values with arrays of keys and indices

[![npm version](https://img.shields.io/npm/v/indepth.svg)](https://www.npmjs.com/package/indepth)
[![build status](https://img.shields.io/travis/kemitchell/indepth.js.svg)](http://travis-ci.org/kemitchell/indepth.js)

```javascript
var indepth = require('indepth');

indepth.get(object, ['string key', 1, 'another', 3]);
// throws if any get operation fails

indepth.get(object, ['string key', 1, 'another', 3], 'failed');
// returns 'failed' if any get operation fails

indepth.set(object, ['string key', 1], 'new value');
// throws if any set operation fails

indepth.set(object, ['string key', 1], 'new value', null);
// returns null if any set operation fails

var anObject = {};
indepth.setp(anObject, ['string', 0, 'another'], 'new value');
// anObject is now {string:[{another: 'new value'}]}

indepth.setp === indepth.setWithParents;
// true

var objectWithKeys = {a: 'some value', b: 'other value'};
indepth.del(objectWithKeys, ['a']);
anObject.a;
// now undefined

var objectWithArray = {a: [0, 1, 2]};
indepth.del(objectWithArray, ['a', 1]);
anObject.a;
// [0, 2]

indepth.insert(objectWithArray, ['a', 0], 'X');
anObject.a;
// ['X', 0, 2]
```
