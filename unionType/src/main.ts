// union type
let id: string | number;
id = "123";
id = 123;
// id = false; <- error

function printId(id: number | string): void {
  console.log(`The id is ${id}`);
}
// printId(123);
// printId("hie123");

// type narrowing => turni tekshirish

function getVal(value: string | number): string | number {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toFixed(2);
  }
}
const val1 = getVal("hello");
const val2 = getVal(15);
// console.log(val1, val2);

// ex obj
function logError(error: { message: string } | { error: string }) {
  if ("message" in error) {
    console.log("Message", error.message);
  } else {
    console.log("Error", error.error);
  }
}
logError({ message: "HELLO WORLD" });
logError({ error: "ERROR WORLD" });

// ex array

function handleError(value: string | string[]) {
  if (Array.isArray(value)) {
    value.forEach((err) => console.log(err));
  } else {
    console.log(value.toUpperCase());
  }
}
console.log("=======");
handleError("Something went wrong!");
handleError(["ERROR 1", "ERROR 2"]);
