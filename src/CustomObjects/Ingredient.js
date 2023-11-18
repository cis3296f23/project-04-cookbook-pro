class Ingredient {
  constructor(
    amount,
    id,
    name,
    units
  ) {
    this.amount = amount,
    this.id = id,
    this.name = name,
    this.units = units,
    this.isSaved = false;
  }
  toString() {
    return (
      this.amount + ', ' +
      this.id + ', ' +
      this.name + ', ' +
      this.units
    )
  }
}

export { Ingredient };
