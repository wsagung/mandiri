/* Variable */
// var nama = "yudi" (variable dalam js lama)
// $nama = "Yudi"; (variable dalam php)

let nama_depan = "yudi";
let nama_belakang = "utomo";
let nama_lengkap = nama_depan + " " + nama_belakang

let barang = 80; 
let jumlah = 100; 
let total = barang + jumlah; 

/* constant */
const country = "Indonesia";
const database = "pelatihan";

/* Data Type */
// silakan lihat javascript.info

/* Operator */

/* Alert */
let cookie; 
cookie = "yudi 20211027";
let cookie2 = "utomo 20211027";

alert(cookie);



/* Conditional */
if (nama_lengkap == "Yudi Utomo") {
    alert("selamat datang" + nama_lengkap);
} else {
    alert("Maaf, Anda sopo yo?");
}





/* Loop */

for (let i = 0; 
    1 <= 10; 1++) {
    //console.log("loop 1" + i);
}

let j = 0;
while (j <= 10) {
    //console.log("loop 2" + j);
    j++;
}

let k = 0;
do {
    //console.log("loop 3" + k);
    k++;
} while (k <=10);

/* Function */
function greeting() {
    if (nama_lengkap) {
        console.log("User aman, bisa masuk web.");
    } else {
        console.log("User tidak aman, jangan kasih masuk")
    }
}

greeting();

function login(username, password) {
    if (username && password) {
        console.log("Selamat Datang, ");
        console.log("username: " + username);
        console.log("password: " + password);
    } else if (username || password) {
        console.log("Username atau Password salah.");
    } else {
        console.log("Anda belum login.");
    }
}

let username = "Fulan";
let password = "1234";
login(uname, pass);

function luasSegitiga(alas, tinggi) {
    let luas = (alas * tinggi) / 2;
    return luas;
}

let alas = 10; 
let tinggi = 5; 
let luas = luasSegitiga(alas, tinggi); 
console.log(luas);



/* Struktur Data */
let dataMhs = ["Yudi", "Yuda", "Mila"];

let dataMhs2 = [
    ["Yudi", "Yuda", "Mila"],
    ["Melon", "Jeruk", "Anggur"],
];

let biodataMhs = {
    nama: "Yudi",
    tempat_lahir: "Bandar Lampung",
    negara: "Indonesia"
};

let ambilDataMhs = dataMhs [2];
console.log(ambilDataMhs)

let biodataMhs2 = {
    nim: "11",
    biodata:{
        nama: "Yudi",
        tempat_lahir: "Bandar Lampung",
        negara: "Indonesia"
    }
};