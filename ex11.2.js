//11.2 Q1=====================================================
const num = [20, 21, 22, 23, 24, 25, 26, 27];

function doubleValues (arr){
    const doubleArr = arr.map (doubled);
    return doubleArr;
}

function doubled (value){
    return value*2;
}

 console.log(doubleValues(num));        

// 11.2 Q2 ========================================================

const numbers2 = [10, 20, 21, 11, 30, 31, 40, 41];

function onlyEvenValues (arr){
   const doubleArr = arr.filter(even => even%2===0 );
   return doubleArr;
}

console.log(onlyEvenValues(numbers2)); 

// 11.2 Q3=============================================


 const words = ["gogo", "lolo", "momo", "soso", "dodo"];
 

function showFirstAndLast (arr){

   const firstAndLst = arr.filter((value,index,arr) =>{ return index==0 || index==arr.length-1;})
   return  firstAndLst
}

       console.log(showFirstAndLast(words)); 

// 11.2 Q4 ====================================================

let sentence = "wlcome to the new wolrd"


function capitalize (string){
   
   newArr = string.split(" ");

   const capitalizeArr = newArr.map((value) =>value.toUpperCase())

   return capitalizeArr;
}

console.log(capitalize(sentence));
