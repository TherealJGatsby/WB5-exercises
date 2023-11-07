let products = [
  { product: "Gummy Worms", price: 5.79},
  { product: "Plain M&Ms", price: 2.89},
  { product: "Peanut M&Ms", price: 2.89}, 
  { product: "Swedish Fish", price: 3.79},
  { product: "Skittles", price: 3.05},
  { product: "Snickers", price: 3.49},
  { product: "Snickers Almond", price: 3.49},
  { product: "Reese's Cup", price: 3.25},
  { product: "Red Vines", price: 2.05},
  { product: "Starburst", price: 2.75},    
  // TODO:  fill the array with 10 candies of various 
  //        price ranges 
];

// find candy less than 4 dollars
let cheap = products.filter(p => p.price < 4);
let typeOfCandy = products.filter(p => p.product.includes("M&Ms"));
let swedishFishProducts = products.filter(p => p.product == "Swedish Fish");
let skittlesProducts = products.filter(p => p.product == "Skittles");

console.table(cheap);
console.table(typeOfCandy);

// finds out if we have swedish fish or not, also look at line 19
if(swedishFishProducts.length > 0) {
    console.log("Yes we have swedish fish ");
} else {
    console.log("No we do not have the swedish fish ");
}

// finds out if we have skittles or not, look at line 20
if(skittlesProducts.length > 0) {
    console.log("Yes we have Skittles ");
} else {
    console.log("No we do not have Skittles ");
}





