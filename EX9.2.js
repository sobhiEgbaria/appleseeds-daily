const arr = ["Greg", "Mary", "Devon", "James"];
const newArr = [];
let counter = 0;

while (counter < arr.length) {
  newArr[counter] = arr[counter].length;
  counter++;
}
console.log(newArr);
