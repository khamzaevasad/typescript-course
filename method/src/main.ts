class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greeting(): string {
    return `hello my name is ${this.name} I am ${this.age} years old`;
  }
}

// const user1 = new Person("Leo", 25);
// const user2 = new Person("Martin", 25);
// console.log(user1.greeting());

enum Status {
  Pending,
  Approved,
  Rejected,
}

enum Provider {
  Uzum,
  Click,
  Payme,
}

class Payment {
  id: Provider;
  status: Status;
  createdAt: Date;
  updateAt: Date;

  constructor(id: Provider) {
    this.id = id;
    this.status = Status.Pending;
    this.createdAt = new Date();
    this.updateAt = new Date();
  }

  getLifeTime(): number {
    return new Date().getTime() - this.createdAt.getTime();
  }

  rejectPayment() {
    if (this.status === Status.Approved) {
      throw new Error("Payment is already approved");
    }
    this.status = Status.Rejected;
    this.updateAt = new Date();
  }
}

const payme = new Payment(Provider.Payme);

setTimeout(() => {
  payme.rejectPayment();

  console.log(payme);

  const duration = payme.getLifeTime();
  console.log(duration);
  console.log(payme);
}, 1000);
