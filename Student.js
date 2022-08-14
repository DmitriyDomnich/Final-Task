import { User } from './User.js';

export class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  getCourse() {
    const result = new Date().getFullYear() - this.year;
    return result > 0
      ? result < 6
        ? result + ' course'
        : 'Graduated'
      : 'Wrong input';
  }
}
