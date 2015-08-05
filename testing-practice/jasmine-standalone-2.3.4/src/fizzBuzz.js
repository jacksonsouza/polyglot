console.log(isFizzBuzz(100));


function isFizzBuzz (i) {
	var str = "";

	if (i % 3 == 0) {
		str+= "Fizz";
	}
	
	if (i % 5 == 0) {
		str+= "Buzz";
	} 

	return str;
}