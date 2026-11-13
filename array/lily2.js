// array => satu variabel menampung banyak data

let mhs = ["lita", "lily", "lena", "lisa"];
console.log(mhs);

// mengakses array => menggunakan indeks dimulai dari indeks 0 

console.log(mhs[0]); 
console.log(mhs[1]); 
console.log(mhs[2]); 
console.log(mhs[3]); 

// length => mengetahui panjang data array
console.log(mhs.length);

// pop => menghapus data terakhir pada array
mhs.pop();
console.log(mhs);

// push => menambahkan data terakhir pada array
mhs.push("lisa");
console.log(mhs);

// shift => menghapus data pertama pada array
mhs.shift();
console.log(mhs);

// unshift => menambahkan data di awal array
mhs.unshift("lita");
console.log(mhs);

// splice => menghapus data array sesuai indeks yang ditentukan
mhs.splice(3, 1);
console.log(mhs);

// slice => menyalin data array sesuai indeks yang ditentukan
let mhs2 = mhs.slice(1, 3);
console.log(mhs2);

// join => menggabungkan nilai array menjadi string
console.log(`Data Mahasiswa: ${mhs.join(", ")}`);

// concat => menggabungkan dua array menjadi satu array

let mhs3 = ["lily", "lena"];
let mhs4 = ["lisa", "lita"];
let dataMhs = mhs3.concat(mhs4);
console.log(dataMhs);

// sort => mengurutkan data array
console.log(dataMhs.sort());

// reverse => membalik urutan data array
console.log(dataMhs.reverse());

// typeof => mengetahui tipe data array
console.log(typeof (dataMhs));

// indexOf => mengetahui indeks data array
console.log(dataMhs.indexOf("lena"));

// forEach => melakukan perulangan pada array
dataMhs.forEach((item, index) => {
    console.log(index + 1, item);
});