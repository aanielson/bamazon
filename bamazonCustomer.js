//Running this application will first display all of the items available for sale.
//Include the ids, names, and prices of products for sale.

//======Include necessary packages
var mysql = require("mysql");
var inquirer = require("inquirer");

//===== create necessary global variables
var choice_id;
var quantity;
//=====create connection to database
var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon"
}); 

//====when loaded, display all info for all products
connection.connect(function(err) {
    if (err) throw err;
})

listProducts();

//====function to list all products
function listProducts() {
    //SELECT to view all products
    connection.query("SELECT * FROM products", function(err, res) {
        if(err) throw err;
        console.log("Available Items:");
        console.log("====================");
        for (var i = 0; i < res.length; i++) {          
            console.log("Item ID: " + res[i].item_id);
            console.log(res[i].product_name);
            console.log("Price: $" + res[i].price);
            console.log("====================");
        };  
        selectItem();
    });
}

//The app should then prompt users with two messages.
    //The first should ask them the ID of the product they would like to buy.
    //The second message should ask how many units of the product they would like to buy.
function selectItem() {
    inquirer.prompt([
        {
            name: "choice",
            message: "What is the ID of the product you would like to purchase?"
        },
        {
            type: "number",
            name: "quantity",
            message: "How many units would you like to purchase?"
        }
    ]).then(function(answers) {
        choice_id = parseInt(answers.choice);
        quantity = parseInt(answers.quantity);
        // Once the customer has placed the order your application should check if your store has enough of the product
        connection.query("SELECT * FROM products WHERE ?", [
            {item_id: choice_id}
        ], function(err, res) {
            if(err) throw err;
            var item = res[0].product_name;
            var itemPrice = res[0].price;
            if (quantity > res.stock_quantity) {
                //If not, the app should log a phrase like Insufficient quantity!
                //then prevent the order from going through.
                console.log("Insufficient quantity!");
                console.log("Select a different product or a different amount.");
                listProducts();
            } else {
                //However, if your store does have enough of the product, you should fulfill the customer's order.
                updateProduct();
                //Once the update goes through, show the customer the total cost of their purchase.
                
            };
        });
    });
}



//This means updating the SQL database to reflect the remaining quantity.
function updateProduct() {
    console.log("updating...");
	connection.query(
		"UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
		quantity, choice_id,
		function(err, res){
            if(err) throw err;
            console.log(res);
			//console.log("Number of " + res.product_name + " in inventory: " + res.stock_quantity);
		}
    );
    console.log("Item to be purchased: " + item);
    console.log("Amount: " + quantity);
    console.log("Total Cost: " + (quantity * itemPrice));
}
