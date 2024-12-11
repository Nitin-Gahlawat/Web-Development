let arr = [1, "CODING", null, true, { user: "Admin" }];
console.log(arr);
console.log(arr.length);
console.log(Array.isArray(arr));

// push and pop
arr.push(45);
console.log("pop " + arr.pop());
// Shift or unshift
arr.unshift(95);
console.log("shift " + arr.shift());

// Splice
console.log(arr.splice(2, 2));

// fill and sort
let a = new Array(3);
a.fill(0);
a[1] = 2;
a[2] = 5;
a.sort();
console.log(a);

// De-structuring of array
let [x, y, z] = a;
console.log(x, y, z);

// Slice method
let newarr = a.slice(0, a.length);
console.log(newarr);

//join
console.log(newarr.join(",,,"));
