class Car {
  name!: string;
  year!: Date;

  constructor(name: string, year: Date);
  constructor(data: { name: string; year: Date });

  constructor(dateOrName: string | { name: string; year: Date }, year?: Date) {
    if (typeof dateOrName === "string") {
      this.name = dateOrName;
      this.year = year!;
    } else if (typeof dateOrName === "object") {
      this.name = dateOrName.name;
      this.year = dateOrName.year;
    }
  }
}

const toyoto = new Car("toyoto", new Date());
const kia = new Car({ name: "Kia5", year: new Date() });
console.log(toyoto);
console.log(kia);
