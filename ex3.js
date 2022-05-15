function divideOrHasSeven (n){
    let temp=0, arr = [];
    arr.length= n;

    for (let i=1; i<=n; i++){
        temp=i;

    if(temp%7==0){
        arr[i]= "boom";
        
    while(temp > 0 ){
        if( temp % 10 == 7)
            {
                arr[i]= "boom-boom";
                break; 
            }
        temp = Math.floor(temp / 10);  }}

    else
        arr[i]=i;
    }
    return arr;
    }

    console.log( divideOrHasSeven(18) );