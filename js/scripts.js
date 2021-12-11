// Business Logic for Order
function Order() {
  this.pizzas = {};
  this.currentId = 0;
}
Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
};
Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
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