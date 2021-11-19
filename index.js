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
    let inputSorted = inputs.sort((a, b) =>  a.startTime - b.startTime)
    let endTimeMax = inputSorted[0].endTime
   
    for (let i = 0; i < inputSorted.length - 1; i++) {
        let startTimeNext = inputSorted[i+1].startTime
        let endTime = inputSorted[i].endTime

        if (endTime >= endTimeMax){
            endTimeMax = endTime
        }
        
        if (startTimeNext - endTime >= duration) {
            return {startTime: endTime, endTime: endTime + duration}
        }
            
    }
    if(endTimeMax < inputSorted[inputSorted.length-1].endTime){
        endTimeMax = inputSorted[inputSorted.length-1].endTime
    }

    return {
        startTime: endTimeMax, 
        endTime: endTimeMax + duration
    }

}

console.log("Test Case 1: handler(input, 60)")
console.log(FFNBS(inputs, 60)) 
console.log("\nTest Case 2: handler(input, 30)")
console.log(FFNBS(inputs, 30)) 