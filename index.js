var title = document.getElementById('mainlogothing');
var msg = document.getElementById('messagething');
var currenttitle = "boggy"

//get keybord event listener
document.addEventListener('keydown', function(event) {
    //get keybord event
    var key = event.keyCode;

    if((key >= 48 && key <= 57) || (key >= 65 && key <= 90)) {
        currenttitle = currenttitle.substr(1, 4) + event.key;
        title.innerHTML = "> " + currenttitle;
        if(msg != null) {
            if (currenttitle.toLowerCase() == "boggy") {
                msg.innerHTML = "Hey, that's me!";
                msg.style.color = "aqua";
            }
            else if (currenttitle.toLowerCase() == "hello") {
                msg.innerHTML = "Hello, World!";
                msg.style.color = "aqua";
            }
            else if (currenttitle.toLowerCase() == "plaao") {
                msg.innerHTML = "A very cool person.";
                msg.style.color = "aqua";
            }
            else if (currenttitle.toLowerCase() == "vaske") {
                msg.innerHTML = "Odrer has been rsetored.";
                msg.style.color = "aqua";
            }
        }
        
    }
})

