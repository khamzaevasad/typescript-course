// any  lubboy tip
// unknown nomulam tip ishlatishdan oldin tekshirish kk

function logger(val: unknown) {
  if (typeof val === "string") {
    return val.split("");
  } else if (typeof val === "number") {
    return val.toFixed(2);
  }
}

// console.log(logger("hello"));
// console.log(logger(123));
// console.log(logger({ a: 2 }));

// type assartion

let value: unknown = "asadbek";
let str: string = value as string;
// console.log(str.split(""));

let admin: unknown = {
  name: "Leo",
  age: 25,
};

interface Admin {
  name: string;
  age: number;
}

if (typeof admin === "object") {
  const obj = admin as Admin;
  // console.log(obj.name);
}

// never tsda bir kod yoki function hechqachon bajarilmasa ts uni neverdeb belgiledi

function throwError(message: string): never {
  throw new Error(message);
}

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/uers");
    if (!response.ok) {
      throwError("serverda xatolik bor");
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    throwError("serverda xatolik bor");
  }
}

fetchData();
