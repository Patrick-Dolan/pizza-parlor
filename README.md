# _Pizza Parlor_

#### By _**Patrick Dolan**_

#### _A web app that lets you build a pizza order and get a price for it._

## Github Pages

[Pizza Parlor Github Pages](https://patrick-dolan.github.io/pizza-parlor/)

## Technologies Used

* _HTML & CSS_
* _jQuery & Javascript_
* _Bootstrap_

## Description

_A pizza parlor site that allows you to add pizzas with different sizes and toppings and gives you a price for it._

## Setup/Installation Requirements

* _Download the repo or clone it to your computer._
* _navigate into the pizza-parlor folder and launch it by double clicking index.html_

## Known Bugs

* _No known issues_

## Contact Me

_Let me know if you run into any issues or have questions, ideas or concerns:_
_dolanp1992@gmail.com_

## License

_MIT_

Copyright (c) _2021_ _Patrick Dolan_  
  
## Tests  

**describe Order()**  
  
**Test:** "It should return the details on the order"  
**Code:**  
let order = new Order();  
order;
**Expected Output:** "Order {pizzas: {}, orderTotal: 0, currentId: 0}" 
  
**describe Order.prototype.addPizza(pizza)**  
  
**Test:** "It should add a pizza object to the order objects pizzas property"  
**Code:**  
let order = new Order();  
let pizza1 = new Pizza("small");  
order.addPizza(pizza1);  
order;  
**Expected Output:** "Order {pizzas: {pizza1}, orderTotal: 0, currentId: 1}"  
  
**describe Order.prototype.assignId()**  
  
**Test:** "It should assign a unique id to each pizza added to an order"  
**Code:**  
let order = new Order();  
let pizza1 = new Pizza("small");  
let pizza2 = new Pizza("medium");  
order.addPizza(pizza1);  
order.addPizza(pizza2);  
order.pizzas[2];  
**Expected Output:** "Pizza {size: "medium", toppings: [], toppingPrice: 0, pizzaPrice: 0, id: 2}"  
  
**describe Order.prototype.calculateOrderTotal()**  
  
**Test:** "It should add together the pizzaPrice properies of all objects inside pizzas object and output the number"  
**Code:**  
let order = new Order();  
let pizza1 = {size: "small", pizzaPrice: 13, toppings: ['cheese', 'pepperoni', 'bell_peppers'], toppingPrice: 3};  
let pizza2 = {size: "large", pizzaPrice: 18, toppings: ['cheese', 'pepperoni', 'bell_peppers', 'italian_sausage'], toppingPrice: 4};  
order.addPizza(pizza1);  
order.addPizza(pizza2);
order.calculateOrderTotal();
order.orderTotal;
**Expected Output:** "31"  
  
**describe Pizza(size, toppings)**  
  
**Test:** "It should return the details on the pizza"  
**Code:**  
let size = "small";  
let toppings = ["cheese", "pepperoni"];  
let pizza1 = new Pizza(size, toppings);  
pizza1;  
**Expected Output:** "Pizza {size: "small", toppings: ["cheese", "pepperoni"]}"  
  
**describe Pizza.prototype.calculateToppingPrice()**  
  
**Test:** "It should add together the cost for all toppings and add them to the pizza object"  
**Code:**  
let toppingsArray = ["cheese", "pepperoni", "bell_peppers"];  
pizza1.addToppings(toppingsArray);  
pizza1.calculateToppingPrice();  
pizza1.toppingPrice;  
**Expected Output:** "3"  
  
**describe Pizza.prototype.calculatePizzaPrice()**  
  
**Test:** "It should add together the cost of toppings and pizzas size to make a total for that pizza"  
**Code:**  
let pizza1 = {size: "small", toppings: ["cheese", "pepperoni", "bell_peppers"]}  
pizza1.calculatePizzaPrice();  
**Expected Output:** "13"  
  
**describe displayOrderDetails()**  
  
**Test:** "It should display information from the order object in the order details section"  
**Code:**  
displayOrderDetails();  
**Expected Output:** "{orderTotal: 11, pizzas: {1: Pizza}}"  
  
**Test:** "It should display the size of the pizza in the order details"  
**Code:**  
displayOrderDetails();  
**Expected Output:** "Pizza (large)"  
  
**describe Pizza.prototype.fetchPizzaSizePrice()**  
  
**Test:** "It should return the pizza price according to size only"  
**Code:**  
let pizza1 = {size: "small", toppings: ["cheese", "pepperoni", "bell_peppers"]};  
pizza1.fetchPizzaSizePrice();  
**Expected Output:** "$10.00"  