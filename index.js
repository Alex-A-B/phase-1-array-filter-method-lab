// Code your solution here

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(driverList, driverSearchName) {
// xxx.filter( EXPECTS FUNCTION HERE )
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