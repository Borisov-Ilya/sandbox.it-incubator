// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
        return undefined;
    } else if (a === 0 || b === 0) {
        return 0;
    } else {
        return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }


    // Only change code above this line

}

abTest(2,2);