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
    document.getElementById("rumus-luas"||"perhitungan-luas"||"output-luas").textContent = "";
  }
