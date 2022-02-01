let myArr = [];

function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return [];
    } else {
        myArr.push(startNum);
        rangeOfNumbers(startNum + 1, endNum);
    }
    return myArr;
}
