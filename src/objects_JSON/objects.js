class Recipe {
  constructor(
    id,
    name,
    ingredients,
    instructions,
    image,
    summary,
    servings,
    cuisine,
    dishType
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.summary = summary;
    this.servings = servings;
    this.cuisine = cuisine;
    this.dishType = dishType;
  }
}

class Ingredient {
  constructor(id, name, amount, unit, measures, aisle) {
    this.name = name;
    this.quantity = quantity;
    this.unit = unit;
  }
}

export { Recipe, Ingredient };
