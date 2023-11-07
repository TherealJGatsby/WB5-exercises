let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
    ];

    // a.
    // write code that searches the courses array using the map () function to return only the item name
    function itemName(item) {
        return item.item
    }

    function displayItemName(item) {
        console.log(item);
    }

    let itemLlist = cart.map(itemName);

    // let numItems = itemLlist.length;
    // for(let i = 0; i < numItems; i++) {
    //     console.log(itemLlist[i]);
    // }

    itemLlist.forEach(displayItemName);

    // b. 
    // Write code that determines the total cost of everything in the cart using reduce()
    function getPrice(item) {

        return item.price * item.quantity;
    
    }
     
    function sumTotal(total, itemTotalPrice) {
    
        return total + itemTotalPrice;
    
    }
    
    let prices = cart.map(getPrice);
    
    let totalCost = prices.reduce(sumTotal, 0);
    
     
    
    console.log(`The total cost of the cart is: $${totalCost.toFixed(2)}`);