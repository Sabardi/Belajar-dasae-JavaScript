/**
 * Object = tipe data yang dapat menyimpan nilai const user = {}; (ini adalah ojek{})
 *  key harus bertipe string dan di tulis sebelum titik (:) dua 
 */
let Object = {kay1: "value1",kay2: "value2",kay3: "value3",} //key harus bertipe string
console.log(Object);  
const user = {
    Nama : "asep",
    lastname : "udin",
    Umur : 20
}
console.log(`hallo, Nama saya ${user.Nama} ${user.lastname}`)
console.log(`Umur saya ${user.Umur}}`)

//atau mengguakan bracet {""}
console.log("#######")
const usrname = {
    Namanya : "sabardi",
    lastnamenya :"Bardi",
    umurnya : 19,
    "home world":"Tatoline"
}
console.log(`Hallo Nama saya ${usrname.Namanya}`)
console.log(`Hallo Nama saya ${usrname.umurnya}tahun`)
console.log(`Hallo Nama saya ${usrname["home world"]}`)

console.log("#######")//mengubah mengggunakan oprator penegasan (=)
const motor = {
    Nama : "falkon",
    jenis : "roda 2",
    kecepetan : 120,
    warna : "biru"
}
motor.warna =  "hijau muda"
motor["kecepetan"] = 150 //bebas pilih
motor.kecepetan = 250 //bebas pilih
motor.kelas = "luar biasa" // properti yang di tambahkan 
console.log (motor)

console.log ("======")

delete motor.jenis //menghapus propety pada objek
console.log (motor)

