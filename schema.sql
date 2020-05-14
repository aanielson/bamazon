CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(8) NOT NULL,
	stock_quantity INTEGER(8)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Face Lotion", "Health & Beauty", 19.87, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Face Wash", "Health & Beauty", 17.60, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Apple Slicer", "Home & Kitchen", 14.99, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("KitchenAid Stand Mixer", "Home & Kitchen", 250, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Cheese Knife", "Home & Kitchen", 10.54, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("iPhone Charger Cord", "Electronics", 14.49, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Bluetooth Mouse", "Electronics", 19.98, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("iPhone Charger Cord", "Electronics", 14.49, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("iPad Screen Protector", "Electronics", 3.69, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Men's Sandals", "Clothing, Shoes, & Jewelry", 14.49, 50);
    
SELECT * FROM products;