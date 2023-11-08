
const food = document.getElementById('food');

//https://spoonacular.com/food-api/docs#Diets
const vegan = document.getElementById('vegan');

const searchBttn = document.getElementById('search');
const results = document.getElementById('results')

//https://spoonacular.com/food-api/console#Dashboard
const foodURL = new URL("https://api.spoonacular.com/recipes/complexSearch")
const apiKey = '6c45a96278964456a7260b2f667543c9'

console.log("button value=" + vegan.checked)

searchBttn.onclick = function() {
    getFoodRecipe()
    console.log(food.value)
}

async function getFoodRecipe(){

    results.innerHTML = ''

    const searchQuery = new URLSearchParams()
    searchQuery.append('apiKey', apiKey)
    searchQuery.append('query', food.value)

    if(vegan.checked){
        searchQuery.append('diet', 'vegan')
    }

    const fullUrl = `${foodURL}?${searchQuery.toString()}`

    console.log(fullUrl)

    const response = await fetch(fullUrl)
    const data = await response.json()
    
    console.log(data.results)

    data.results.forEach(function(recipe) {

        const propertyDiv = document.createElement('div');
        propertyDiv.textContent = `${recipe.title}`;
        results.appendChild(propertyDiv);

    })

}