var util = require('util'); // for preliminary tree printing


function Node(d) {
	this.data = d
	this.left = null;
	this.right = null;
}

function BinaryTree(headVal) {
	this.head = new Node(headVal);

	this.insert = function(leaf, root) {
		var root = root,
			leaf = leaf;

		if(leaf.data > root.data) {
			if(root.right == null) {return root.right = leaf}
			this.insert(new Node(leaf.data), root.right);
		} else if (leaf.data < root.data) {
			if(root.left == null) {return root.left = leaf}
			this.insert(new Node(leaf.data), root.left);
		} 

	};
}

var input = []
for (i=1; i<=7; i++) { //populate array
	input.push(i);
}

var median = Math.floor(input.length/2); //find middle value to being BT
input.splice(median - 1 , 1); //delete middle value from input array

console.log(input)
var bt = new BinaryTree(median);

for (i=0; i<input.length; i++) { //insert each item in array
	bt.insert(new Node(input[i]), bt.head)
}

console.log(util.inspect(bt, {showHidden: false, depth: null}));