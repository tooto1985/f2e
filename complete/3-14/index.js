var ary = ["A", "B", "C", "D", "E"];
console.log(ary.length); //5, ["A", "B", "C", "D", "E"]
console.log(ary.push("F")); //6, ["A", "B", "C", "D", "E", "F"]
console.log(ary.pop()); //"F", ["A", "B", "C", "D", "E"]
console.log(ary.unshift("F")); //6, ["F", "A", "B", "C", "D", "E"]
console.log(ary.shift()); //"F", ["A", "B", "C", "D", "E"]
console.log(ary.splice(3, 0, "F")); //[], ["A", "B", "C", "F", "D", "E"]
console.log(ary.splice(3, 1)); //["F"], ["A", "B", "C", "D", "E"]
console.log(ary.indexOf("D")); //3, ["A", "B", "C", "D", "E"]
console.log(ary.lastIndexOf("D")); //3, ["A", "B", "C", "D", "E"]
console.log(ary.join(":")); //"A:B:C:D:E", ["A", "B", "C", "D", "E"]
console.log(ary.reverse()); //["E", "D", "C", "B", "A"]
console.log(ary.sort()); //["A", "B", "C", "D", "E"]
console.log(ary.some(function(item) {
    return item == "C";
})); //true, ["A", "B", "C", "D", "E"]
console.log(ary.every(function(item) {
    return item.length === 1;
})); //true, ["A", "B", "C", "D", "E"]
console.log(ary.forEach(function(item) {
    return item;
})); //undefined, ["A", "B", "C", "D", "E"]
console.log(ary.reduce(function(prevItem, item) {
    return prevItem + item;
})); //"ABCDE", ["A", "B", "C", "D", "E"]
console.log(ary.reduceRight(function(prevItem, item) {
    return prevItem + item;
})); //"EDCBA", ["A", "B", "C", "D", "E"]
console.log(ary.map(function(item) {
    return {key:item};
})); //[{key:"A"}, {key:"B"}, {key:"C"}, {key:"D"}, {key:"E"}], ["A", "B", "C", "D", "E"]
console.log(ary.filter(function(item) {
    return item > "C";
})); //["D", "E"], ["A", "B", "C", "D", "E"]
console.log(ary.slice(2, 4)); //["C", "D"], ["A", "B", "C", "D", "E"]
console.log(ary.concat(["G", "H"])); //["A", "B", "C", "D", "E", "G", "H"], ["A", "B", "C", "D", "E"]