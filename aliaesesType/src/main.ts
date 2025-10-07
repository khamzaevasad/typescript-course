// type alaesis tsda malum bir turga nom berish va qayta ishlatish uchun ishlatiladi va ayniqsa murakkab turlar bilan ishlaganda kodni soddalashtirishga yordam beradi

// soddaroq xolati
type ID = string | number;
let userId: ID;
userId = 123;
userId = "hello 123";
let productId: ID;
productId = 123;
productId = "apple123";

// obj xolati

type Person = {
  id: string | number;
  name: string;
  location: string;
  hobby: string[];
  isMerried: boolean;
  skills?: string[];
};

const user: Person = {
  id: "leo123",
  name: "LEO",
  location: "Korea",
  hobby: ["football", "swimming"],
  isMerried: true,
};

// console.log(user);

const admin: Person = {
  id: 123,
  name: "ADMIN",
  location: "USA",
  hobby: ["reading", "writing"],
  isMerried: false,
  skills: ["js", "react", "node"],
};

// console.log(admin);

type Logger = (message: string) => string;

const log: Logger = (value) => {
  return value.toUpperCase();
};
// console.log(log("hello"));

const test: Logger = function (value) {
  return value.toLowerCase();
};

// console.log(test("LEO"));

// intersection type

type User = {
  firstName: string;
  lastName: string;
  wife?: User; // recursive type
};

type Employee = {
  company: string;
  role: string;
};

type companyWorker = User & Employee;

let worker: companyWorker = {
  firstName: "Asad",
  lastName: "Khamzaev",
  company: "Samsung",
  role: "Cto",
};

let employee: Employee = {
  company: "google",
  role: "cto",
};

let worker1: User = {
  firstName: "admin",
  lastName: "1",
};

type PersonList = User[];

let persons: PersonList = [
  {
    firstName: "Bekzod",
    lastName: "Sadikov",
  },
  {
    firstName: "Olim",
    lastName: "Akmalov",
    wife: {
      firstName: "Lola",
      lastName: "Akramova",
    },
  },
];

console.log(persons);
