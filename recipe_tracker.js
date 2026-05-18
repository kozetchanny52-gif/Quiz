let recipes=[];
const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: ""
};
const recipe2 = {
  name: "Chicken Curry",
  ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: ""
};
const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: ""
};
let recipe1name=recipe1.name
console.log(recipe1name)
let recipe2cookingTime=recipe2.cookingTime
console.log(recipe2cookingTime)
let recipe3Ingredients=recipe3.ingredients
recipes.push(recipe1,recipe2,recipe3)
const getTotalIngredients=(ingredients)=>{return ingredients.length
}
for(let rcp of recipes){
    rcp.totalIngredients=getTotalIngredients(rcp.ingredients)
    console.log(getTotalIngredients(rcp.ingredients))
}
const getDifficultyLevel=(cookingTime)=>
{if (cookingTime<=30){
    return "easy"
}else if(cookingTime<=60){
    return "medium"
}else{
    return "hard"
}
}
for(let rcp of recipes){
    rcp.difficultyLevel=getDifficultyLevel(rcp.cookingTime)
    console.log(getDifficultyLevel(rcp.cookingTime))
}
console.log(recipe1,recipe2,recipe3)