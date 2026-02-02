// let tipeMotor = "Vario";
// let hargaMotor = 50000;
// let tipeMobil = "Avanza";
// let hargaMobil = 300000;
// function hitungSewa(tipe, durasi) {
// if (tipe === "Vario") {
// return durasi * 50000;
// } else if (tipe === "Avanza") {
// return durasi * 300000;
// }
// }
// console.log("Sewa Motor 2 hari: " + hitungSewa("Vario", 2));

// 2. Tantangan (The Challenge)
// Ubah kode di atas menjadi berbasis Class (PBO) dengan ketentuan:
// ● Buat class Kendaraan.
// ● Gunakan Inheritance: Buat subclass Motor dan Mobil.
// ● Gunakan Constructor untuk menyimpan nama dan harga sewa per hari.
// ● Buat method totalHarga(hari) di class Parent.
// 3. Hasil Akhir yang Diharapkan
// const sewa1 = new Mobil("Innova", 500000);
// console.log(sewa1.totalHarga(3)); // Output: Total sewa Innova: 1500000
// 4. Pengumpulan
// Kumpul file kode pada classroom yang telah disediakan dan jawab pertanyaan berikut:
// "Jika ada diskon khusus untuk member, di mana sebaiknya logika diskon tersebut diletakkan
// dalam Class?"

class kendaraan {
    constructor (name, hargaPerHari) {
        this.name = name;
        this.hargaPerHari = hargaPerHari;
    }
    totalHarga(hari) {
        const total = hari * this.hargaPerHari;
        return `Total sewa ${this.name}: ${total}`;
    }
}
class motor extends kendaraan {
    constructor (nama, harga) {
        super(nama, harga);
    }
}
class mobil extends kendaraan {
    constructor (nama, harga){
        super(nama, harga);
    }
}
const sewa1 = new motor("vario", 50000);
console.log(sewa1.totalHarga(5));
const sewa2 = new mobil("innova", 500000);
console.log(sewa2.totalHarga(3));