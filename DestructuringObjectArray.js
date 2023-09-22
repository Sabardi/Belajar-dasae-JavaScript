const Profile = {
    nama : "sabar",
    lastnama : "doio",
    umur : 10
}
let nama = "budi";
let umur = 20;

// menginisialisasi nilai baru melalui destructuring object
({nama, umur, hallo} = Profile);//menambahkan hallo untuk Default Values
({nama, umur, hallo = "p"} = Profile);//memberikaan nilai deful supaya terbaca hallo ini

console.log(nama);
console.log(umur);
console.log(hallo);

console.log("===Destructuring Array===")
// Destructuring Array
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
// console.log(firstFood)
// console.log(secondFood)
// console.log(thirdFood)
// console.log(fourthFood)
const [,, thirdFood] = favorites; //
console.log(thirdFood)
