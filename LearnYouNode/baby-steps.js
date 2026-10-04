'use strict'

const arr = process.argv;
let sum = 0;

for (let i = 2; i < arr.length; i++) {
    sum += +arr[i];
}

console.log(sum);