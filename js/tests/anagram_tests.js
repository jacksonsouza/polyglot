var poly = require("../anagram");

var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

describe('Anagram', function(){
	it('should return values that are anagrams of eachother', function(){
		poly.anagram(['cat','dog','man','heelo','rats','sun','star','beach','god','hello','tsar']).should.eql([ 'dog', 'god', 'rats', 'star', 'tsar' ])
	});
});