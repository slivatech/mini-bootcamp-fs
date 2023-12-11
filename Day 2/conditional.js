let makanan = "";

const tipeMakanan = "terserah";

// truthy
const stringTruthy = "string"; // kalo string ada isinya, maka true
const numberTruthy = 1; // kalo number lebih dari 0, maka true
const booleanTruthy = true; // kalo boolean true, maka true

// falsy
const stringFalsy = ""; // kalo string kosong, maka false
const numberFalsy = 0; // kalo number 0, maka false
const booleanFalsy = false; // kalo boolean false, maka false

if (stringTruthy) {
  makanan = "Ikan gurame";
} else if (numberFalsy) {
  makanan = "Bakso";
} else {
  makanan = "Nasi goreng";
}

console.log(makanan);
