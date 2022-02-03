// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a
// single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.
//
// All inputs will be valid.

function digits(n) {
    let count = 0;
    let arr = Array.from(String(n), Number)

    for (let i = 0; i < arr.length; i++) {
        count++;
    }
    return count
}

digits(9876543210)