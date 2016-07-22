"use strict";

var _ = require("lodash"),
    Promise = require("bluebird");

/* Enable to supress logs */
//var console = {}
//console.log = function(){}

var Node = function(k, v, ln, rn) {
  this.key = k
  this.value = v
  this.left = ln
  this.right = rn
  this.size = 0
}

exports.Node = Node

//Binary search tree ordered by value
var Tree = function(node) {
  this.root = node
}

//Initialize a randomly constructed Binary Search Tree
exports.init = function(size) {
  var tree = new Tree(new Node("root", 0, null, null));

    for(var i = 0; i < size; i++) {
      var v = Math.floor(Math.random() * (size*100)) + 1
      tree.root = put(tree.root, new Node(guid().slice(0,6), v, null, null))
    }

  return tree;
}

//Safely read size
function size(node) {
  if (node == null) return 0;
  else return node.size;
}

exports.size = size;

//Insert or update a node in a tree, set size
function put(root, node) {
  //Exit when null link is hit (leaf or node placed already)
  if(_.isNull(root)) { return node }

  //Traverse tree by values, updating links with inclusion of new node
  if (node.value < root.value)  {
    root.left = put(root.left, node)
  } else if (node.value > root.value) {
    root.right = put(root.right, node)
  } else {
    root.value = node.value
  }

  //Update sizes and restore links
  root.size = 1 + size(root.left) + size(root.right);
  return root
}

exports.put = put;

//Get a node with the specified value from the tree
function get(root, value) {
  var x = _.cloneDeep(root)

  //Traverse tree by values until the specified value is reached
  while(!_.isNull(x)) {
    if( value > x.value ) {
      x = x.right
    } else if( value < x.value ) {
      x = x.left
    } else {
      return x
    }
  }
}

exports.get = get;

//Breadth-first traversal
function breadth(tree) {
  var q = [],
      result = [];

  //Add all children to the queue
  q.push(tree.root)

  while(!_.isEmpty(q)) {
    //Pop node off and print
    var node = q.shift()
    result.push({"key": node.key, "value": node.value, "children": [_.get(node, "left.value", "null"), _.get(node, "right.value", "null")]})

    //Push children on the queue
    if(!_.isNull(node.left)) { q.push(node.left) }
    if(!_.isNull(node.right)) { q.push(node.right) }
  }

  return Promise.resolve(result)
}

exports.breadth = breadth;

var trav = [];
exports.traverse = function(tree, fn) {
  trav = [];
  fn(tree.root);
  console.log(trav)
  return trav;
}

//Sorted order: Left, parent, next left, next parent, rights...
function inorder(node){
    if(!_.isNull(node.left)) inorder(node.left)
    trav.push({"key": node.key, "value": node.value, "children": [_.get(node, "left.value", "null"), _.get(node, "right.value", "null")]})
    if(!_.isNull(node.right)) inorder(node.right)
}

exports.inorder = inorder

//All leftmost nodes, all rightmost nodes (back up)
function postorder(node){
  if(!_.isNull(node.left)) postorder(node.left)
  if(!_.isNull(node.right)) postorder(node.right)
  trav.push({"key": node.key, "value": node.value, "children": [_.get(node, "left.value", "null"), _.get(node, "right.value", "null")]})
}

exports.postorder = postorder

//Parents, then children (trace wall)
function preorder(node){
    trav.push({"key": node.key, "value": node.value, "children": [_.get(node, "left.value", "null"), _.get(node, "right.value", "null")]})
    if(!_.isNull(node.left)) preorder(node.left)
    if(!_.isNull(node.right)) preorder(node.right)
}

exports.preorder = preorder

//Hibbard Deletion: Remove a node with the specified value from the tree (from the root)
function remove(root, value) {
  //Exits and link updating/traversal is similar to "put"
  if (root == null) return null;

  if      (value < root.value) root.left  = remove(root.left,  value);
  else if (value > root.value) root.right = remove(root.right, value);
  else {

    //Cases: 0, 1 or multiple children
    //0: Drop parent link
    //1: Linked list style, replace parent
    //2: Find successor of t, delete minimum in t's right subtree, x in t's original spot

    if (root.right == null) return root.left;
    if (root.left  == null) return root.right;
    var t = _.cloneDeep(root);
    root = min(t.right);
    root.right = deleteMin(t.right);
    root.left = t.left;
  }
  root.size = size(root.left) + size(root.right) + 1;
  return root;
}

exports.remove = remove

//Finds minumum from given node
function min(node){
  if (node.left == null) return node;
  else return min(node.left);
}

//Deletes the leftmost leaf from the specified node, update sizes
function deleteMin(node) {
  if (node.left == null) return node.right;
  node.left = deleteMin(node.left);
  node.size = size(node.left) + size(node.right) + 1;
  return node;
}


exports.binarySearch = function(arr, value) {
  var lo = 0,
      hi = arr.length - 1;

  while(lo <= hi) {
    //Moves pointer left or right to progressively halved sections based on value
    var mid = Math.floor(lo + (hi - lo) / 2);

    console.log("On value "+ arr[mid] + " of section ", arr.slice(lo,hi) + " in", arr + "\n")

    if(value < arr[mid]) {
      hi = mid - 1
    } else if (value > arr[mid]) {
      lo = mid + 1
    } else {
      return Promise.resolve(mid);
    }
  }
}








function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
