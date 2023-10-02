//MOVIE

class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getDetails() {
    return `Title: ${this.title}, Studio: ${this.studio}, Rated: ${this.rating}`;
  }
}

const movie1 = new Movie("Jailer", "Sun Pictures", "5 Star");
console.log(movie1.getDetails());

//PERSON

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
  }
}

const person = new Person("Dhillipan", "Elumalai", 35);

console.log(person.getFullName());

//UBER CALCULATOR

class UberCalculator {
  constructor(baseFare, ratePerMileage, ratePerMinute) {
    this.baseFare = baseFare;
    this.ratePerMileage = ratePerMileage;
    this.ratePerMinute = ratePerMinute;
  }

  calculate(distance, duration) {
    const distancePrice = this.ratePerMileage * distance;
    const durationPrice = this.ratePerMinute * duration;
    const totalCost = this.baseFare + distancePrice + durationPrice;
    return totalCost;
  }
}

const myUber = new UberCalculator(25, 10, 5);
const distance = 10;
const duration = 20;
const totalPrice = myUber.calculate(distance, duration);
console.log(`Ride cost: ${totalPrice.toFixed(2)}`);
