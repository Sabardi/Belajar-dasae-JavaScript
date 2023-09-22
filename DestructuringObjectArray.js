const Profile = {
    nama : "sabar",
    lastnama : "doio",
    umur : 10
}
let nama = "budi";
let umur = 20;

// menginisialisasi nilai baru melalui destructuring object
({nama, umur} = Profile);

console.log(nama);
console.log(umur);