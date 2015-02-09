/* jshint mocha: true */
var get = require('..').get;
var expect = require('chai').expect;

describe('get()', function() {
  it('throws for an empty array', function() {
    expect(function() {
      get({}, []);
    }).to.throw(Error);
  });

  it('returns nested properties', function() {
    expect(get({a: 1}, ['a']))
      .to.equal(1);
  });

  it('returns deeply nested properties', function() {
    expect(get({a: {b: 1}}, ['a', 'b']))
      .to.equal(1);
  });

  it('returns properties nested in arrays', function() {
    expect(get({a: {b: [1]}}, ['a', 'b', 0]))
      .to.equal(1);
  });

  it('throws when a property is not found', function() {
    expect(function() {
      get({}, ['a']);
    }).to.throw('No such property');
  });

  it('returns a provided fallback value', function() {
    expect(get({}, ['a'], 1))
      .to.equal(1);
  });
});
