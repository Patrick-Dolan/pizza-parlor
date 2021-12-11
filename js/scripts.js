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
Order.prototype.calculateOrderTotal = function() {
  let temp = 0;
  const pizzaKeys = Object.keys(this.pizzas);
  for(let i = 1; i <= pizzaKeys.length; i++) {
    temp += this.pizzas[i].pizzaPrice;
  }
  this.orderTotal = temp;
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
//let pizza1 = new Pizza("small");
// UI Logic
$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    let size = $("input:radio[name=pizzaSizes]:checked").val();
    let toppings = [];
    $.each($("input[name=pizzaToppings]:checked"), function() {
      toppings.push($(this) .val());
    });
    console.log(size);
    console.log(toppings);
  });
});