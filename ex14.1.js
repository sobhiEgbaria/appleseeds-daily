
  const arr = [1, 5, 0, 2, 0, 11,20];


  const sum = arr.reduce((total, currentValue) => {

      return total+currentValue;
  })

  console.log(sum);

const arr2 = [5, 5, 5, 5,5];

  const sumOfEven = arr2.reduce((total, currentValue) => {

      if(currentValue %2 == 0)  total+=currentValue;
               return total;
  },0)

  console.log(sumOfEven);



 const avg = arr2.reduce((total, currentValue) => {

     (total+=currentValue);
     
     return total/(arr2.length);
 },0)

 console.log(avg);