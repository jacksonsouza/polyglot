function Board (size){
	this.availCol = [];
	this.grid = [];
}




var dimensions = 3,
	poss = new Board();
	
for(i=0; i<dimensions; i++){
	poss.availCol.push(i)
}

console.log(poss);
//rookPlacement(poss);




function rookPlacement(b){
	//takes in board object
	var cols = b.availCol,
		grid = b.grid,
		level = [];

	//returns printBoard() when there are no availible columns left
	if(cols.length < 1){
		return printBoard(b);
	}

	//initialize level
	for (i=0; i<dimensions; i++){
		level.push(0);
	}

	cols.forEach(function(availible){
		// adds level with rook in that column space
		// slice that availible col out
		// returns rookPlacement(board)

	})

}

function printBoard(b){
	var grid = b.grid;

	grid.forEach(function(level){
		console.log(level)
	})

	return;
}
