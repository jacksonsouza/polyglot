//populate input array
var input = [];

for (var i = 1; i <= 1000; i++) {
   input.push(i);
}


function isPrime(x){
	if (x < 4) { //excludes initial primes, greater than 1
		return x > 0
	} else if (x % 2 == 0 || x % 3 == 0) { //checks easy divisibility by initially excluded primes
		return false
	} else { //checks divisibility against primes by pattern: start @ 5, 5+2, 5+6, 11+2, 11+6
		for (i = 5; i * i <= x; i += 6) {
			if (x % i == 0 || x % (i + 2) == 0) {
				return false
			}
		}
	}
	return true;
}


function sortPrimes(numbers) {
	var primes = [];

	numbers.forEach(function(x) {
		if (isPrime(x)) {primes.push(x)};
	});

	return primes
}

console.log(sortPrimes(input));
