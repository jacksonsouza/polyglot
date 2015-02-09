//traditional
for (i=1; i<=100; i++){
	if(i%3==0 && i%5==0) {
		console.log("FizzBuzz")
	} else if (i%3==0) {
		console.log("Fizz")
	} else if (i%5==0) {
		console.log("Buzz")
	} else {
		console.log(i)
	}
}
console.log("\n")



//http://patrickmuff.ch/blog/2014/01/28/smallest-javascript-fizzbuzz-solution-possible/
//prints one by one (which is what you are supposed to do)
//add "Fizz" & "Buzz" in the case of i%3==0 && i%5==0
//for 100 times, if n%3 is true then "Fizz" if not then "", same for buzz.
	//will implicitly be added because of the +
	//empty string is considered false in js, so n


for(n=1;n<101;n++)console.log(((n%3)?'':'Fizz')+((n%5)?'':'Buzz')||n)

console.log("\n")

//expanded

for (n=1; n<=100; n++){
	console.log(((n%3) ? '' :'Fizz') + ((n%5) ? '' : 'Buzz') || n);
}

//addition of "fizz" & "buzz" is key for eliminating the extra "FizzBuzz" line
// ||n is key for defaulting to the n value