let data = [];

function tambahData() {
    let input = document.getElementById("nama");
    let nama = input.value.trim();

    if (nama === "") {
        alert("Masukkan nama terlebih dahulu!");
        return;
    }

    data.push(nama);

    tampilkanData();

    input.value = "";
}

function tampilkanData() {
    let daftar = document.getElementById("daftar");

    daftar.innerHTML = "";

    data.forEach(function(nama, index) {
        let li = document.createElement("li");

        li.textContent = (index + 1) + ". " + nama + " ";

        let tombolHapus = document.createElement("button");

        tombolHapus.textContent = "Hapus";

        tombolHapus.onclick = function() {
            hapusData(index);
        };

        li.appendChild(tombolHapus);

        daftar.appendChild(li);
    });
}

function hapusData(index) {
    data.splice(index, 1);

    tampilkanData();
}