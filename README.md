# Satu Hari Satu skill 
# Satu Hari Satu pengetahuan
Array
-----
tipe data yang bisa menyimpan banyak data dalam 1 variabel
perbedaan array dengan object adalah array dimulai dari index 0 untuk mengakses data di dalam array nya.
namaArray.length = length berfungsi untuk mengetahui banyak data nya  

Spread Operator
---------------
Spread (menyebar) operator  dituliskan dengan tiga titik (...).

Destructuring Object & Array
----------------------------
Penulisan sintaksis destructuring object pada ES6 menggunakan object literal ({ }) di sisi kiri dari operator assignment.
Destructuring Assignment
------------------------
pada kasus tertentu mungkin kita perlu melakukannya pada variabel yang sudah dideklarasikan.
Saat melakukan destructuring assignment, kita perlu menuliskan destructuring object di dalam tanda kurung. Jika tidak menuliskan tanda kurung, tanda kurung kurawal akan membuat JavaScript mengira kita membuat block statement, sementara block statement tidak bisa berada pada sisi kiri assignment.

Default Values
--------------
Ketika mendestruksikan objek dan menetapkan variabel dengan nama yang bukan merupakan properti dari objek, maka nilai dari variabel tersebut menjadi undefined

Destructuring Array
-------------------
destructuring array bekerja berdasarkan posisi daripada penamaan propertinya.
Kita juga bisa memilih nilai pada index tertentu untuk destrukturisasi pada array Lebih lanjut, tanda koma (,) tetap diperlukan untuk menunjukkan posisi index-nya.

Destructuring Assignment
------------------------
Kita juga bisa melakukan destructuring assignment pada array. Namun, tidak seperti object, kita tidak perlu membungkusnya dengan tanda kurung.
Function
--------
function merupakan sebuah variabel yang berisi blok logika. dan blok kode nya akan di eksekusi jika di panggil

Parameter & Argument
-------------------
Parameter merupakan variabel yang didefinisikan sebagai input dari sebuah fungsi.
Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi. 
ex => function namafungsi(a,b){} (a dan b) merupakan parameter
function dapat menghasilkan output atau mengembalikan sebuah nilai (return)
ketika statement return tereksekusi, maka fungsi akan langsung terhenti dan mengembalikan nilai.

Expression Function
-------------------
expression adalah kode atau instruksi yang mengembalikan nilai, sehingga expression function bisa disimpan dalam sebuah variabel.

Function Parameter
------------------
Jika parameter dari fungsi adalah sebuah object, kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya

Arrow Function
--------------
Arrow function expression atau lebih dikenal sebagai arrow function. Arrow function mirip seperti regular function secara perilaku, tetapi berbeda dalam penulisannya. Sesuai namanya, fungsi didefinisikan menggunakan tanda panah atau fat arrow ( => ). Tentunya penulisan arrow function ini akan lebih singkat.

Selain perbedaan sintaksis, terdapat perbedaan perilaku antara arrow function dan regular function. Regular function dapat berupa function declaration dan function expression. Namun, arrow function hanya berupa expression function saja. Itu sebabnya arrow function memiliki nama lengkap “arrow function expression”.