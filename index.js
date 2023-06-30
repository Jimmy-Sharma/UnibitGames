//  1 . Given an array of integers and a target value, you must determine which two integers' sum
// equals the target and return a 2D array. Then merge the array into a single array with sorting (
// ascending ) order, in the next step double the target value and find again the combination of
// digits (can be multiple digits ) that are equal to the double targeted value and returned into a 2D
// array.
// Sample Input : [1, 3, 2, 2, -4, -6, -2, 8];
// Target Value = 4,
// Output: First Combination For “4” : [ [1,3],[2,2],[-4,8],[-6,2] ];
// Merge Into a single Array : [-6,-4,1,2,2,2,3,8];
// Second Combination For “8” : [ [ 1,3,2,2], [8,-4,2,2],....,[n,n,n,n] ]


let arr = [1, 3, 2, 2, -4, -6, -2, 8];

//1.First Combination For “4” 
function combinationForFour(arr) {
    let str = [1, 3, 2, 2, -4, -6, -2, 8];
    let target = 4;
    let ans = [];

    for (let i = 0; i <= str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let subArr = []
            if ((str[i] + str[j]) == target) {
                subArr.push(str[i]);
                subArr.push(str[j]);
                str[j] = "a";
                str[i] = "a";
                ans.push(subArr);
                break;
            }
        }
    }
    console.log(ans);
}
combinationForFour(arr);


//2.Merge Into a single Array :
function mergeIntoASingleArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}
mergeIntoASingleArray(arr);


// 3.Second Combination For “8” :
function combinationForEight(arr) {
    let target = 8;
    const patterns = [];
    for (let i = 1; i <= arr.length; i++) {
        for (const combination of combinations(arr, i)) {
            if (combination.reduce((a, b) => a + b) === target) {
                patterns.push(combination);
            }
        }
    }
    console.log(patterns);
}

function* combinations(arr, n) {
    if (n === 1) {
        yield* arr.map((x) => [x]);
    } else {
        for (let i = 0; i < arr.length - n + 1; i++) {
            const head = arr.slice(i, i + 1);
            const tailCombinations = combinations(arr.slice(i + 1), n - 1);
            for (const tailCombination of tailCombinations) {
                yield head.concat(tailCombination);
            }
        }
    }
}

combinationForEight(arr);