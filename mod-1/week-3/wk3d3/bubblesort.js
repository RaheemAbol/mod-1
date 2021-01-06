
// Bubble sort 
var num = [5,3,8,4,6];

let swap;

function bubbleSort(arr) {
    swapped = false;
    let end = arr.length - 1;
    for (let i = 0; i < end; i++){
        if (arr[i] > arr[i + 1]) {
            swap = true;
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
   end--
}

do{
    bubbleSort(num);
} while (swapped);

console.log(num);