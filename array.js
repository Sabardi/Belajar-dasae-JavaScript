/** fungsi dalam array  
 * push() => akan menambahkan data di akhir array
 * pop() untuk mengeluarkan data terakhir di array
 * unshift() menambahkan element di awal array
 * delete untuk menghapus data di dalam array nya
 * splice() untuk menghapus data di array nya langsung dimana indek nya dimulai
 * splice() bisa melakukan penyisipan data di antara idex array
 * */
let data = [
    "Cokelat", 20, 40, "apel"
]
data.push(10)
data.pop()
data.push("masukin ini di akhir")
data.unshift("masukan ini di awal array")
delete data[1]
// data.splice([5])
data.splice(1,3,"hallo")
console.log(data)
console.log(data[4])
console.log("panjang data nya adalah : "+ data.length) //leng berfungsi untuk mengetahui banyak data nya
console.log(data)