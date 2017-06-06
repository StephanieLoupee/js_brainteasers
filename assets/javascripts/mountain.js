
//This function sorts in reverse - highest first, so the first
//item in the array will be tallest
function sortHighLow(a,b) {
  return b-a;
};

function sortLowHigh(a,b) {
  return a-b;
};

let MtHeights = [14411, 12635, 1671, 6288, 1549, 14440, 3489, 13147];

MtHeights.sort(sortHighLow);
let Highest = MtHeights[0];

MtHeights.sort(sortLowHigh);
let Tallest = MtHeights[MtHeights.length-1];

//MtHeights.sort(sortNumber);
//let Highest = Math.max(MtHeights);
console.log("Highest Mountain: ", Highest);
console.log("Tallest Mountain: ", Tallest);
