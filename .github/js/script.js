function hitungLuas(){ 
    var sisiLuas = document.getElementById("sisi-luas").value;

    list = document.getElementsByClassName("result-luas");
    document.getElementsByClassName("result-luas")
    if (list) {
        list[x].style.visibility = "hidden";
    }
    
    //document.getElementsByClassName("result-luas").style.visibility = "hidden";
    document.getElementById("ouput-luas").innerHTML = '<span>'+sisiLuas+'</span>';
    
}