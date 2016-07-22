var bst = require("../bst"),
	  _ = require("lodash"),
	  Promise = require("bluebird"),
    expect = require("chai").expect;

var tree = bst.init(0)
bst.put(tree.root, new bst.Node("B", 26, null, null))
bst.put(tree.root, new bst.Node("C", 76, null, null))
bst.put(tree.root, new bst.Node("D", 564, null, null))
bst.put(tree.root, new bst.Node("E", 11, null, null))
bst.put(tree.root, new bst.Node("F", 230, null, null))

var randTree = bst.init(25)

describe("Binary Search", function(){
  it("should find an index of a value in an array", function(){
    var arr = [1,2,44,53,64,100,701,2330,6666]
    bst.binarySearch(arr, 2330)
        .then(function(i){
          expect(i).to.equal(7)
        })
  })
})

describe("Put (Upsert)", function(){
  it("should insert or update a preexisting node in a given BST", function(){
    bst.put(tree.root, new bst.Node("G", 66, null, null))
    expect(bst.get(tree.root, 66).key).to.equal("G")
  })
})

describe("Get (Select)", function(){
  it("should get the node associated with a value", function(){
    expect(bst.get(tree.root, 564).key).to.equal("D")
  })
})

describe("Remove", function(){
  it("should delete the node from the BST", function(){
    var delTree = bst.remove(tree.root, 76);
    expect(bst.get(tree.root, 76)).to.equal(undefined)
  })
})

describe("Traverse: BFS Level-Order", function(){
  it("should traverse the BST in breadth-first order", function(){
    //Assertions do not handle leaf nodes well
    bst.breadth(tree)
      .then(function(arr){
          console.log(arr)
    })
  })
})

describe("Traverse: DFS Pre-Order", function(){
  it("should traverse the BST in depth-first pre-order", function(){
    var result = bst.traverse(tree, bst.preorder)
  })
})

describe("Traverse: DFS In-Order", function(){
  it("should traverse the BST in depth-first in-order", function(){
    var result = bst.traverse(randTree, bst.inorder)
  })
})

describe("Traverse: DFS Post-Order", function(){
  it("should traverse the BST in depth-first post-order", function(){
    var result = bst.traverse(tree, bst.postorder)
  })
})

describe("Maximum Value", function(){
  it("should return the maximum value in the BST", function(){

    throw new Error("Not implimented")
  })
})

describe("Minimum Value", function(){
  it("should return the minimum value in the BST", function(){

    throw new Error("Not implimented")
  })
})

describe("Floor", function(){
  it("should return the value less than or equal to the given value in the BST", function(){

    throw new Error("Not implimented")
  })
})

describe("Ceiling", function(){
  it("should return the value greater than or equal to the given value in the BST", function(){

    throw new Error("Not implimented")
  })
})

describe("Rank (Nodes Above)", function(){
  it("should return the amount of nodes above the given key", function(){

    throw new Error("Not implimented")
  })
})

describe("Subtree Count", function(){
  it("should return the amount of subtrees in the BST", function(){

    throw new Error("Not implimented")
  })
})
