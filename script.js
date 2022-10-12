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