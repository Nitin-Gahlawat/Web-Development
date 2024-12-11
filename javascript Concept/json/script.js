let pg = {
  pg1: "java",
  agepg1: 25,
  ratingpg1: {
    stars: 5,
    noOfReviews: 4,
  },
  pg2: "python",
  pg2: 27,
  ratingpg2: {
    stars: 7,
    noOfReviews: 40,
  },
};
console.log(typeof pg);

// Conversion of object to Json
console.log(
  `-----------------------------Conversion of js object to Json-----------------------------`
);
let x = JSON.stringify(pg);
console.log(typeof x);
console.log(x);

// conversion fo Json to object
console.log(
  `-----------------------------conversion from Josn to js object-----------------------------`
);

let newProduct = JSON.parse(x);
console.log(typeof newProduct);
console.log(newProduct);
