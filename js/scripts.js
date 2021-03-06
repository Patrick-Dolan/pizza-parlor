// Business Logic for Order
function Order() {
  this.pizzas = {};
  this.orderTotal = 0;
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
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.toppingPrice = 0;
  this.pizzaPrice = 0;
  this.id = 0;
}
Pizza.prototype.calculateToppingPrice = function() {
  this.toppingPrice = this.toppings.length;
};
Pizza.prototype.calculatePizzaPrice = function() {
  (isNaN(this.toppingPrice) ? this.pizzaPrice = 0 : this.pizzaPrice = this.toppingPrice);
  switch (this.size) {
    case "Small":
      return this.pizzaPrice += 10;
    case "Medium":
      return this.pizzaPrice += 12;
    case "Large":
      return this.pizzaPrice += 14;
    case "X-large":
      return this.pizzaPrice += 16;
  }
};
Pizza.prototype.fetchPizzaSizePrice = function() {
  switch (this.size) {
    case "Small":
      return "$10.00";
    case "Medium":
      return "$12.00";
    case "Large":
      return "$14.00";
    case "X-large":
      return "$16.00";
  }
};
// UI Logic
function displayOrderDetails(order) {
  let orderList = $("ol#orderList");
  let htmlForOrder = "";
  Object.keys(order.pizzas).forEach(function(key) {
    const pizza = order.pizzas[key];
    let toppings = "<ul>" + "<li>" + pizza.size + " <em>(+" + pizza.fetchPizzaSizePrice() + ")</em>" + "</li>";
    pizza.toppings.forEach(function(topping) {
      toppings += "<li>" + topping.split("_").join(" ") + " <em>(+$1.00)</em>" + "</li>"; 
    });
    toppings += "</ul>";
    htmlForOrder = "<li id=" + pizza.id + ">" + pizza.size + " Pizza $" + pizza.pizzaPrice.toFixed(2) + "</li>" + toppings;
  });
  orderList.append(htmlForOrder);
  $("#totalCostDiv").html("$" + order.orderTotal.toFixed(2));
}
// jQuery
$(document).ready(function() {
  let order = new Order;
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    let size = $("input:radio[name=pizzaSizes]:checked").val();
    let toppings = [];
    $.each($("input[name=pizzaToppings]:checked"), function() {
      toppings.push($(this) .val());
    });
    let pizza = new Pizza(size, toppings);
    pizza.calculateToppingPrice();
    pizza.calculatePizzaPrice();
    order.addPizza(pizza);
    order.calculateOrderTotal();
    $("#transactionSubmit button").prop("disabled", false);
    displayOrderDetails(order);
  });
  $("#transactionSubmit button").click(function() {
    $("#buildPizza").hide();
    $("#pizzaOrdered").slideDown();
    $("#transactionSubmit button").hide();
  });
});