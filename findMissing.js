
var shuffled = [],
	regular = [];


for (var i = 1; i <= 100; i++) {
   shuffled.push(i);
}

regular = shuffled.slice()
shuffled = shuffleRemove(shuffled);
console.log(findMissing (regular, shuffled));



function findMissing (a, b) {
	var shuff = []
		reg = [],
		count = 0;

	a.sort(function(x, y){return x-y});
	b.sort(function(x, y){return x-y});

	//find which is the shuffled array
	if (a.length > b.length) {
		reg = b.slice(); 
		shuff = a.slice(); 
	} else {
		shuff = a.slice(); 
		reg = b.slice();
	}

	reg.forEach(function(inReg) {
		if (shuff[count] == inReg) {count = count + 1}
	});

	return count + 1;
}



function shuffleRemove(array) {
	console.log("REMOVED:  " + array.splice((Math.floor(Math.random() * (array.length)) + 1), 1))

    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}