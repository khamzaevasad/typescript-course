enum Website {
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
}

let person: {
  id: number;
  name: string;
  username: string;
  email: [string, string];
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: number;
  website: Website;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
} = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: ["Sincere@april.biz", "info@gmail.com"],
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: 92998,
    geo: {
      lat: 373159,
      lng: 81496,
    },
  },
  phone: 242342,
  website: Website.FACEBOOK,
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
