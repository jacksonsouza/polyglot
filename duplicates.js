
//generating random input
var input = [],
	sampleSize = 100000, //unique
	randomDupe = Math.floor(Math.random() * (sampleSize - 1 + 1)) + 1,
	emailLen = 10;

for (var i = 1; i <= sampleSize; i++) { //potentially 100,000 non-unique
	var email = Math.random().toString(36).substr(2, emailLen); //random string
    input.push(email);

    if (randomDupe % i != 0) { //attempting to push a duplicate at a random (enough) time
    	input.push(email); //should push a random amount of duplicates, insterting them in random places within the array
    }
}

//begin function to find & remove duplicates
function duplicates (arr) {
	var map = {},
		unique = [];

	arr.forEach(function(entry) { 
		if (entry in map) {
			map[entry] = map[entry] + 1 ;
		} else {
			map[entry] = 0;
			unique.push(entry);
		} 
	});
	return unique;
}

console.log(duplicates(input));