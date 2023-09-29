// tampa menggunakan parameter
function hallo(){
const a = 5 
const b = 5
const hasil = a + b;
console.log(hasil)
}
hallo()

// menggunakan parameter

function halllo(a,b){
    console.log (a * b)
}
halllo(10,2)

// fungsi ucapan
function ucapan(language, name){
    if(language === "English") {
    console.log(`Good Morning ${name}!`);
  } else if (language === "French") {
    console.log(`Bonjour ${name}!`);
  } else {
    console.log(`Selamat Pagi ${name}!`);
  }
}
ucapan("English","sabardi")



ucapan1("English","sabardi")


// function dapat menghasilkan output atau mengembalikan sebuah nilai
function hitung(angka1 ,angka2) {
    return angka1 + angka2 // nilai yang di kembalikan
}

let penjumlahan = hitung(10,30)
console.log(penjumlahan)

function ucapan1(language, name){
    if(language === "English") {
    return(`Good Morning ${name}!`);
  } else if (language === "French") {
    return(`Bonjour ${name}!`);
  } else {
    return(`Selamat Pagi ${name}!`);
  }
}
 
let ucapkan = ucapan("English", "sabardi")

//ketika statement return tereksekusi, maka fungsi akan langsung terhenti dan mengembalikan nilai.

const warna = function ucapkan(language, Nama) {
  if (language === "indonesia") {
    return "selamat pagi " + Nama + "👋"
  }else if (language === "malay") {
    return "hallo sudah" + Nama + "👋"
  }else if (language === "jepag") {
    return "Good Morning" + Nama + "👋"
  }else{
    return "belom di kenal" + Nama + "👋"
  }
}

console.log(warna("indonesia","indonesia"))

//memanfaatkan destructuring object
const user = {
  id : 24,
  firstname : "sabardi",
  lastname : "di"
}

function perkenalan({firstname, lastname}) {
  console.log(`${firstname} ${lastname}`)
}
perkenalan(user)


// memanfaatkan destructuring object
function exponentsFormula(baseNumber, exponent = 4) {
  const result = baseNumber ** exponent;
  console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(100);

// Rest Parameter
function sum(...numbers){
  let hasil = 6 //nilai yang  sudah di depinisikan
  for(let number of numbers){
    hasil *= number //oprator nya
  }
  return hasil
}

console.log(sum(1,2,3,4,5))