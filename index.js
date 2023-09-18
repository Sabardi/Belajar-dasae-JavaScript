//Print helo
let Nama = "sabardi" ;
console.log("perkenalkan Nama saya",Nama)

//variabel dan tipe data

let name = "sabardi"
let lastname = "bahari"
let fullname = name + lastname
console.log("perkenalkan saya : ",fullname)

//oprator start
/*
penjumlahan
pengurangan
perkalian 
pembagian
sisa hasil bagi (%)
perpangkatan (**)
*/
let angka1 = 90
let angka2 = 20
let hitung = angka1 + angka2
let hitung1 = angka1 - angka2
let hitung2 = angka1 * angka2
let hitung3 = angka1 / angka2
let hitung4 = angka1 % angka2
let hitung5 = angka1 ** angka2
console.log("hasil dari penjumlahan angka1 dan angka2 =", hitung)
console.log("hasil dari pengurangan angka1 dan angka2 =", hitung1)
console.log("hasil dari perkalian angka1 dan angka2 =", hitung2)
console.log("hasil dari pembagian angka1 dan angka2 =", hitung3)
console.log("hasil dari sisa bagi angka1 dan angka2 =", hitung4)
console.log("hasil dari perpangkatan angka1 dan angka2 =", hitung5)
//oprator end

// Operator perbandingan start
/**
 * == membandingkan nilai / sama dengan
 * != tidak sama dengan 
 *  === membandingkan kedua nilai sama atau tidak sama
 * !== membandingkan kedua nilai tidak sama atau sama
 * > lebih besar 
 * < lebih kecil
 * >= lebih besar sama dengan
 * <= lebih kecil sama dengan
 *  
 */
// Comparison Operator end

// percabangan start
/**
 * if
 * if/else
 * if/elseif/else
 */

//if
const umur = 15;
if (umur < 20) {
    console.log("konten ini tidak bisa di akses")
}else {
    console.log("selamat menikmati")
}

//if/elsif
if (umur >= 20) {
    console.log("anda berhasil")
}else if (umur >= 18) {
    console.log("anda masuk tahap 1")
}else if(umur >= 15){
    console.log("anda masuk tahap 2")
}else{
    console.log("anda gagal")
}
// percabangan start

//swicth
const kelas = 16;
switch (kelas) {
    case 16:
        console.log("anda masuk sma")
        break;
    case  13:
        console.log("anda masuk smp")
        break;
    case  12:
        console.log("anda masih sd")
        break;
    default:
        console.log("silahkan cek umur anda")
        break;
}