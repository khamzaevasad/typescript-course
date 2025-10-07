function getName(firstName: string, lastName: string): string {
  return `Hello ${firstName} ${lastName}`;
}
const person1 = getName("Asad", "Khamzaev");
// console.log(person1);

const checkAdult = (age: number): boolean => {
  if (age >= 18) {
    return true;
  }
  return false;
};

const isAdult = checkAdult(10);
// console.log(isAdult);
