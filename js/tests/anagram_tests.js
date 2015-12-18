const poly = require("../anagram"), 
      expect = require('chai').expect;

describe('Anagram: Simple', () => {
  it('should return an object of containing values that are anagrams of eachother', () => {
    
    const result = poly.anagram(['cat','dog','man','heelo','rats','sun','star','beach','god','hello','tsar']);
    const output =  { 
                    dog: [ 'god' ],
                    rats: [ 'star', 'tsar' ],
                    star: [ 'rats', 'tsar' ],
                    god: [ 'dog' ],
                    tsar: [ 'rats', 'star' ] 
                  }


    for (let key in result) {
      expect(result[key]).to.eql(output[key])
    }

    console.log(result)
  });
});