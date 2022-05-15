const array = ["Hello", "Good Day", "Your Welcome", "hotdog","hamburgerss"];

        let string = array.join("").toLocaleLowerCase()
        let chart = string.split("");

        const chart_counter ={};
        
        for(let i=0; i<chart.length; i++){
            
            if (chart_counter[chart[i]] == undefined) 
            {
                 chart_counter[chart[i]] =0; 
            }
            chart_counter[chart[i]] +=1
        }
        console.log(chart_counter);