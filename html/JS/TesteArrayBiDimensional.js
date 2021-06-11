var tempWeekAvg = []

var tempWeekAvgOne = [27.3, 25, 25, 26, 29, 27, 22]
var tempWeekAvgTwo = [28.3, 26, 26, 27, 30, 28, 23]

tempWeekAvg[0] = tempWeekAvgOne
tempWeekAvg[1] = tempWeekAvgTwo

//console.log(tempWeekAvg)

for(var lines = 0; lines < tempWeekAvg.length; lines++) {
    for(var columns = 0; columns < tempWeekAvg[lines].length; columns++) {
        console.log(tempWeekAvg[lines][columns])
    }
}




