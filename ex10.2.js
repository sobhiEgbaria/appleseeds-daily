function firstWordUpperCase (string,callback){
    
    string = string[0].toUpperCase() + string.slice(1);
    return callback(string);  
}

function foo (string){
    return  string = string.split(' ').join('-');
     
}


console.log(firstWordUpperCase("aobhi asdas adas",foo))