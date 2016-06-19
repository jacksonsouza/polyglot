// DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, same like you see in the newspaper.

// But for a change lets do that for each and every word of the given String. Your task is to capitalize very word that has length greater than 2, leaving smaller words as they are.

// dropCap('apple') => "Apple"
// dropCap('apple of banana'); => "Apple of Banana"
// Note: you will be provided atleast one word and should take string as input and return string as output.


var input = process.argv[2];

console.log(dropcaps(input));



function dropcaps(str) {
	var sentance = str.split(" "),
		senLength = sentance.length;

	for (var i=0; i < senLength; i++) {
		var word = sentance[i],
			letters = word.split("");

		if (word.length > 2) {
			letters[0] = letters[0].toUpperCase();
			sentance[i] = letters.join("")
		}
	}
	return sentance.join(" ");
}