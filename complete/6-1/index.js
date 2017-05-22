console.time("6-1-a");
for(var i=0;i<100000;i++) {
    if ("1"==1) {
    }
}
console.timeEnd("6-1-a");
console.time("6-1-b");
for(var i=0;i<100000;i++) {
    if ("1"===1) {
    }
}
console.timeEnd("6-1-b");