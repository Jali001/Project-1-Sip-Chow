var btnSip = document.getElementById('button-Sip');
var imageSip = document.getElementById('imageSip');
console.log(btnSip);

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
    
    fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=vodka', drinkOptions)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

//food api variable
var foodUrl = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
//drink api variable 
var drinkUrl = 'https://the-cocktail-db.p.rapidapi.com/search.php?s=vodka';

//change to getSipData


  //here is the button response for the Sip button
  btnSip.addEventListener('click',runSipImage)

function runSipImage()
{
  console.log("code is running in the the function");
  fetch(drinkUrl, drinkOptions)
  .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);

         console.log(data.drinks[0].strDrinkThumb)

         for (var i = 0; i < data.drinks.length; i++)
         {
          var firstimage = data.drinks[i].strDrinkThumb;
         imageSip.src = firstimage;
         }
  
        
  
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
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