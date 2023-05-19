function hitungLuas(){ 
    var sisiLuas = document.getElementById("sisi-luas").value;

    document.getElementsByClassName("result-luas").style="visibility";

    console.log(sisiLuas); 
    document.getElementById("ouput-luas").innerHTML = '<span>'+sisiLuas+'</span>';

    
}