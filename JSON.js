// LEVEL 1

// SOAL 1

async function helloAsync() {
  return "Halo dari Async";
}

helloAsync().then(console.log);

(async () => {
  const pesan = await helloAsync();
  console.log(pesan);
})();

// SOAL 2

function ambilData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data berhasil diambil");
    }, 2000);
  });
}

async function main() {
  const hasil = await ambilData();
  console.log(hasil);
}

main();

// SOAL 3

async function getNumber() {
  return 42;
}

(async () => {
  const angka = await getNumber();
  console.log(angka); 
})();

// SOAL 4

function tambahLima(x) {
  return new Promise((resolve) => {
    resolve(x + 5);
  });
}

async function main() {
  const hasil = await tambahLima(10);
  console.log("Hasil akhir:", hasil); 

main();

}

// SOAL 5

async function throwError() {
  throw new Error("Terjadi kesalahan");
}

(async () => {
  try {
    await throwError();
  } catch (error) {
    console.error("Error:", error.message);
  }
})();

// LEVEL 2

// SOAL 1

async function fetchSurat() {
  const res = await fetch("https://equran.id/api/v2/surat/1");
  const data = await res.json();
  console.log("📖 Nama Surat:", data.data.namaLatin);
}

fetchSurat()

// SOAL 2

async function fetchSurat() {
  try {
    const res = await fetch("https://equran.id/api/v2/surat/1");

    if (!res.ok) {
      throw new Error("Gagal mengambil data");
    }

    const data = await res.json();
    console.log("Nama Surat:", data.data.namaLatin);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchSurat();


// SOAL 3

async function fetchSurat() {
  try {
    const res = await fetch("https://equran.id/api/v2/surat/1");
    if (!res.ok) throw new Error("Gagal mengambil data");

    const data = await res.json();
    console.log("Nama Surat:", data.data.namaLatin);
  } catch (error) {
    consoleor.error("Error:", err.message);
  } finally {
    console.log("Proses selesai");
  }
}

fetchSurat();

// SOAL 4

async function fetchTafsir() {
  const res = await fetch("https://equran.id/api/v2/tafsir/112");
  const data = await res.json();

  console.log("Tafsir per Ayat:");
  data.data.tafsir.forEach((ayat) => {
    console.log(`Ayat ${ayat.ayat}: ${ayat.teks}`);
  });
}

fetchTafsir();

// SOAL 5

async function fetchError() {
  try {
    const res = await fetch("https://equran.id/api/v2/surattidakada");
    if (!res.ok) throw new Error("API tidak ditemukan");

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error tertangkap:", error.message);
  }
}

fetchError();

//LEVEL 3

//SOAL 1

async function fetchDuaSurat() {
  const [s1, s2] = await Promise.all([
    fetch("https://equran.id/api/v2/surat/1").then((r) => r.json()),
    fetch("https://equran.id/api/v2/surat/112").then((r) => r.json())
  ]);

  console.log("Surat 1:", s1.data.namaLatin);
  console.log("Surat 112:", s2.data.namaLatin);
}

fetchDuaSurat();

//SOAL 2

async function racePromise() {
  const cepat = new Promise((res) => setTimeout(() => res("Selesai 1 detik"), 1000));
  const lambat = new Promise((res) => setTimeout(() => res("Selesai 3 detik"), 3000));

  const hasil = await Promise.race([cepat, lambat]);
  console.log("Promise tercepat:", hasil);
}

racePromise();

//SOAL 3

async function allSettledDemo() {
  const promises = [
    Promise.resolve("Data 1"),
    Promise.resolve("Data 2"),
    Promise.reject("Error 3"),
  ];

  const hasil = await Promise.allSettled(promises);
  hasil.forEach((r, i) => {
    console.log(`Promise ${i + 1}: ${r.status}`, r.value || r.reason);
  });
}

allSettledDemo();

//SOAL 4

async function dashboard() {
  try {
    const [surat, husna, arbain] = await Promise.all([
      fetch("https://api.myquran.com/v2/quran/surat/semua").then((r) => r.json()),
      fetch("https://api.myquran.com/v2/husna/semua").then((r) => r.json()),
      fetch("https://api.myquran.com/v2/hadits/arbain/semua").then((r) => r.json()),
    ]);

    console.log("Jumlah Surat:", surat.data.length);
    console.log("Asmaul Husna:", husna.data.length);
    console.log("Hadits Arbain:", arbain.data.length);
  } catch (error) {
    console.error("Error Dashboard:", error.message);
  }
}

dashboard();

//SOAL 5

async function fetchSurat(id) {
  if (isNaN(id)) {
    throw new Error("ID surat harus angka");
  }

  const res = await fetch(`https://equran.id/api/v2/surat/${id}`);
  if (!res.ok) {
    throw new Error("Gagal mengambil surat");
  }

  return res.json();
}

(async () => {
  try {
    const data = await fetchSurat("abc"); // coba ubah ke angka biar sukses
    console.log("Surat:", data.data.namaLatin);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
