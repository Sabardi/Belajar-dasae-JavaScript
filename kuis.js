/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.aman
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // output: 1
 *    minimal(3, 2) // output: 2
 *    minimal(3, 3) // output: 3
 *
 * 2. Buatlah sebuah function bernama findIndex yang menerima dua parameter, yaitu array dan number.
 *    Fungsi tersebut harus mengembalikan index dari angka yang sesuai pada array tersebut.
 *    Jika angka tidak ditemukan, maka kembalikan nilai -1.
 *
 *    contoh:
 *    findIndex([1, 2, 3, 4, 5], 3) // output: 2
 *    findIndex([1, 2, 3, 4, 5], 6) // output: -1
 *    findIndex([1, 2, 3, 4, 5], 5) // output: 4
 */

// Tulis kode di bawah ini
console.log("===kuis function===")
function minimal (a,b) {
    if(a === b){
      return a;
    } else if (a < b){
      return a;
    } else{
      return b;
    }
  }
  console.log(minimal(1, 4))
  console.log(minimal(3, 2))
  console.log(minimal(3, 3))

  console.log("====")
  function findIndex(array, number){

    for(let i = 0; i < array.length; i++)
      if(array[i]===number){
        return i;
      }
      return-1
  }
  
  console.log(findIndex([1, 2, 3, 4, 5], 3))
  
  console.log(findIndex([1, 2, 3, 4, 5], 6))
  
  console.log(findIndex([1, 2, 3, 4, 5], 5))

  // kuis
/**
 * TODO
 * 1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
 *    - Memiliki properti bernama "name"
 *       - Bertipe data string
 *       - Bernilai "Bakso Mang Dicoding".
 *    - Memiliki properti bernama "city"
 *       - Bertipe data string
 *       - Bernilai "Bandung".
 *    - Memiliki properti "favorite drink"
 *       - Bertipe data string
 *       - Bernilai "Es Teh".
 *    - Memiliki properti "favorite food"
 *       - Bertipe data string
 *       - Bernilai "Bakso".
 *    - Memiliki properti "isVegan"
 *       - Bertipe data boolean
 *       - Bernilai false.
 *
 * 2. Buatlah variabel bernama name.
 *    Kemudian isi dengan nilai name dari properti object restaurant
 * 3. Buatlah variabel bernama favoriteDrink.
 *    Kemudian isi dengan nilai "favorite drink" dari properti object
 *  restaurant
*/


// No 1
const restaurant = {
  name : "Bakso Mang Dicoding",
  city : "Bandung",
  "favorite drink" : "Es Teh",
  "favorite food" : "Bakso",
  isVegan : true
}

// No 2
const name = restaurant.name
console.log(name)
const city = restaurant.city
console.log(city)
// No 3
const favoriteDrink = restaurant["favorite drink"]//digunakan untuk mengakses key yang memiliki spasi atau karakter
console.log(favoriteDrink)

//kuis array
console.log("===kuis array===")

/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

const evenNumber = []
for (let i = 1; i <= 100; i++){
  if(i % 2 === 0){
    evenNumber.push(i)//menambahkan data di akhir array
  }
}
console.log(evenNumber)

console.log("===kuis map===")
/**
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */
const priceInJPY = 5000 // nilai priceinjpy harus  5000 dari perintah nya 

const currency = new Map([
  ["USD",14000],
  ["JPY",131],
  ["SGD",11000], 
  ["MYR",3500] 
])
console.log(currency)

const priceInIDR = priceInJPY * (currency.get("JPY"))
console.log(priceInIDR)