const cars: string[] = ["mers", "bmw", "audi"]; // string
const numbers: number[] = [1, 2, 3, 4]; // number
const boolen: boolean[] = [false, true]; // boolean

// faqatgina stringa oid metodlar chiqadi
const upperCase = cars
  .map((car) => car.toUpperCase())
  .filter((car) => car.startsWith("B"));
// console.log(upperCase);

const result = numbers.map((num) => `Number ${num}`); //type number edi map orqali stringga o'tdi
// console.log(result);

// uniontype

const list: (number | string)[] = [1, "hello", 2, "world"];
// console.log(list);

// tupple
const person: [number, string] = [25, "Leo"];
// console.log(person[0], person[1]);
person.push("Asad"); //push orqali element qo'shish mumkin

// tupple | union type

let cordinates: [number, string | number] = [12, 27];
// console.log(1, cordinates);
cordinates = [12, "earth"];
// console.log(2, cordinates);

// function with tupple

function getInfo(): [number, string] {
  return [21, "hello"];
}
const logger = getInfo();
// console.log(logger[0]);
// console.log(logger[1]);
const [age, name] = logger;
// console.log(name, age);

// xulosa tupple bu aniq uzunlikdagi massiv (array xisoblanadi)
