//find reverse greatest common multiple of an array (common to divide down to)
// [12,6,24] = 2, where gcd of this array is 6
// lcm would be the smallest positive integer that is divisible by both a and b, 24 (common to multiply up to)


var input = [12,6,24]

function lcd(a) {

	a.sort(function(a,b){
		return a-b;
	})

	var largest = a[a.length-1],
		out = 0;

	for(i=largest; i>1; i--) {

		// console.log("___________")
		// console.log(i)
		// console.log("lcd = " + out)

		var allDivisible = true;

		a.forEach(function(entry) {
			if(entry % i != 0){
				// console.log("not clean = "+ entry + " / "+ i)
				allDivisible = false;
			} 
		})

		if(allDivisible){
			out = i; 
			//console.log("NEW LCD")
		}
	}
	return out
}

console.log(lcd(input));