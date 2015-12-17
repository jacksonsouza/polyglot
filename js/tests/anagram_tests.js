var poly = require("../anagram");
var expect = require('chai').expect;

describe('Anagram: Simple', function(){
  it('should return an object of containing values that are anagrams of eachother', function(){
    var result = poly.anagram(['cat','dog','man','heelo','rats','sun','star','beach','god','hello','tsar']);

    var output =  { 
                    dog: [ 'god' ],
                    rats: [ 'star', 'tsar' ],
                    star: [ 'rats', 'tsar' ],
                    god: [ 'dog' ],
                    tsar: [ 'rats', 'star' ] 
                  }


    for (var key in result) {
      expect(result[key]).to.eql(output[key])
    }

    console.log(result)
  });
});