
const hello = (name) => {
  console.log("hello " + name);
};

const topla = (a, b) => a + b;

const cikar = (a, b) => a - b;

const user = {
  name: "nezih",
  sname: "karakoc",
  number: "007",
};

const users = [
  { name: "reco", sname: "isto", number: "008" },
  {
    name: "yuso",
    sname: "isto",
    number: "009",
  },
];

export { topla, cikar, users, user };
export default hello;

