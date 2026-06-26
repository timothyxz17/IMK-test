// javascript
// variabel & tipe data

let nama = "raphael";
let usia = 1;
const kota = "Jakarta";

console.log(nama,usia,kota);

//operator
console.log(5+3);
console.log(5=== "5");

//Kondisi
document.getElementById("btn-cek"). addEventListener("click",function(){
    let nilai = Number(document.getElementById("input-nilai").value);
    // document.getelementbyid fungsinya mengambil elemen html berdasarkan id
    let hasil;
        if(nilai >= 80){
            hasil = "Nilai A";
        } else if (nilai >= 70){
            hasil = "Nilai B";
        } else{
            hasil = "Tidak Lulus";
        }

        document.getElementById("hasil-kondisi").innerHTML = hasil;

});

// Perulangan
document.getElementById("btn-loop").addEventListener("click", function(){
    let teks = "";

    for (let i = 1; i<=5; i++){
        teks += "Angka " + i + "<br>";

    }

    document.getElementById("hasil-loop").innerHTML = teks
});

// Fungsi & Ouput
function sapa(nama) { // membuat fungsi bernama "sapa" dengan parameter "nama"
    return "Halo, "+ nama + "!"; // return = mengembalikan nlai dari fungsi
}

document.getElementById("btn-alert").addEventListener("click", function(){
    alert("Ini adalah Alert");
});

document.getElementById("btn-tulis").addEventListener("click", function(){
    document.getElementById("hasil-output").innerHTML = sapa("Raphael");
});

// Dom & Event
document.getElementById("btn-sapa").addEventListener("click", function(){

    let nama = document.getElementById("input-nama").value;

    document.getElementById("hasil-dom").innerHTML = "Halo, " + nama + "!";
});

// Local storage
localStorage.setItem("pengguna", "raphael");

console.log("localStorage:", localStorage.getItem("pengguna"));