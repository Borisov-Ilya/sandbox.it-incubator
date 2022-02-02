// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F

function abbrevName(name){
    let arr = name.split(' ')
    let str = '';

    for (let i = 0; i < arr.length; i++) {
        str += arr[i][0].toUpperCase().concat('.')
    }

    return str.slice(0, -1)
}

abbrevName("patrick feeney")