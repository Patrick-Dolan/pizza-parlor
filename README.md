# _Pizza Parlor_

#### By _**Patrick Dolan**_

#### _A web app that lets you build a pizza and get a price for it._

## Technologies Used

* _HTML & CSS_
* _jQuery & Javascript_
* _Bootstrap_

## Description

_A pizza parlor site that allows you to choose a size pizza and the different toppings you want on the pizza and gives you a price for it._

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
**Expected Output:** "Order {pizzas: {}}" 
  
**describe Order.prototype.addPizza(pizza)**  
  
**Test:** "It should add a pizza object to the order objects pizzas property"  
**Code:**  
let order = new Order();  
let pizza1 = new Pizza("small");  
order.addPizza(pizza1);  
order;  
**Expected Output:** "Order {pizzas: {pizza1}}"  
  
**describe Pizza(size)**  
  
**Test:** "It should return the details on the pizza"  
**Code:**  
let size = "small";  
let pizza1 = new Pizza(size)  
pizza1;  
**Expected Output:** "Pizza {size: "small"}"  
  
**describe Pizza.prototype.addToppings(toppings)**  
  
**Test:** "It should add toppings array to pizza object"  
**Code:**  
let toppingsArray = ["cheese", "pepperoni", "bell_peppers"];  
pizza1.addToppings(toppingsArray);  
pizza1.toppings;  
**Expected Output:** "["cheese", "pepperoni", "bell_peppers"]"  
  
**describe Pizza.prototype.calculateToppingPrice()**  
  
**Test:** "It should add together the cost for all toppings and add them to the pizza object"  
**Code:**  
let toppingsArray = ["cheese", "pepperoni", "bell_peppers"];  
pizza1.addToppings(toppingsArray);  
pizza1.calculateToppingPrice();  
pizza1.toppingPrice;  
**Expected Output:** "3" 