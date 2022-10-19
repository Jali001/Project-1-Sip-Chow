
var btnSip = document.getElementById('button-Sip');
var btnChow = document.getElementById('button-Chow');
var sipInput = document.getElementById("box1");
var sipTest = sipInput.value.toLowerCase();
console.log(sipTest);
const testText = "This is a test to see if the format link is established";


console.log(btnSip);


function displayDrinks(){
var columnSipping = document.querySelector("#sipping");

console.log(columnSipping);



var sipAncestor = document.createElement("div");

sipAncestor.classList.add("tileis-ancestor");

sipAncestor.innerHTML = testText;

sipAncestor.setAttribute("id","sip1");

console.log(sipAncestor);

columnSipping.appendChild(sipAncestor);
console.log(sipAncestor);

var sipParent1 = document.createElement("div");

sipParent1.classList.add("tileis-parent");

sipParent1.setAttribute("id","sip2");

sipAncestor.appendChild(sipParent1);


var sipChild1 = document.createElement("div");

sipChild1.classList.add("tileis-childbox");

sipParent1.appendChild(sipChild1);


var sipParent2 = document.createElement("div");

sipParent2.classList.add("tileis-parent");

sipParent2.setAttribute("id","sip2");

sipAncestor.appendChild(sipParent2);


var sipChild2 = document.createElement("div");

sipChild2.classList.add("tileis-childbox");

sipParent2.appendChild(sipChild2);

var sipDesTitle = document.createElement("p");
sipDesTitle.classList.add("title");
sipDesTitle.innerHTML = "test";

sipChild2.appendChild(sipDesTitle);

}
//food api
const foodOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '60dd583af3msh0fe25a5f1111f27p17ad94jsn0edfe9da4826',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', foodOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//drink api
const drinkOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '60dd583af3msh0fe25a5f1111f27p17ad94jsn0edfe9da4826',
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }
    };
    
    fetch(drinkUrl)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

//food api variable
var foodUrl = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
//drink api variable 
var drinkUrl = 'https://the-cocktail-db.p.rapidapi.com/search.php?' + sipinput;

//change to getSipData


  //here is the button response for the Sip button
  btnSip.addEventListener('click',runSipImage)


  function sipDropDown()
  {
    fetch(drinkUrl, drinkOptions)
  .then(function (response) {
    console.log("resposne is good");
      if (response.ok) {
        response.json().then(function (data) 
        {
          const mySipArray =[];
          for (var i =0; data.drinks.length; i++)
          {
            for(var f =0;ls
              )
          }
        
        
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
  }
function runSipImage()
{
  console.log("code is running in the the function");
  fetch(drinkUrl, drinkOptions)
  .then(function (response) {
    console.log("resposne is good");
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);

         console.log(data.drinks[0].strDrinkThumb)

         for (var i = 0; i < data.drinks.length; i++)
         {
          var firstimage = data.drinks[0].strDrinkThumb;
         imageSip.src = firstimage;
         }
  
        
  
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
}

 //here is the button response for the Chow button
 btnSip.addEventListener('click',runChowImage)

 function runChowImage()
{
  console.log("code is running in the the function");
  fetch(foodUrl, foodOptions)
  .then(function (response) {
    console.log(data);
    console.log("resposne is good");
      
        
  
       
      } 
        
      
    )
}
 



/*
fetch(drinkUrl, drinkOptions)
.then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
       console.log(data.drinks[0].strDrinkThumb)

       var firstimage = data.drinks[0].strDrinkThumb;
       imageSip.src = firstimage;

      });
    } else {
      alert('Error: ' + response.statusText);
    }
  })
*/


/*
var displayRepos = function (repos) {
    if (repos.length === 0) {
      repoContainerEl.textContent = 'No repositories found.';
      return;
    }

    var repoDrink Image
  
    
  
    
      
  
      var repoEl = document.createElement('div');
      repoEl.classList = 'list-item flex-row justify-space-between align-center';
  
      var titleEl = document.createElement('span');
      titleEl.textContent = repoName;
  
      repoEl.appendChild(titleEl);
  
      var statusEl = document.createElement('span');
      statusEl.classList = 'flex-row align-center';
  
      if (repos[i].open_issues_count > 0) {
        statusEl.innerHTML =
          "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
      } else {
        statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
      }
  
      repoEl.appendChild(statusEl);
  
      repoContainerEl.appendChild(repoEl);
    
  };
  */
