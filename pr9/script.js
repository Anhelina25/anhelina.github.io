let arr1 = [
  1,
  5,
  9,
  4,
  {
    name: "Сірко Ангеліна",
    mark: 98,
    subject: "JS",
  },
  function (num) {
    return num ** 4;
  },
  function (obj) {
    console.log(obj.name);
  },
  -6,
  14,
];

console.log("arr1:");
arr1.forEach((item) => console.log(item));

arr1.splice(arr1.indexOf(5), 1, 8);

arr1.splice(arr1.indexOf(4), 0, "Hello");

let arr2 = arr1.slice(arr1.findIndex((item) => typeof item === "function"));

console.log("arr2:");
arr2.forEach((item) => console.log(item));

let arr3 = arr1.slice(
  0,
  arr1.findIndex((item) => typeof item === "function")
);

let arr3Reversed = arr3.slice().reverse();

console.log("arr3Reversed:");
arr3Reversed.forEach((item) => console.log(item));

console.log("arr1.indexOf:", arr1.indexOf(-6));

let filteredArr1 = arr1.filter((item) => typeof item === "number" && item > 4);
console.log("Відфільтровані елементи в arr1:", filteredArr1);

let objIndex = arr1.findIndex((item) => typeof item === "object");
arr1[objIndex](arr1[objIndex]);

let negativeSixIndex = arr1.indexOf(-6);
let powerOfNegativeSix =
  arr1[arr1.findIndex((item) => typeof item === "function")](negativeSixIndex);
console.log("4 степінь від -6:", powerOfNegativeSix);

console.log("Bміст arr1 з використанням for...in:");
for (let index in arr1) {
  console.log(arr1[index]);
}

console.log("prop in arr1:");
for (let index in arr1) {
  if (typeof arr1[index] === "object") {
    for (let prop in arr1[index]) {
      console.log(prop);
    }
  }
}

console.log("Bміст arr1 з використанням for...of:");
for (let item of arr1) {
  console.log(item);
}

arr1.version = "1.0.0";

console.log(
  "Bміст arr1 за допомогою for...in після додавання властивості version:"
);
for (let index in arr1) {
  console.log(arr1[index]);
}

console.log(
  "Bміст аrr1 з використанням for...of після додавання властивості version:"
);
for (let item of arr1) {
  console.log(item);
}

let petryk = {
  name: "Petryk",
  skill: "JS",
  level: "junior",
};

let mychajlyk = {
  name: "Mychajlyk",
  skill: "HTML/CSS",
  level: "middle",
};

let volodyk = {
  name: "Volodyk",
  skill: "TS",
  level: "trainee",
};

let map1 = new Map();
map1.set(petryk.name, petryk);
map1.set(mychajlyk.name, mychajlyk);
map1.set(volodyk.name, volodyk);

console.log("Чи є Іванко в першій мапі?", map1.has("Ivanko"));

console.log("Чи є Володик в першій мапі?", map1.has("Volodyk"));

console.log("Ключі першої мапи:");
for (let key of map1.keys()) {
  console.log(key);
}

map1.delete("Mychajlyk");

console.log("Дані елементів у першій мапі:");
for (let [name, { level, skill }] of map1.entries()) {
  console.log(`${name} - ${level} в ${skill}`);
}

let set1 = new Set();
set1.add(petryk);
set1.add(mychajlyk);
set1.add(volodyk);

let antypko = {
  name: "Antypko",
  skill: "PHP",
  level: "senior",
};

console.log("Чи є Антипко в першій множині?", set1.has(antypko));

console.log("Чи є Михайлик в першій множині?", set1.has(mychajlyk));

console.log("Елементи першої множини:");
for (let item of set1) {
  console.log(item);
}

set1.delete(volodyk);

console.log("Дані елементів першої множини:");
for (let { name, level, skill } of set1) {
  console.log(`${name} - ${level} в ${skill}`);
}