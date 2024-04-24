// Initial price of the burger
var wholeWheatBun = 10;

// Ingredients of the burger along with the price
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

// Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen every time the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

// Render functions for each ingredient
function renderPatty() {
  let patty = document.querySelector("#patty");
  if (state.Patty) {
    patty.style.display = "block";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  let cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    cheese.style.display = "block";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  let tomatoes = document.querySelector("#tomato");
  if (state.Tomatoes) {
    tomatoes.style.display = "block";
  } else {
    tomatoes.style.display = "none";
  }
}

function renderOnions() {
  let onions = document.querySelector("#onion");
  if (state.Onions) {
    onions.style.display = "block";
  } else {
    onions.style.display = "none";
  }
}

function renderLettuce() {
  let lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "block";
  } else {
    lettuce.style.display = "none";
  }
}

// Event listeners to toggle ingredient state
document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

// Challenge 1: Add/remove 'active' class to ingredient buttons
function renderButtons() {
  document.querySelector(".btn-patty").classList.toggle("active", state.Patty);
  document.querySelector(".btn-cheese").classList.toggle("active", state.Cheese);
  document.querySelector(".btn-tomatoes").classList.toggle("active", state.Tomatoes);
  document.querySelector(".btn-onions").classList.toggle("active", state.Onions);
  document.querySelector(".btn-lettuce").classList.toggle("active", state.Lettuce);
}

// Challenge 2: Show only selected ingredients on the chalkboard

function renderIngredientsBoard() {

  var chalkboard = document.querySelector(".menu-container");
  
  chalkboard.innerHTML = "";
  
  for (var ingredient in state) {
    if (state[ingredient]) {
      var listItem = document.createElement("p");
      listItem.textContent = ingredient;
      chalkboard.appendChild(listItem);
    }
  }
}

// Challenge 3: Display the price to the customer

function renderPrice() {
  let basePrice = 2 * wholeWheatBun;
  let pattyPrice = 80;
  let cheesePrice = 10;
  let tomatoPrice = 20;
  let onionPrice = 20;
  let lettucePrice = 20;
  var price = basePrice +
    (state.Patty ? pattyPrice : 0) +
    (state.Cheese ? cheesePrice : 0) +
    (state.Tomatoes ? tomatoPrice : 0) +
    (state.Onions ? onionPrice : 0) +
    (state.Lettuce ? lettucePrice : 0);
  document.querySelector(".price-details").innerText = "INR " + price;
}


// Initial rendering
renderAll();
