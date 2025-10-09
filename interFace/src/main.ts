// type va interface asosiy farqlari interface asosan objlar bilan birga ishlatilinadi
interface Person {
  fName: string;
  lName: string;
  wife?: Person;
}

interface Employe {
  company: string;
  role: string;
}

interface WorkerPerson extends Person, Employe {
  age: number;
}

let list: WorkerPerson[] = [
  {
    fName: "Asadbek",
    lName: "Khamzaev",
    age: 25,
    company: "Naver",
    role: "CTO",
  },
];

console.log(list);

interface User {
  [key: string]: string | number | boolean;
}

const user1: User = {
  name: "Asadbek",
  age: 25,
  isMeried: false,
};

// void

function voidFunc(text: string): void {
  console.log(text);
}
// voidFunc("salom");

function callVoid(name: string, callback: (salom: string) => void) {
  callback("hello " + name);
}

const name = callVoid("Bekzod", (salom) => {
  console.log(salom);
});

console.log(name);

// optional
interface Calc {
  a: number;
  b: number;
  c: number;
}

function calc(data: Calc) {
  return data.a + data.b / data.c;
}
console.log(
  calc({
    a: 1,
    b: 2,
    c: 1,
  })
);
