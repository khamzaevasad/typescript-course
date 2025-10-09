class Car {
  name: string;
  year: Date;
  constructor(name: string, year: Date) {
    this.name = name;
    this.year = year;
  }
}

const toyoto = new Car("Toyoto", new Date("2025-10-12"));
console.log(toyoto);
toyoto.name = "Toyoto Corolla";
console.log(toyoto);

const kia = new Car("Sorrento", new Date("2024-12-10"));
console.log(kia);
