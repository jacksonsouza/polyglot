//Given array & k-sum
var k = 51;
var input = [];

for (var i = 1; i <= 1000; i++) {
   input.push(i);
}

//From 1..10, and a sum of 7, we should expect 1 & 6, 2 & 5, 3 & 4

function pairsums (arr, sum) {

	var output = [];

	arr.sort(function(a, b) {// supplied compare function from greatest to least
	  return a - b;
	})

	if (arr.length < 2) {
		return
	} else {
		var left = arr[0],
			right = arr.length - 1;

		for (i=0; i < arr.length - 1 ; i++) {

			console.log(left + "  " + right);

			if (left + right == sum) {
				console.log("sum:  " + left + "  " + right);
				output.push([left, right]);
				left++;
			} else {
				right--;
			}
		}
	}

	return output;

}

console.log(pairsums(input, k))