function isSubstring(full, sub) {
	return full.replace(sub) != full
	// return full.indexOf(sub) > -1
}

//console.log(isSubstring("apple", "eap"))

function isRotation(full, against) {

	var aIndex = 0,
		bIndex = against.indexOf(full.charAt(0)),
		comparator = 0;

	for (i = 0; i < full.length; i++){

		//console.log(full.charAt(i) + against.charAt(bIndex))

		if(full.charAt(i) != against.charAt(bIndex)) {return false}

		bIndex++;

		if (bIndex == full.length) {bIndex = 0}
	}

	return true;
}


function isRotation2(full, against) {

	var aIndex = 0,
		bIndex = against.indexOf(full.charAt(0));

	return (against.slice(bIndex, full.length) + against.slice(0, bIndex)) == full
}


function isRotation3(full, against) {

	var s1s1 = against + against;
	return isSubstring(s1s1, full);
}

console.log(isRotation3("waterbottle", "erbottlewat"));
//is erbottlewat a rotation of waterbottle
