/* jshint mocha: true */
var set = require('..').set;
var expect = require('chai').expect;

describe('set()', function() {
  beforeEach(function() {
    this.object = {
      array: [0, 1, 2, 3],
      object: {}
    };
  });

  it('throws for an empty array', function() {
    expect(function() {
      set(this.object, [], 'test');
    }).to.throw(Error);
  });

  it('sets nested array elements', function() {
    expect(set(this.object, ['array', 1], 'test'))
      .to.be.true();
    expect(this.object.array[1])
      .to.equal('test');
  });

  it('sets nested object properties', function() {
    expect(set(this.object, ['object', 'a'], 'test'))
      .to.be.true();
    expect(this.object.object.a)
      .to.equal('test');
  });

  it('throws for a bad path', function() {
    expect(function() {
      set(this.object, ['object', 'a', 'b'], 'test');
    }).to.throw(Error);
  });

  it('returns a provided fallback value', function() {
    var fun = function() {
      return set(this.object, ['object', 'a', 'b'], 'test', 'fallback');
    };
    expect(fun).not.to.throw(Error);
    expect(fun())
      .to.equal('fallback');
  });
});
