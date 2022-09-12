var title = document.getElementById('mainlogothing');
var msg = document.getElementById('messagething');
var currenttitle = "boggy"

var check = 0;
var layer = 0;

function checkForSpam() {
    if (check > 7 && layer < 4) {
        layer++;
    }
    else if (layer > 0) {
        layer--;
    }

    if (layer > 2) {
        msg.innerHTML = "STOP!!";
        msg.style.color = "#ff0040";
    }
    else {
        if (msg.innerHTML == "STOP!!") {
            msg.innerHTML = "a portfolio of sorts,";
                msg.style.color = "white";
        }
    }
    check = 0;
}

setInterval(checkForSpam, 500);

//get keybord event listener
document.addEventListener('keydown', function(event) {
    //get keybord event
    var key = event.keyCode;

    if((key >= 48 && key <= 57) || (key >= 65 && key <= 90)) {
        currenttitle = currenttitle.substr(1, 4) + event.key;
        check++;
        title.innerHTML = "> " + currenttitle;
        if(msg != null && layer < 3) {
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
            else if (currenttitle.toLowerCase() == "stefi") {
                msg.innerHTML = "(don't call him that)";
                msg.style.color = "aqua";
            }
            else if (currenttitle.toLowerCase() == "bog2n") {
                msg.innerHTML = "A very cool guy and a very cool guy, combined";
                msg.style.color = "aqua";
            }
            else if (currenttitle.toLowerCase() == "burek") {
                msg.innerHTML = "<3";
                msg.style.color = "aqua";
            }
            else if (currenttitle.toLowerCase() == "milka") {
                msg.innerHTML = "(may refer to: FROGMEN member/tasty treat).";
                msg.style.color = "aqua";
            }
            else if (currenttitle.toLowerCase() == "leila") {
                msg.innerHTML = "FIIINE you can be included. Jeez.";
                msg.style.color = "aqua";
            }
            else if (currenttitle.toLowerCase() == "satun") {
                msg.innerHTML = "FIIINE you can be included too.";
                msg.style.color = "aqua";
            }
            else if (currenttitle.toLowerCase() == "begin") {
                window.location.href = "https://www.boggy.tech/projects/secret"
            }
            else {
                msg.innerHTML = "a portfolio of sorts,";
                msg.style.color = "white";
            }
        }
        
    }
})

