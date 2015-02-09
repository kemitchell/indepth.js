/* jshint mocha: true */
var setP = require('..').setWithParents;
var expect = require('chai').expect;

describe('setWithParents()', function() {
  beforeEach(function() {
    this.object = {
      array: [0, 1, 2, 3],
      object: {}
    };
  });

  it('throws for an empty array', function() {
    expect(function() {
      setP(this.object, [], 'test');
    }).to.throw(Error);
  });

  it('fills in parents as necessary', function() {
    setP(this.object, ['object', 'a', 1, 'b', 0], 'test');
    expect(Array.isArray(this.object.object.a[1].b))
      .to.be.true();
  });
});
