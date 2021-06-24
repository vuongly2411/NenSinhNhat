var arrNen = new Array();
for (let i=0; i < 7; i++) {
    arrNen[i] = +prompt('Input: ');
}
console.log(arrNen);

alert("Result: " + countMax(arrNen));
// console.log(searchMax(arrNen));
// searchMax(arrNen);

function searchMax(arr) {
    let max = arr[0];
    for (let i=1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

function countMax(arr) {
    let count = 0;
    let max = searchMax(arr);
    for (let i=0; i < arr.length; i++) {
        if (arr[i] == max) {
            count++;
        }
    }
    return count;
}

