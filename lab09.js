

let inv = {};
addProd(1, "Apple", 2);
addProd(2, "Pear", 5);
addProd(3, "Mango", 9);
addProd(4, "Orange", 93);
addProd(5, "Soda", 51);
addProd(6, "Candy", 3);


disProd();


findProd(4);
findProd(7);
findProd(1);
findProd(2);

//add Prodcut 
function addProd(productID, name,quantity){
    inv[productID] = {
        name: name,
        quantity: quantity
    }
}

//display Product 
function disProd(){
    console.log ("Invintory: ");
    
    for (productID in inv){
        console.log ("ID: " + productID + " " + inv[productID].name + " #" + inv[productID].quantity);
        
    }
}

//find Product

function findProd(productID){
    if (inv[productID]){
        console.log ("Item Found");
        console.log ("ID: " + productID + " " + inv[productID].name + " #" + inv[productID].quantity);
    }
    
    else{
        console.log ("Item Not Found")
    }
    
}