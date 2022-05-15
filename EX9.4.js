//  process.stdout.write = console.log without newline 
function steps (int){
    for (let i =1; i <= int; i++) {
        
        for (let j = 1; j <= i; j++) {
            process.stdout.write("# ");

        }
        process.stdout.write("\n");
        i
    }
}

steps(3)