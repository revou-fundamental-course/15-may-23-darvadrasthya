function hitungLuas(){ 
    var sisiLuas = document.getElementById("sisi-luas").value;
    console.log(sisiLuas);
    // Rumus Luas Persegi
    var area = sisiLuas * sisiLuas;
    // Visible text content
    document.getElementById("rumus-luas").style.visibility = "visible";
    document.getElementById("rumus-luas").style.visibility = "hidden";

    var element = document.getElementById("rumus-luas");
      if (element.style.visibility === "hidden") {
        element.style.visibility = "visible";
      } else {
        element.style.visibility = "hidden";
    }

    document.getElementById("perhitungan-luas").textContent = "L = "+ sisiLuas + "x" +sisiLuas;  
    // Output Hasil dari rumus luas
    document.getElementById("output-luas").textContent = "L = "+ area;
  }
  //Fungsi untuk reset value luas
  function resetLuas() {
    document.getElementById("sisi-luas").value = "";
    document.getElementById("rumus-luas").style.visibility = "";
    document.getElementById("perhitungan-luas").textContent = "";
    document.getElementById("output-luas").textContent = "";
  }
  //Menghitung keliling
  function hitungKeliling(){
    var kelilingPersegi = document.getElementById("keliling-persegi").value;
    console.log(sisiLuas);
    //Rumus dari keliling persegi
    var hitung = 4 * kelilingPersegi;  
    // Visible text content
    document.getElementById("rumus-keliling").style.visibility = "visible";
    document.getElementById("rumus-keliling").style.visibility = "hidden";

    var element = document.getElementById("rumus-keliling");
      if (element.style.visibility === "hidden") {
        element.style.visibility = "visible";
      } else {
        element.style.visibility = "hidden";
    }

    document.getElementById("perhitungan-keliling").textContent = "L = "+ kelilingPersegi + "x" +kelilingPersegi;  
    // Output hasil dari rumus keliling
    document.getElementById("output-keliling").textContent = "K = "+ hitung;
}
//fungsi untuk reset value keliling
function resetKeliling() {
  document.getElementById("keliling-persegi").value = "";
  document.getElementById("rumus-keliling").style.visibility = "";
  document.getElementById("perhitungan-keliling").textContent = "";
  document.getElementById("output-keliling").textContent = "";
}
