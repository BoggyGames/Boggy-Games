var title = document.getElementById('mainlogothing');
var currenttitle = "boggy"

//get keybord event listener
document.addEventListener('keydown', function(event) {
    //get keybord event
    var key = event.keyCode;

    if((key >= 48 && key <= 57) || (key >= 65 && key <= 90)) {
        currenttitle = currenttitle.substr(1, 4) + event.key;
        title.innerHTML = "> " + currenttitle;
        if (currenttitle.toLowerCase() == "boggy") {
            alert("Hey, that's me!");
        }
        else if (currenttitle.toLowerCase() == "hello") {
            alert("Hello, World!");
        }
        else if (currenttitle.toLowerCase() == "plaao") {
            alert("A very cool person.");
        }
        else if (currenttitle.toLowerCase() == "vaske") {
            alert("Odrer has been rsetored.");
        }
    }
})

