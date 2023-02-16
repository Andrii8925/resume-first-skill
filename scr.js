/*console.log("Запуск успешный, идем далее...");*/

var button1 = document.getElementById("om");
var button2 = document.getElementById("tmm");
var photo = document.getElementById("photo");

button1.onclick = function() {
    if (button1.className = "om") {
        /*console.log("Good click on OM");*/
        button1.className = "lesWork";
        window.location = "https://zp.edu.ua/?q=node/8042";
    } else {
        alert("Error 404");
    }    
}

button2.onclick = function() {
    if (button2.className = "tmm") {
       /* console.log("Good click on TMM");*/
        button2.className = "lesWork";
        window.location = "https://zp.edu.ua/?q=node/8037";
    } else {
        alert("Error 404");
    }    
}

photo.ondblclick = function() {
    if (photo.className = "myPhoto") {
        /*alert("Ok, its fine");*/
        window.location = "myProfile.html";
    }
}