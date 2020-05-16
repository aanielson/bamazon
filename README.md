# Bamazon

## Problem to be Solved
In this app, I created an Amazon-like storefront with MySQL, Inquirer, and node.js. 
The app takes in orders from "customers" and deplete stock from the store's inventory.

## Organization
Using the code within the schema.sql file, a database and table must be created.
Open the bamazonCutsomer app with node and the user will see the list of available products, as well as their prices and ids.
The user is then prompted to input the id of the product they would like to purchase.
There is a second prompt for the amount of product they want.
Using the user input, queries are run to read the table from the database and determine if there is sufficient stock quantitiy to fulfill the customers order.
If there is enough, then the database is updated and the user is inpformed of the total cost of their order.
If there is not enough, then the user is told that they must either select a different product or a different quantity.
They are then run back through the beginning of the sequence to see the available products and again asked what they would like to purchase and the amount of product they want.

## Instructions
1. Start the app by running "node bamazonCustomer" in the terminal.
1. Respond to the prompts with:
    1. an available item_id to determine which product
    1. an integer to determine the amount of product
1. If successful, you should get an order summary.
1. If insufficient product, you will start over.

## video example
https://youtu.be/Ym6n_Op2qH4

## GitHub Link
https://github.com/aanielson/bamazon

## Teachnologies Used:
JavaScript
Node
MySQL

# Crucial node packages:
MySQL
Inquirer
console.table

# My Role
I created this!! This is our first project to utilize MySQL while applying previous knowledge of JavaScript and Node.js.