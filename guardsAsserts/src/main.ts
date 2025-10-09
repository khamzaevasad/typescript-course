// type casting (type assertion) -- tur bilan ishlashj
// type guards -- turni tekshirish
// asserts -- tasdiqlash

let message: unknown = 213;

// Angle bracket syntax
let strLength: number = (<string>message).length;
// console.log(strLength);

// as syntax
let strLength1: number = (message as string).length;
// console.log(strLength1);

class Dog {
  bark() {
    console.log("wow");
  }
}

class Cat {
  meow() {
    console.log("meow");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound(new Dog());
makeSound(new Cat());

interface Car {
  speed: number;
}
interface Plane {
  altitude: number;
}

let car: Car = {
  speed: 120,
};

let air: Plane = {
  altitude: 1200,
};

function getInfo(vehicle: Car | Plane) {
  if ("speed" in vehicle) {
    console.log(vehicle.speed);
  } else {
    console.log(vehicle.altitude);
  }
}

getInfo(air);

// type assertion
let value: unknown = "hello world";
let valLength: number = (<string>value).length;
// console.log(valLength);

function throwError(msg: string): never {
  throw new Error("value is not number");
}

function logNumber(val: unknown): asserts val is number {
  if (typeof val !== "number") {
    throwError("value is not number");
    // console.log("val", val);
  }
}

let age: unknown = 20;
logNumber(age);
console.log(age + 12);
