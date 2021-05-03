// Code your solution here


function findMatching(driverList, driverSearchName) {
// xxx.filter( EXPECTS FUNCTION HERE - arrow function? )
    return driverList.filter( matchDriver => 
        matchDriver.toLowerCase() === driverSearchName.toLowerCase() 
        )
    }


console.log(findMatching(drivers, "Bobby"))

function fuzzyMatch(driverList, startLetter) {
    return driverList.filter( matchDriver =>
        matchDriver.toLowerCase().indexOf(startLetter.toLowerCase()) === 0
        )
}

console.log(fuzzyMatch(drivers, "S"))
console.log(fuzzyMatch(drivers, "sa"))

function matchName(driverList, driverName) {
    return driverList.filter( matchDriver =>
        matchDriver.name.toLowerCase() === driverName.toLowerCase()
    )
}

console.log(matchName(drivers, "bobby"))

// Arrow functions in filters are effectively "NAME" each element of the array which is being filtered
// which can access the data structure for .specificElements and be converted toUpperCase()/toLowerCase etc
// The final part is what it matches/doesn't match to from the input arguments