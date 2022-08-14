import { Hamburger } from './Hamburger.js';

export class BigHamburger extends Hamburger {
  constructor(fillingType, additives) {
    const baseKals = 40;
    const baseTugriks = 100;
    super(baseTugriks, baseKals, fillingType, additives);
  }
}
