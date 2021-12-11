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
Pizza.prototype.calculatePizzaPrice = function() {
  (isNaN(this.toppingPrice) ? this.pizzaPrice = 0 : this.pizzaPrice = this.toppingPrice);
  switch (this.size) {
    case "small":
      return this.pizzaPrice += 10;
    case "medium":
      return this.pizzaPrice += 12;
    case "large":
      return this.pizzaPrice += 14;
    case "x-large":
      return this.pizzaPrice += 16;
  }
};
//Global Variables
let order = new Order;
let pizza1 = new Pizza("small");