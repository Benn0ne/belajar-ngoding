// belajar algortima dasar
var a = 'a'
let b = 'b'
const c = 'c'

//variabel bisa menampung data string, number, boolean, array, object,
let nama = 'BenRogue'; //String
let umur = 20 ; //number
let apakahBenar = true; //boolean
let uang = 5000.5; //number + koma atau desimal

//operator  aritmatika

let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2, 'pertambahan'); //bisa ditambahkan string
console.log(angka1 - angka2);
console.log(angka1 / angka2);
console.log(angka1 * angka2);
console.log(angka1 % angka2);

let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika) //30

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika) //-10

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika) //0.5

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika) //200

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log(penampungHasilOperatorAritmatika) //10

//string juga bisa ditambahkan namun string gabisa dikurang dengan operator aritmatika
let namaDepan = 'Ben';
let namaBelakang = 'Rogue';
let namaLengkap = namaDepan + ' ' + namaBelakang;
console.log(namaLengkap); //BenRogue
console.log(namaDepan + ' ' + namaBelakang);
console.log(namaDepan - namaBelakang); //NaN kenapa NaN karena dia bukan merupakan Angka(NaN bukan error) karena masih NaN masih menghasilkan nilai

//alur pembacaan kode
//untuk membaca kode harus membacaNya dari kiri ke kanan, dan atas ke bawah
//contoh

let number = 20;
console.log(number + 10); //30
number = 10;
console.log(number + 10); //20
number = false;
console.log(number + 10); //10

//false adalah 0 makanya kenapa hasilnya 10 jadi false = 0 dan true = 1;
console.log(true +10); //11

//membaca error 
//error  dont be fear about error be fear about no one error on your code
//dalam pekerjaan bila tidak terjadi error seperti code jalan tapi ada bug
//itu bikin pusing karena tidak tau dimana letak errornya atau letak kesalahanNya

// //contoh error
// const hewan = 'kucing';
// console.log(hewan);
// hewan = 'anjing';

// auto comment shortcut ctrl + / or cmd + /

// kalo ada error ya harus teliti aja sih dan abaca terminal hasil errorNya karena terminal memberikan informasi yang mana yg error
// and learning coding must/have habit 
