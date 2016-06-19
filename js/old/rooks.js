var dimensions = 4,
	poss = new Board(),
	solnCount = 0;
	
for(i=0; i<dimensions; i++){
	poss.availCol.push(i)
}

rookPlacement(poss);








function Board (size){
	this.availCol = [];
	this.grid = [];
}

//Main problem logic, recursive solution
function rookPlacement(b){
	//takes in board object
	var cols = b.availCol,
		grid = b.grid,
		level = [];

	if(grid.length == dimensions){
		solnCount++;
		return printBoard(b, solnCount);
	}

	//initialize level
	for (i=0; i<dimensions; i++){
		level.push(0);
	}

	cols.forEach(function(availible){

		//create a new board based on the parent board
		var newLevel = level.slice(),
			newBoard = new Board();

		newBoard.grid = deepClone(grid);
		newBoard.availCol = cols.slice();


		//at the availible col, splice out the 0 and put in a rook
		newLevel.splice(availible, 1, "x") 
		newBoard.grid.push(newLevel)

		//splice out the no longer availible index
		newBoard.availCol.splice(newBoard.availCol.indexOf(availible), 1)
		
		rookPlacement(newBoard);
	})

}

function printBoard(b, count){
	var grid = b.grid;
	console.log("SOLUTION "+ count)

	grid.forEach(function(level){
		console.log(level)
	})

	console.log("\n")
	return;
}

function deepClone(a) {
	var arr = a.map(function(lvl) {
    	return lvl.slice();
	});

	return arr
}
