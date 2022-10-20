
var btnSip = document.getElementById('button-Sip');
var btnChow = document.getElementById('button-Chow');
var sipInput;
var chowInput;
console.log(sipInput);
//food api
const foodOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '60dd583af3msh0fe25a5f1111f27p17ad94jsn0edfe9da4826',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};
//drink api
const drinkOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '60dd583af3msh0fe25a5f1111f27p17ad94jsn0edfe9da4826',
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
  }
};
//this button is for the sip column
btnSip.addEventListener('click', function () {
  sipInput = document.getElementById('box1').value;
  console.log(sipInput);
  var drinkUrl = 'https://the-cocktail-db.p.rapidapi.com/search.php?s=' + sipInput;
  fetch(drinkUrl, drinkOptions)
    .then(function (response) {
      console.log("response is good");
      if (response.ok) {
        response.json().then(function (data) {
          for (var i = 0; i < data.drinks.length; i++) {
            displayDrinks(data.drinks[i].strDrinkThumb, data.drinks[i].strDrink, data.drinks[i].strInstructions);
          }
        });
      };
    })
}
);
//this section is the the chow column
btnChow.addEventListener('click', function () {
  chowInput = document.getElementById('box2').value;
  console.log(chowInput);
  var foodUrl = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=' + chowInput;
  console.log();
fetch(foodUrl, foodOptions)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
fetch(foodUrl, foodOptions)
  .then(function (response) {
    console.log("response is good for food");
    if (response.ok) {
      response.json().then(function (data) {
        console.log();
        chowInput = chowInput.toLowerCase();
        console.log(chowInput);
        for (var i = 18; i < data.results.length; i++) {
          displayFood(data.results[i].thumbnail_url, data.results[i].name, data.results[i].description);
          console.log(data.results[i].thumbnail_url, data.results[i].name, data.results[i].description);
        }
      });
    };
  })
});
// this function diplays all the foods that were relevant to the search
function displayFood(image, meal, howTo)
{
  console.log(image);
  var columnChowing = document.querySelector("#chowing");
  console.log(columnChowing);
  //to display the information
  var chowAncestor = document.createElement("div");
  chowAncestor.classList.add("tileis-ancestor");
  chowAncestor.setAttribute("id", "chow1");
  columnChowing.appendChild(chowAncestor);
  var chowParent1 = document.createElement("div");
  chowParent1.classList.add("tileis-parent");
  chowParent1.setAttribute("id", "chowImage");
  chowAncestor.appendChild(chowParent1);
  var foodImage = document.createElement("img");
  foodImage.src = image;
  chowParent1.appendChild(foodImage);
  var chowChild1 = document.createElement("div");
  chowChild1.classList.add("tileis-childbox");
  chowParent1.appendChild(chowChild1);
  var chowParent2 = document.createElement("div");
  chowParent2.classList.add("tileis-parent");
  chowParent2.setAttribute("id", "chow2");
  chowAncestor.appendChild(chowParent2);
  var chowChild2 = document.createElement("div");
  chowChild2.classList.add("tileis-childbox");
  chowParent2.appendChild(chowChild2);
  var chowDesTitle = document.createElement("p");
  chowDesTitle.classList.add("title");
  chowDesTitle.innerHTML = meal;
  var chowDescription = document.createElement('p');
  chowDescription.innerHTML = howTo;
  chowChild2.appendChild(chowDesTitle);
  chowChild2.appendChild(chowDescription);
}
// this function diplays all the drinks that were relevant to the search
function displayDrinks(image, liquor, howTo) {
  console.log(image);
  var columnSipping = document.querySelector("#sipping");
  console.log(columnSipping);
  //to display the information
  var sipAncestor = document.createElement("div");
  sipAncestor.classList.add("tileis-ancestor");
  sipAncestor.setAttribute("id", "sip1");
  columnSipping.appendChild(sipAncestor);
  var sipParent1 = document.createElement("div");
  sipParent1.classList.add("tileis-parent");
  sipParent1.setAttribute("id", "sipImage");
  sipAncestor.appendChild(sipParent1);
  var drinkImage = document.createElement("img");
  drinkImage.src = image;
  sipParent1.appendChild(drinkImage);
  var sipChild1 = document.createElement("div");
  sipChild1.classList.add("tileis-childbox");
  sipParent1.appendChild(sipChild1);
  var sipParent2 = document.createElement("div");
  sipParent2.classList.add("tileis-parent");
  sipParent2.setAttribute("id", "sip2");
  sipAncestor.appendChild(sipParent2);
  var sipChild2 = document.createElement("div");
  sipChild2.classList.add("tileis-childbox");
  sipParent2.appendChild(sipChild2);
  var sipDesTitle = document.createElement("p");
  sipDesTitle.classList.add("title");
  sipDesTitle.innerHTML = liquor;
  var sipDescription = document.createElement('p');
  sipDescription.innerHTML = howTo;
  sipChild2.appendChild(sipDesTitle);
  sipChild2.appendChild(sipDescription);
}