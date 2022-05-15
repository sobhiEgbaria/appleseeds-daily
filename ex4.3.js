const books = {

             bookName: `back book`,
             author: `gogo`,
             year: 1991,
             numOfPges : 5755,
         }
    
         function foo (books){
             return `The book <${books.bookName}> was written by <${books.author}> in
             the year <${books.year}> and num of pages is <${books.numOfPges}>`
         }
    
         console.log(foo(books));