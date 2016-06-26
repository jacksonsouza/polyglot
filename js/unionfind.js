"use strict";
var _ = require("lodash"),
	Promise = require("bluebird");

//Grid is an array of sites, each of which have the value of another site to which it is connected.
//Sites can be connected to themselves, and are, on a clean initialization.
exports.init = function(sites, percentConnected) {
	var grid = {
				"id": _.range(sites),
				"size": _.fill(Array(sites), 1)
			}

	_(grid.id).each(function(n){
		if (Math.random() * 1 < percentConnected) {
			join(grid, Math.round(Math.random() * (sites - 1)), n)
		}
	}).value()

	return Promise.resolve(grid)
}

//If we were to visualize the "grid" array, sites are joined in a tree like structure. When joining two sites, the larger tree is always on top (weighted union).
//Size is also manipulated accordingly by this function
function join(grid, one, two) {
	var rOne = root(grid, one),
		rTwo = root(grid, two);

	if(rOne == rTwo) {return Promise.resolve(grid)};

	if(grid.size[rTwo] > grid.size[rOne]) {
		grid.id[rOne] = rTwo
		grid.size[rTwo] += grid.size[rOne]
	} else {
		grid.id[rTwo] = rOne
		grid.size[rOne] += grid.size[rTwo]
	}

	return Promise.resolve(grid)

}

exports.join = join;

//Are the two sites connected by a root?
function connected(grid, one, two) {
	return root(grid, one) == root(grid, two)
}

exports.connected = connected;

//Trace the site back to its root
function root(grid, site) {
	while(grid.id[site] != site) {
		site = grid.id[site]
	}
	return site;
}
