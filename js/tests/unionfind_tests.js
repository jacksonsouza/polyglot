var uf = require("../unionfind"),
	_ = require("lodash"),
	Promise = require("bluebird"),
    expect = require("chai").expect;

describe("Union Find: Populate", function(){
  it("should have all requisite nodes and connections", function(){
  	//uf.init(25, .75) initializes the array "grid" with 25 sites and 75% random connections

  	uf.init(25, 0)
  		.then(function(grid){
  			expect(grid.id[4]).to.equal(4)
  		})
  })
})

describe("Union Find: Join [Union]", function(){
  it("should join sites", function(){
	uf.init(25, 0)
		.then(function(clean) {
			uf.join(clean, 1, 3)
			return uf.join(clean, 3, 5)
		})
		.then(function(result){
			expect(result.size[1]).to.equal(3)
		})
  })
})

describe("Union Find: Connected [Find]", function(){
	it("should determine if sites are connected to eachother", function(){
		uf.init(25, 0)
			.then(function(clean) {
				uf.join(clean, 1, 3)
				return uf.join(clean, 3, 5)
			})
			.then(function(result){
				expect(uf.connected(result, 1, 5)).to.equal(true)
			})
	})
})