var ary = ["A", "B", "C", "D", "E"];
//length
console.log(ary.length); //5, ["A", "B", "C", "D", "E"]
//push
console.log(ary.push("F")); //6, ["A", "B", "C", "D", "E", "F"]
//pop
console.log(ary.pop()); //"F", ["A", "B", "C", "D", "E"]
//unshift
console.log(ary.unshift("F")); //6, ["F", "A", "B", "C", "D", "E"]
//shift
console.log(ary.shift()); //"F", ["A", "B", "C", "D", "E"]
//splice(insert)
console.log(ary.splice(3, 0, "F")); //[], ["A", "B", "C", "F", "D", "E"]
//splice(remove)
console.log(ary.splice(3, 1)); //["F"], ["A", "B", "C", "D", "E"]
//indexOf
console.log(ary.indexOf("D")); //3, ["A", "B", "C", "D", "E"]
//lastIndexOf
console.log(ary.lastIndexOf("D")); //3, ["A", "B", "C", "D", "E"]
//join
console.log(ary.join(":")); //"A:B:C:D:E", ["A", "B", "C", "D", "E"]
//reverse
console.log(ary.reverse()); //["E", "D", "C", "B", "A"]
//sort
console.log(ary.sort()); //["A", "B", "C", "D", "E"]
//some
console.log(ary.some(function(item) {
	return item == "C";
})); //true, ["A", "B", "C", "D", "E"]
//every
console.log(ary.every(function(item) {
	return item.length === 1;
})); //true, ["A", "B", "C", "D", "E"]
//forEach
console.log(ary.forEach(function(item) {
	return item;
})); //undefined, ["A", "B", "C", "D", "E"]
//reduce
console.log(ary.reduce(function(prevItem, item) {
	return prevItem + item;
})); //"ABCDE", ["A", "B", "C", "D", "E"]
//reduceRight
console.log(ary.reduceRight(function(prevItem, item) {
	return prevItem + item;
})); //"EDCBA", ["A", "B", "C", "D", "E"]
//map
console.log(ary.map(function(item) {
	return {key:item};
})); //[{key:"A"}, {key:"B"}, {key:"C"}, {key:"D"}, {key:"E"}], ["A", "B", "C", "D", "E"]
//filter
console.log(ary.filter(function(item) {
	return item > "C";
})); //["D", "E"], ["A", "B", "C", "D", "E"]
//slice
console.log(ary.slice(2, 4)); //["C", "D"], ["A", "B", "C", "D", "E"]
//concat
console.log(ary.concat(["G", "H"])); //["A", "B", "C", "D", "E", "G", "H"], ["A", "B", "C", "D", "E"]