// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // Part 1
// // specific for arrays
// // run on all the elements
// const forEachCallback = (value, index) => {
//  console.log("value:", value, "index:", index);
//  return undefined;
// };
// const mapCallback = (value, index) => {
//  console.log("value:", value, "index:", index);
//  return value * index;
// };
// const filterCallback = (value, index) => {
//  console.log("value:", value, "index:", index);
//  if (value > 5) {
//      return true;
//  } else {
//      return false;
//  }
// };
// const findCallback = (value, index) => {
//  console.log("value:", value, "index:", index);
//  if (value === 3) {
//      return true;
//  } else {
//      return false;
//  }
// };
// const forEach = (array, callback) => {
//  for (let i = 0; i < array.length; i += 1) {
//      const value = array[i];
//      const index = i;
//      callback(value, index);
//  }
// };
// const map = (array, callback) => {
//  const newArray = [];
//  for (let i = 0; i < array.length; i += 1) {
//      const value = array[i];
//      const index = i;
//      newArray.push(callback(value, index));
//  }
//  return newArray;
// };
// const filter = (array, callback) => {
//  const newArray = [];
//  for (let i = 0; i < array.length; i += 1) {
//      const value = array[i];
//      const index = i;
//      const weWantToPush = callback(value, index);
//      if (weWantToPush) {
//          newArray.push(value);
//      } else {
//          continue;
//      }
//  }
//  return newArray;
// };
// const find = (array, callback) => {
//  for (let i = 0; i < array.length; i += 1) {
//      const value = array[i];
//      const index = i;
//      const weWantToPush = callback(value, index);
//      if (weWantToPush) {
//          return value;
//      } else {
//          continue;
//      }
//  }
// };
// const dataFromForEach = array.forEach(forEachCallback);
// const ArrayMethods = {
//  forEach: forEach,
//  map: map,
//  filter: filter,
//  find: find,
// };
// const dataFromForEach = ArrayMethods.forEach(array, forEachCallback);
// ForEach return undefined
// const newArrayFromMapFunction = array.map(mapCallback);
// const newArrayFromMapFunction = ArrayMethods.map(array, mapCallback);
// map return new Array
// const filteredArrayFromFilterFunction = array.filter(filterCallback);
// const filteredArrayFromFilterFunction = ArrayMethods.filter(array, filterCallback);
// const specificItem = array.find(findCallback);
// const specificItem = ArrayMethods.find(array, findCallback);
// console.log("specificItem:", specificItem);
// const array = new Array(100).fill(1);
// Part 2
// chaining loops
// const forEachCallback = (value, index) => {
//  console.log("value:", value, "index:", index);
//  return undefined;
// };
// const mapCallback = (value, index) => {
//  // console.log("value:", value, "index:", index);
//  return value * index;
// };
// const filterCallback = (value, index) => {
//  // console.log("value:", value, "index:", index);
//  if (index > 50) {
//      return true;
//  } else {
//      return false;
//  }
// };
// const findCallback = (value, index) => {
//  // console.log("value:", value, "index:", index);
//  if (value === 54) {
//      return true;
//  } else {
//      return false;
//  }
// };
// const newArray = array.map(mapCallback).map(mapCallback).map(mapCallback).map(mapCallback);
// const newArray1 = array.map(mapCallback).filter(filterCallback).find(findCallback);
// const newArray2 = array.filter(filterCallback).map(mapCallback).forEach(forEachCallback);
// //1.  [2,2,2,2]
// //2.    [3,3,3,3]
// //3.        [4,4,4,4]
// //4.            [5,5,5,5]
// //5.               newArray = [5,5,5,5]
// console.log(newArray2);
// for(let i = 0; i < array.length; i += 1) {
//     // someCode
// }
// for(let i = 0; i < array.length; i += 1) {
//     // someCode
// }
// for(let i = 0; i < array.length; i += 1) {
//     // someCode
// }
// for(let i = 0; i < array.length; i += 1) {
//     // someCode
// }
// for(let i = 0; i < array.length; i += 1) {
//     // someCode
// }