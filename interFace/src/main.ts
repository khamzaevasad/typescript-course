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
