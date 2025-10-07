// litteral type tsda malum bir qiymarlarni aniq type sifatida belgilash imkonini beradi && bu o'zgaruvchi yoki parametr faqatgina oldindan belgilangan typelarda bo'lishini taminlaydi

let status: "success" | "error" | "loading";
status = "loading";
status = "error";
status = "success";
// console.log(status);

enum STATUS {
  SUCCESS,
  ERROR,
}

function getStatus(status: STATUS): "success" | "error" {
  if (status === STATUS.SUCCESS) {
    return "success";
  } else {
    return "error";
  }
}

console.log(getStatus(STATUS.SUCCESS));

type Fruit = "apple" | "banana";

function getFruit(fruit: Fruit): Fruit {
  if (fruit === "apple") {
    return "apple";
  } else {
    return "banana";
  }
}
console.log(getFruit("apple"));
