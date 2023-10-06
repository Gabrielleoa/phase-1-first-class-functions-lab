const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers() {
  return drivers.slice(0,2);
}
function returnLastTwoDrivers() {
  return drivers.splice(2,3)
}
const selectingDrivers = [
  returnFirstTwoDrivers, 
  returnLastTwoDrivers
];
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}
function fareDoubler(doubler){
 return fareDoubler((doubler)*2); 
 fareDoubler(10)
}
fareDoubler(10);

function fareTripler(tripleFare){

}
function selectDifferentDrivers(arrayOfDrivers, driverSelectorFunction){
  return driverSelectorFunction(arrayOfDrivers);

}
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));