// For this kata you will have to forget how to add two numbers.
//
//     In simple terms, our method does not like the principle of carrying over numbers and just writes down every
//     number it calculates :-)
//
// You may assume both integers are positive integers.
//
//     Examples
//
//   1 6
// + 1 8
//   2 14

function add(num1, num2) {
    let arr1 = [...`${num1}`].map(Number)
    let arr2 = [...`${num2}`].map(Number)
    let sum = 0
    let newArr = []

    if (arr1.length > arr2.length) {
        while (arr1.length > arr2.length) {
            arr2.unshift(0)
        }
        for (let i = arr1.length - 1; i >= 0; i--) {
            sum = arr1[i] + arr2[i]
            newArr.unshift(sum)
        }

        return Number(newArr.join(''))
    } else {
        while (arr2.length > arr1.length) {
            arr1.unshift(0)
        }
        for (let i = arr2.length - 1; i >= 0; i--) {
            sum = arr1[i] + arr2[i]
            newArr.unshift(sum)
        }

        return Number(newArr.join(''))
    }
}


add(16, 18)
add(1236, 30977)
add(122, 81)
add(38810, 1383)