
//  const data = [
//      {
//      name: "John",
//      birthday: "1-1-1995",
//      favoriteFoods: {
//      meats: ["hamburgers", "sausages"],
//      fish: ["salmon", "pike"],
//      },
//      },
//      {
//      name: "Mark",
//      birthday: "10-5-1980",
//      favoriteFoods: {
//      meats: ["hamburgers", "steak", "lamb"],
//      fish: ["tuna", "salmon", "barracuda"],
//      },
//      },
//      {
//      name: "Mary",
//      birthday: "1-10-1977",
//      favoriteFoods: {
//      meats: ["ham", "chicken"],
//      fish: ["pike"],
//      },
//      },
//      {
//      name: "Thomas",
//      birthday: "1-10-1990",
//      favoriteFoods: {
//      meats: ["bird", "rooster"],
//      fish: ["salmon"],
//      },
//      },
//      {
//      name: "Mary",
//      birthday: "1-10-1977",
//      favoriteFoods: {
//      meats: ["hamburgers", "lamb"],
//      fish: ["anchovies", "tuna"],
//      },
//      },
//      ];

//    function gitName (arr){

//          const names = arr.map((value) => {return value.name;})

//          return names
//      }

//     console.log(gitName(data)) 


//  function oldTan1990 (arr){

//      const year = arr.filter(function(data){



//      })

//      return year;

//  }


//   function gitYear(objeact){

//       const date = objeact.map((value) => value.birthday.split("-")); 
//       const  year2 = date.map((value) => Number(value[2]));
    
//       return year2

//   }

    



// console.log(oldTan1990(gitYear));

// function foods (arr){

//     const foodCounter ={};

//     foodCounter = arr.filter(function(value = value.favoriteFoods){

//         if (foodCounter[value[i]] == undefined) 
//             {
//                 foodCounter[value[i]] =0; 
//             }
//             foodCounter[value[i]] +=1

//     })
//     return foodCounter;
// }

// console.log(foods(data));