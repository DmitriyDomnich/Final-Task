export function Human(age, name, hobbies) {
  this.Age = age;
  this.name = name;
  this.hobbies = hobbies;
} // эти свойства могут быть разные для каждого экземпляра => храним их на уровне экземпляра

Human.prototype.sayHello = function () {
  return `Hello ${this.name}`;
};
Human.prototype.getFavouriteHobbyName = function () {
  return this.hobbies.reduce((favHobby, hobby) =>
    favHobby.k < hobby.k ? hobby : favHobby
  ).name;
}; // эти методы одинаковые для всех экземпляров, незачем создавать их для каждого объекта => храним на уровне функции-конструктора

export const sortHumansByAge = (isDesc = false) => {
  return isDesc ? (a, b) => b.Age - a.Age : (a, b) => a.Age - b.Age;
};
