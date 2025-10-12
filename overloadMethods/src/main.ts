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
  providers: string[];

  constructor(id: Provider) {
    this.id = id;
    this.status = Status.Pending;
    this.createdAt = new Date();
    this.updateAt = new Date();
    this.providers = [];
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
  getProvider(provider: string): void;
  getProvider(providers: string[]): void;
  getProvider(providerOrproviders: string | string[]): void {
    if (typeof providerOrproviders === "string") {
      this.providers.push(providerOrproviders);
    } else {
      this.providers = this.providers.concat(providerOrproviders);
    }
  }
}

const payme = new Payment(Provider.Payme);

payme.getProvider("payme");
console.log(payme.providers);
payme.getProvider(["click", "payme"]);
console.log(payme.providers);
