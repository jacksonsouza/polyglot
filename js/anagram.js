require("babel-polyfill");

// 'cat' == 'act'
// 'hello' != 'heelo'

//input_list = ['cat','dog','man','heelo','rats','sun','star','beach','god','hello','tsar']

// output = ['dog','rats','star','god','tsar']

exports.anagram = function (a) {
    var output = [];
    var words = [];
    //var counts = {};
    
    for (let i=0; i < a.length; i++) { //splitting each character into a separate array in words array, populate counts
        var word = a[i].split('')
        words.push(word.sort());
        //counts[i]={};
    }

    
    // for (k=0; k < a.length; k++) { //checking how many times each letter occurs in each word
    //     var word = counts[k];
    //     for (i=0; i <  words[k].length; i++) {
    //         var curr = words[k][i]
    //         var regex = new RegExp(curr, "g");
    //         word[curr] = a[k].length - a[k].replace(regex, "").length
    //     }
    // }

    for (let i=0; i < a.length; i++) { //comparing & populating outputs array
        var curr = words[i]

        for (let j=0; j < a.length; j++) {
            var on = words[j]

            if(i!= j && JSON.stringify(curr) == JSON.stringify(on)) {
                output.push(a[i])
                output.push(a[j])
            }

        }
    }

    //removing duplicates
    output = output.filter(function(w, i) {
        return output.indexOf(w) == i;
    });

    return output;
}