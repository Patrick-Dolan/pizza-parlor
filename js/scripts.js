// Business Logic for Order
function Order() {
  this.pizzas = {};
}
// Business Logic for Pizzas
function Pizza(size) {
  this.size = size;
}
//Global Variables
let order = new Order;
let pizza1 = new Pizza("small");