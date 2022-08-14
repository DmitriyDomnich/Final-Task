import { fillings } from './Fillings.js';

export class Hamburger {
  tagriks = 0;
  kals = 0;

  constructor(tagriks, kals, fillingType, additives) {
    this.price = tagriks;
    this.kallories = kals;

    try {
      const filling = this.#checkFilling(fillingType);
      if (filling) {
        this.kallories = filling.kals;
        this.price = filling.tagriks;
      } else {
        throw new Error("Filling doesn't exist.");
      }
      if (additives.length) {
        this.kallories = additives.reduce(
          (resultKals, additive) => resultKals + additive.kals,
          0
        );
        this.price = additives.reduce(
          (resultTagriks, additive) => resultTagriks + additive.tagriks,
          0
        );
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  set price(val) {
    this.tagriks += val;
  }
  get price() {
    return this.tagriks;
  }

  set kallories(val) {
    this.kals += val;
  }
  get kallories() {
    return this.kals;
  }

  #checkFilling(fillingType) {
    return (
      fillingType && fillings.find((filling) => filling.name === fillingType)
    );
  }
}
