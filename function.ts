const getAverage = (...a:number[]) : string => {   
    let total = 0
    let count = 0;
    
    for (let i = 0; i < a.length; i++) {
        total += a[i]
        count++;
    }
    
    // const result = (a + b + c) / 3;
    const result = total / count;    
    return "result : " + result;
}

console.log(getAverage(10,20,30));
getAverage(10,20); 