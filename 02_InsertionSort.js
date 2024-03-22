// insertion sort in javascript


function printArray (arr) {
    console.log("Element #" + i + ": " + arr[i]);
}
function performInsertionSort (arr) {

    for (let i=1; i<arr.length; i++) {
        // console.log(`Element #${i}: ${arr[i]}`); // alternative
        
        let j = i;
        while (j>0 && arr[j-1]>arr[j]) {
            temp = arr[j]
            arr[j] = arr[j-1]
            arr[j-1] = temp
            j--;
        }

    }

    // return arr;
}

var sampleArray = [6,7,8,9,4,3,2,1,0,5];

console.log(sampleArray);
console.log(performInsertionSort(sampleArray));
console.log(sampleArray);

// arrays in Javascript are mutable