function hitungLuas(){ 
    var sisiLuas = document.getElementById("sisi-luas").value;
    // Calculate the area of the square
    var area = sisiLuas * sisiLuas;

    document.getElementById("rumus-luas").style.visibility = "visible";
    document.getElementById("rumus-luas").style.visibility = "hidden";

    var element = document.getElementById("rumus-luas");
      if (element.style.visibility === "hidden") {
        element.style.visibility = "visible";
      } else {
        element.style.visibility = "hidden";
    }
    document.getElementById("perhitungan-luas").textContent = "L = "+ sisiLuas + "x" +sisiLuas;  
    // Display the result
    document.getElementById("output-luas").textContent = "L = "+ area;
  }
  function resetLuas() {
    document.getElementById("sisi-luas").value = "";
    document.getElementById("rumus-luas").style.visibility = "";
    document.getElementById("perhitungan-luas").textContent = "";
    document.getElementById("output-luas").textContent = "";
  }
  function hitungKeliling(){
    let kelilingPersegi = document.getElementById("keliling-persegi").value;
    var hitung = 4 * kelilingPersegi;  

    document.getElementById("rumus-keliling").style.visibility = "visible";
    document.getElementById("rumus-keliling").style.visibility = "hidden";

    var element = document.getElementById("rumus-keliling");
      if (element.style.visibility === "hidden") {
        element.style.visibility = "visible";
      } else {
        element.style.visibility = "hidden";
    }

    document.getElementById("perhitungan-keliling").textContent = "L = "+ kelilingPersegi + "x" +kelilingPersegi;  
    // Display the result
    document.getElementById("output-keliling").textContent = "K = "+ hitung;
}
function resetKeliling() {
  document.getElementById("keliling-persegi").value = "";
  document.getElementById("rumus-keliling").style.visibility = "";
  document.getElementById("perhitungan-keliling").textContent = "";
  document.getElementById("output-keliling").textContent = "";
}
