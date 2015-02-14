/* jshint mocha: true */
var del = require('..').del;
var expect = require('chai').expect;

describe('del()', function() {
  beforeEach(function() {
    this.object = {
      array: [0, 1, 2, 3],
      object: {a: 'original'}
    };
  });

  it('throws for an empty array', function() {
    expect(function() {
      del(this.object, []);
    }).to.throw(Error);
  });

  it('deletes nested array elements', function() {
    expect(del(this.object, ['array', 1]))
      .to.be.true();
    expect(this.object.array[1])
      .to.equal(2);
    expect(this.object.array.length)
      .to.equal(3);
  });

  it('deletes nested object properties', function() {
    expect(del(this.object, ['object', 'a']))
      .to.be.true();
    expect(this.object.object.a)
      .to.be.undefined();
  });

  it('throws for a bad path', function() {
    expect(function() {
      del(this.object, ['object', 'a', 'b']);
    }).to.throw(Error);
  });

  it('returns a provided fallback value', function() {
    var fun = function() {
      return del(this.object, ['object', 'a', 'b'], 'fallback');
    };
    expect(fun)
      .not.to.throw(Error);
    expect(fun())
      .to.equal('fallback');
  });
});
