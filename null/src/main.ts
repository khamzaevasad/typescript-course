let x: null = null;
console.log(x);

function checked(message: string | null) {
  if (message !== null) {
    console.log(message.toLowerCase());
  } else {
    console.log("bu yerda qiymat yoq");
  }
}
checked(null);

let userName: string | null = null;

let showUname = userName ?? "leo";
console.log(showUname);
