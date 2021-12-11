// Business Logic for Order
function Order() {
  this.pizzas = {};
}
Order.prototype.addPizza = function(pizza) {
  this.pizzas[pizza.size] = pizza;
};
// Business Logic for Pizzas
function Pizza(size) {
  this.size = size;
}
Pizza.prototype.addToppings = function(toppings) {
  this.toppings = toppings;
};
Pizza.prototype.calculateToppingPrice = function() {
  this.toppingPrice = this.toppings.length;
};
//Global Variables
let order = new Order;
let pizza1 = new Pizza("small");