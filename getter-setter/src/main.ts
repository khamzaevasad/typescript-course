class Employee {
  private _salary = 0;

  constructor(initialsalary: number) {
    this.salary = initialsalary;
  }

  set salary(num: number) {
    this._salary = num * 100;
  }

  get salary(): number {
    return this._salary;
  }
}

const john = new Employee(10);
console.log(john.salary);
