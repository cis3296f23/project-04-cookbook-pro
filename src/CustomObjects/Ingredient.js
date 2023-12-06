/**
 * Represents an ingredient with various properties.
 */
class Ingredient {
  /**
   * Create an Ingredient object.
   * @param {number} amount - The amount of the ingredient.
   * @param {number} id - The ID of the ingredient.
   * @param {string} name - The name of the ingredient.
   * @param {string} unit - The unit of measurement for the ingredient.
   */
  constructor(
    amount,
    id,
    name,
    unit
  ) {
    this.amount = amount;
    this.id = id;
    this.name = name;
    this.unit = unit;
    this.isSaved = false;
  }

  /**
   * Returns a string representation of the Ingredient object.
   * @returns {string} A string representation of the Ingredient.
   */
  toString() {
    return (
      this.amount + ', ' +
      this.id + ', ' +
      this.name + ', ' +
      this.unit
    );
  }
}

export { Ingredient };
