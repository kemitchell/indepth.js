/* jshint mocha: true */
var insert = require('..').insert;
var expect = require('chai').expect;

describe('insert()', function() {
  beforeEach(function() {
    this.object = {
      array: [0, 1, 2, 3],
      object: {a: 'original'}
    };
  });

  it('throws for an empty array', function() {
    expect(function() {
      insert(this.object, []);
    }).to.throw(Error);
  });

  it('inserts nested array elements', function() {
    expect(insert(this.object, ['array', 0], 'X'))
      .to.be.true();
    expect(this.object.array)
      .to.eql(['X', 0, 1, 2, 3]);
  });

  it('inserts nested object properties', function() {
    expect(insert(this.object, ['object', 'a'], 'X'))
      .to.be.true();
    expect(this.object.object.a)
      .to.equal('X');
  });

  it('throws for a bad path', function() {
    expect(function() {
      insert(this.object, ['object', 'a', 'b']);
    }).to.throw(Error);
  });

  it('returns a provided fallback value', function() {
    var fun = function() {
      return insert(this.object, ['object', 'a', 'b'], 'X', 'fallback');
    };
    expect(fun)
      .not.to.throw(Error);
    expect(fun())
      .to.equal('fallback');
  });
});
