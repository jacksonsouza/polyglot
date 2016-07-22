var graph = require("../graph"),
	  _ = require("lodash"),
	  Promise = require("bluebird"),
    expect = require("chai").expect;

var tinyGraph;

describe("Init via Input Stream", function(){
  it("should generate a graph from an appropriately formatted text file", function(){
    graph.init(new graph.Graph(0), "../data/graph.txt", function(g){
      tinyGraph = g;
      console.log("GRAPH OBJECT:\n", g)
      console.log("ADJACENCIES:")
      return graph.stringify(g);
    })
  })
})

describe("Put/Add Edge", function(){
  it("should add an edge to the graph", function(){

    throw new Error("Not implimented")
  })
})

describe("Get/Adjacencies", function(){
  it("should get a vertex from the graph, including all adjacent verticies", function(){

    throw new Error("Not implimented")
  })
})


describe("Path by DFS", function(){
  it("should enumerate the path between two verticies", function(){
    graph.dfsPath(tinyGraph, 0, function(path){
      return console.log(path)
    })
  })
})

describe("Path by BFS", function(){
  it("should enumerate the (shortest) path between two verticies", function(){
    graph.bfsPath(tinyGraph, 0, function(path){
      return console.log(path)
    })
  })
})

describe("Connectivity", function(){
  it("enumerates connected components & return if the two verticies are connected by an edge in the graph", function(){
    console.log(graph.connected(tinyGraph, 0, 5))
  })
})

