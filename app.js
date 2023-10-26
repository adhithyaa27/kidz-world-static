var addButton = document.querySelectorAll(".button");
var cartValue = document.querySelector('#cart-value')
var cart = document.querySelector("#cart img")
var book = document.querySelectorAll("h3")
var price = document.querySelectorAll("div p")

var items = [];
var totalCost = 0;
var noOfItems = 0;

function show(e){
    let name = book[e].textContent;
    let cost = parseFloat(price[e].textContent.replace("$",""))
    let exist = items.find((item) => item.name === name)
    
    if(exist){
        exist.quantity += 1
    }else{
        items.push({name,cost,quantity:1})
}
    totalCost += cost;
    noOfItems += 1;
    cartValue.innerHTML = noOfItems;
}

cart.onclick = () =>{
    for (let i = 0; i < items.length; i++){
        console.log("Item name",items[i].name,"Quantity",items[i].quantity)
    }

    let dollar = Math.floor(totalCost)
    let cent = Math.floor(totalCost - dollar)* 100;
    console.log(`The total cost is ${dollar} $ dollars and ${cent} only`)
}