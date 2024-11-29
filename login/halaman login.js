var dialog = document.querySelector("dialog");

document.querySelector("#open-popup").onclick = function() {
    
    if (username && password) {
        dialog.showModal();
    } 
};


document.querySelector(".iya").onclick = function() {
    dialog.close();
    window.location.href = 'p.html'; 
};

document.querySelector("#tidak").onclick = function() {
    dialog.close();
    var ulangi = confirm("Apakah anda mau mengulang?");
var counter = 0;

while(ulangi){
    var jawab = confirm("Apakah anda mau mengulang?")
    counter++;
    if(jawab == false){
        ulangi = false;
    }
}

document.write("Perulangan sudah dilakukan sebanyak "+ counter +" kali");
};