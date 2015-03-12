//nth fibbonaci number

var a = 12,
	input = [];


function fib(n) {
	if(n<=1) {
		return n
	} else {
		return fib(n-1) + fib(n-2)
	}
}

console.log(fib(a));