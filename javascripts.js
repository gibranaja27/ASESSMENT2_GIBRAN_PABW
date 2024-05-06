document.addEventListener("DOMContentLoaded", function () {
    // Menggunakan AJAX untuk bisa memuat data yang ada di file data.JSON
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var datas = JSON.parse(this.responseText);
        // Menampilkan informasi toko
        document.getElementById("nama-mitra").innerHTML =
          "<strong>Nama Mitra:</strong> " + datas.nama_mitra;
        document.getElementById("alamat-mitra").innerHTML =
          "<strong>Alamat Mitra:</strong> " + datas.alamat_mitra;
        document.getElementById("alamat-yang-disumbangkan").innerHTML =
          "<strong>Alamat Yang Disumbangkan:</strong> " + datas.alamat_yang_disumbangkan;
  
        // Menampilkan koleksi buku yang dimasukkan kedalam tabel
        var tbody = document.getElementById("tbody_penyumbang");
        datas.penyumbang.forEach(function (sumbang) {
          var row =
            "<tr><td>" +
            sumbang.nama_penyumbang +
            "</td><td>" +
            sumbang.alamat_penyumbang +
            "</td><td>" +
            sumbang.waktu_menyumbang +
            "</td></tr>";
          tbody.innerHTML += row;
        });
      }
    };
    xhr.open("GET", "datas.json", true);
    xhr.send();
  });
  