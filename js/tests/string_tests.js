var string = require("../string"),
	  _ = require("lodash"),
	  Promise = require("bluebird"),
    expect = require("chai").expect;

describe("Anagrams", function(){
  it("returns anagrams, grouped by phrase with associated anagrams.", function(){
    var data = ["eleven plus two", "twelve plus one", "jackson is cool"]
    string.anagrams(data)
      .then(function(a) {
        console.log(a)
        expect(a).to.eql({
          "eleven plus two": ["twelve plus one"],
          "twelve plus one": ["eleven plus two"],
          "jackson is cool": []
        })
      })
 })
})
