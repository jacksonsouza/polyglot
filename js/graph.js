var _ = require("lodash"),
    async = require("async");

var Graph = function(verticies, edges) {
  this.v = verticies,
  this.e = edges,
  this.adj = [];
}

exports.Graph = Graph

//Estabilishes size, populates adjacency list and puts verticies/edges from file
exports.init = function(graph, file, cb) {
  var lr = require('readline').createInterface({
    input: require('fs').createReadStream(file)
  });

  var lineNumber = 0;
  lr.on("line", function(line){
    if(lineNumber == 0) {
      graph.v = line

      for(var i = 0; i < graph.v; i++) {
        graph.adj[i] = []
      }
    } else if(lineNumber == 1) {
      graph.e = line;
    } else {
      var split = line.split(" ")
      put(graph, split[0], split[1])
    }
    lineNumber++;
  })

  lr.on("close", function(){
    return cb(graph)
  })
}

//Prints out all edges in the graph
exports.stringify = function(graph) {
  for(var v = 0; v < graph.v; v++) {
    _.forEach(adj(graph, v), function(n){
      return console.log(v + "-" + n)
    })
  }
  return;
}

//Adds an edge to the graph
function put (graph, v, w) {
  graph.adj[v].unshift(w)
  return graph.adj[w].unshift(v)
}

exports.put = put;

//Returns adjacent verticies for the given vertex
function adj (graph, v) {
  return graph.adj[v]
}

exports.adj = adj

//Search for a path to the vertex in a graph via breadth-first search
exports.bfsPath = function(graph, vertex, cb) {
  //Tracking current path (edges to/from) & visited against amount of verticies
  var marked = [],
      edgeTo = [];

  return async.series([
      function(callback) {
        callback(null, search());
      }],
      function(err, results) {
        //Print paths from each vertex in graph
        for(var i = 0; i < graph.v; i++) {
          console.log(vertex + " to " + i + ": ")
          var p = [];
          _.forEach(pathTo(i), function(n){
            p.push(n)
          })
          console.log(p.join("-"), "\n __")
        }
        return cb(results[0])
      });

  //Visit vertexes & mark in horizontal swathes
  function search() {
    var q = [];
    q.push(vertex)
      marked[vertex] = true;
    while(q.length != 0) {
      var v = q.shift()
        _.forEach(adj(graph, v), function(n){
          if(!marked[n]) {
            q.push(n)
              marked[n] = true
              edgeTo[n] = v
          }
        })
    }
  }

  //BFS gets the shortest path
  //Get path from argument to particular vertex
  function pathTo(v) {
    if(!marked[v]) return null;
    var path = [];
    // While not vertex, proceed to next stored edge
    for (var x = v; x != vertex; x = edgeTo[x]) {
      path.unshift(x)
    }
    path.unshift(vertex)
    return path;
  }

}

//Search for a path to the vertex in a graph via depth-first search
exports.dfsPath = function(graph, vertex, cb) {
  //Tracking current path (edges to/from) & visited against amount of verticies
  var marked = [],
  edgeTo = [];

  return async.series([
      function(callback) {
        callback(null, search(graph, vertex));
      }],
      function(err, results) {
        //Print paths from each vertex in graph
        for(var i = 0; i < graph.v; i++) {
          console.log(vertex + " to " + i + ": ")
          var p = [];
          _.forEach(pathTo(i), function(n){
            p.push(n)
          })
          console.log(p.join("-"), "\n __")
        }
        return cb(results[0])
      });

  //DFS calculating paths for later read, actual "search"
  function search(g, v) {
    marked[v] = true;
    _.forEach(adj(g, v), function(n){
      //If not visited, proceed to next adjacent node(s) & store edges
      if(!marked[n]) {
        edgeTo[n] = v
        search(g, n)
      }
    })
  }

  //Get path from argument to particular vertex
  function pathTo(v) {
    if(!marked[v]) return null;
    var path = [];
    // While not vertex, proceed to next stored edge
    for (var x = v; x != vertex; x = edgeTo[x]) {
      path.unshift(x)
    }
    path.unshift(vertex)
    return path;
  }
}

exports.connected = function(graph, vone, vtwo) {
  var marked = [],
      id = [],
      count = 0;

  for(var v = 0; v < graph.v; v++) {
    if(!marked[v]) {
      search(graph, v);
      count++;
    }
  }

  return id[vone] == id[vtwo];

  //DFS calculating paths for later read, actual "search"
  function search(g, v) {
    marked[v] = true;
    //Modification to regular dfs: track "id" of connected component
    id[v] = count;
    _.forEach(adj(g, v), function(n){
      //If not visited, proceed to next adjacent node(s) & store edges
      if(!marked[n]) {
        search(g, n)
      }
    })
  }
}








