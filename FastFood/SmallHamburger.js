import { Hamburger } from './Hamburger.js';

export class SmallHamburger extends Hamburger {
  constructor(fillingType, additives) {
    const baseKals = 20;
    const baseTugriks = 50;
    super(baseTugriks, baseKals, fillingType, additives);
  }
}
