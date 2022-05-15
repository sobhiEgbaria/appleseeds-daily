
const isString =  function (string, callback){
    if(typeof string === `string`){callback()}

}

function foo (){
    console.log(`string`);
}

isString(`lolo`,foo);