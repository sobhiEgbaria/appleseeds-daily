const data = [
    //     {
    //     name: "John",
    //     birthday: "1-1-1995",
    //     favoriteFoods: {
    //     meats: ["hamburgers", "sausages"],
    //     fish: ["salmon", "pike"],
    //     },
    //     },
    //     {
    //     name: "Mark",
    //     birthday: "10-5-1980",
    //     favoriteFoods: {
    //     meats: ["hamburgers", "steak", "lamb"],
    //     fish: ["tuna", "salmon", "barracuda"],
    //     },
    //     },
    //     {
    //     name: "Mary",
    //     birthday: "1-10-1977",
    //     favoriteFoods: {
    //     meats: ["ham", "chicken"],
    //     fish: ["pike"],
    //     },
    //     },
    //     {
    //     name: "Thomas",
    //     birthday: "1-10-1990",
    //     favoriteFoods: {
    //     meats: ["bird", "rooster"],
    //     fish: ["salmon"],
    //     },
    //     },
    //     {
    //     name: "Mary",
    //     birthday: "1-10-1977",
    //     favoriteFoods: {
    //     meats: ["hamburgers", "lamb"],
    //     fish: ["anchovies", "tuna"],
    //     },
    //     },
    //     ];
    
    //     // function names (arr){
    
    //     //     const arrNmes = arr.map(function(object){
    //     //         return object.name;
    //     //     })
    //     //     return arrNmes;
    //     // }
    //     //         console.log(names(data));
    
    
    //      function befor1990 (arr){
    
    //         const age = arr.filter(age => age.birthday < "1990");
    //                 return age;
    //             }
    //                     console.log(befor1990(data));
    
    
    library = [
      {
      author: "Bill Gates",
      title: "The Road Ahead",
      readingStatus: true
      },
      {
      author: "Steve Jobs",
      title: "Walter Isaacson",
      readingStatus: true
      },
      {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      readingStatus: false
      }
      ];
    
      function canBeRead (arr){
          const books = arr.filter(x => x.readingStatus==true);
              return books;
      }
    
      console.log(canBeRead(library)); 
    