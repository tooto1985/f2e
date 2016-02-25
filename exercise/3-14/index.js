var ary = ["A", "B", "C", "D", "E"];
//length
console.log(ary.length);
//push
console.log(ary.push("F"));
//pop
console.log(ary.pop());
//unshift
console.log(ary.unshift("F"));
//shift
console.log(ary.shift());
//splice(insert)
console.log(ary.splice(3, 0, "F"));
//splice(remove)
console.log(ary.splice(3, 1));
//indexOf
console.log(ary.indexOf("D"));
//lastIndexOf
console.log(ary.lastIndexOf("D"));
//join
console.log(ary.join(":"));
//reverse
console.log(ary.reverse());
//sort
console.log(ary.sort());
//some
console.log(ary.some(function(item) {
	return item === "C";
}));
//every
console.log(ary.every(function(item) {
	return item.length === 1;
}));
//forEach
console.log(ary.forEach(function(item) {
	return item;
}));
//reduce
console.log(ary.reduce(function(prevItem, item) {
	return prevItem + item;
}));
//reduceRight
console.log(ary.reduceRight(function(prevItem, item) {
	return prevItem + item;
}));
//map
console.log(ary.map(function(item) {
	return item + item;
}));
//filter
console.log(ary.filter(function(item) {
	return item > "C";
}));
//slice
console.log(ary.slice(2, 4));
//concat
console.log(ary.concat(["G", "H"]));