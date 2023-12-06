/**
 * Represents a recipe with various properties.
 */
class Recipe {
  /**
   * Create a Recipe object.
   * @param {string} cuisine - The cuisine of the recipe.
   * @param {string} dishType - The type of dish for the recipe.
   * @param {number} id - The ID of the recipe.
   * @param {string} image - The URL of the recipe image.
   * @param {Array} ingredients - The list of ingredients for the recipe.
   * @param {string} instructions - The cooking instructions for the recipe.
   * @param {string} name - The name of the recipe.
   * @param {number} servings - The number of servings for the recipe.
   * @param {string} summary - The summary or description of the recipe.
   */
  constructor(
    cuisine,
    dishType,
    id,
    image,
    ingredients,
    instructions,
    name,
    servings,
    summary,
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
    this.isSaved = false;
  }

  /**
   * Returns a string representation of the Recipe object.
   * @returns {string} A string representation of the Recipe.
   */
  toString() {
    return (
      this.cuisine + ', ' +
      this.dishType + ', ' +
      this.id + ', '  +
      this.image + ', ' +
      this.ingredients + ', ' +
      this.instructions + ', ' +
      this.name + ', ' +
      this.servings + ', ' +
      this.summary
    );
  }
}

export { Recipe };
