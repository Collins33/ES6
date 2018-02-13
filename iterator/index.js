//iterators allow us to loop through all elements of an array


let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let v of arr) {
  sum += v;
}

console.log(sum)