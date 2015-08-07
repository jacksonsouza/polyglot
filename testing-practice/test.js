var assert = require("assert"),
	sort = require("./nthCharSort.js"),
	should = require('chai').should();

describe('Array', function() {
  describe('#sortIt()', function () {
    it('nthCharSort should return the simple unsorted list in alphabetical order', function () {
   		sort.sortIt("apple, banana, orange", 1).should.eql(['banana','apple','orange'])
    });
  });
});