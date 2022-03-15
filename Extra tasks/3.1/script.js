function findContArr(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        let count = 0;

        for(j = i; j < arr.length; j++) {
            count += arr[j];
            sum = Math.max(sum, count);
        }
    }

    return sum;
}


/*
//TEST
const a = [1, 2, 4, 10, -4];
const b = [-4, 4, 1, 2, -3, 3, 4, 5, -1];
const c = [1, 2, 3, 4, 5, 6];

console.log(findContArr(a));
console.log(findContArr(b));
console.log(findContArr(c));
*/