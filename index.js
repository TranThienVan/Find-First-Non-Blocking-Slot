let inputs = [
    {
        id: 1,
        startTime: 180,
        endTime: 220
    },
    {
        id: 2,
        startTime: 0,
        endTime: 120
    },
    {
        id: 3,
        startTime: 110,
        endTime: 150
    }
]

let FFNBS = function(inputs, duration) {

    
    // Sort the array according to the startTime
    let result = inputs.sort((a, b) =>  a.startTime - b.startTime)
    let e_max = result[0].endTime
   
    for (let i = 0; i < result.length - 1; i++) {
        let siNext = result[i+1].startTime
        let ei = result[i].endTime
        

        if (ei >= e_max){
            e_max = ei
        }
        
        if (siNext - ei >= duration) {
            return {startTime: ei, endTime: ei + duration}
        }
            
    }
    if(e_max < result[result.length-1].endTime){
        e_max = result[result.length-1].endTime
    }

    return {
        startTime: e_max, 
        endTime: e_max + duration
    }

}

console.log("Test Case 1: handler(input, 60)")
console.log(FFNBS(inputs, 60)) 
console.log("\nTest Case 2: handler(input, 30)")
console.log(FFNBS(inputs, 30)) 