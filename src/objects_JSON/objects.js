class Recipe {
  constructor(
    cuisine,
    dishType,
    id,
    image,
    ingredients,
    instructions,
    name,
    servings,
    summary
  ) {
    this.cuisine = cuisine;
    this.dishType = dishType;
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.name = name;
    this.servings = servings;
    this.summary = summary;
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
