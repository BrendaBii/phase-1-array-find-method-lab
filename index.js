// code your solution here
let record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]
let sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]
let item;

function searchW (element){
    if(element.result === "W"){
        return true;
    }
}

function superbowlWin(array){
   for(item of array){
    if(array.find(searchW) === undefined){
        return undefined
    }
    else{
        return array.find(searchW).year;
    }
   }
   return undefined;
}

console.log(superbowlWin(record));
console.log(superbowlWin(sadReality));