var title = document.getElementById('twoway');
var msg = document.getElementById('communication');
var myDearestSpeechToYouMyFriend = "YN//D//t/Mu  /  a//mwm//eo//# /u/#t'n/#htt #e  b# fo/#wi/ #on /#rdco#d /o# a/ #Tnvl#Rye/#I/rt#Uh e#M/p.#P/a\n#Hg/S## c/##hhc##eih##r/ ##/gi##. /##\nc ##Eat##///##e\ne##rf ##yi/## /v##sle##i r##naw##/n/##/ e##ee/## nm##ld/##/l/##//g##t/ ##ls/##e /## v/##/o/##hi/##/d\n##/.o##g\n/## D ##oot##f/h## '/##vt ##a v##/f/##uai##e/d##\n/.##h ###ai###sn###  ###b/###e/###ek###ne###  ###at###//###re###e ###a/###d/###//### /###//###/s###/.###/####/####.####\n####N####o####t#### ####e####v####/####n#### ####/####h####e#### ####w####o####r####/####/#### ####a####r####e#### ####s####/####f####e####.#########"
var currenttitle = "begin";
var progressDeleter = false;
var target = "fake";
var theNumberOfTimesYouveSeenThisVariable = 1;
var userLookingAtSourceCode = true;
var getOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOut = 1;
var getOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOut = 0;

/*


You won't find anything here.

Well, maybe you could, but only if its more fun for you that way.
Look around, make yourself at home, or play the secret out the OTHER intended way. The intended intended way.

Both ways are intended. I'm not your dad.

Unless its the future and I'm your dad. In that case, you're grounded.

Well, while you're here, I might as well talk about the stuff on this site
a little. ELEKTRONSKI FAKULTET (also known as THE ACADEMICAL ABYSS) has
taken a lot of my creative drive away from me due to its nonsense, but
this website and the projects listed on it are things I want to always
keep working on and improving (well, except the ones I no longer have
the rights to edit, but that's a whole different story). Speaking of...

The way to solve the majority of Ultrachess random puzzles is to use the
knight almost immediately upon starting up the level. It seems to mesh
really well with the way random levels are generated (which is that every
single tile has a 50/50 chance of being a wall or not, and only those
end results with actual solutions are shown to the player, while the rest
are discarded upon generation.)

It's not clever code. It's not something I'd ever do now (probably).
However, it's still important to remember that we're all still and always
improving. Because you made awful art, wrote awful code and sung
awful notes in the past, it allowed you to not... do That anymore. This
goes for any current and future endeavour too. Please go ahead and suck at
things. It's for the best.

-Boggy

PS. Improvement isn't the only goal you should have either! Try to have fun
at any skill level you might be. Play with your art and you could create
something you really enjoy!

I think I'm doing that right now. :)

PPS. You'll find the same message in the HTML file. It's not that I want to
repeat myself, I just don't want the HTML explorers to miss out on it.

*/

var yeahTrueTrueIAgreeWithYourStatement = [4+26*18, 143+1*2*3*4-5, 10 * 10 * 10 + 10 * 10 * 6 + 42, 461, 0];

window.addEventListener("load", function() {
    proceed();
});


function revert() {
    if(getOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOut == 4){
        title.style.color = "#190047";
    }
    else {
        title.style.color = "white";
    }
}

document.addEventListener('keydown', function(event) {
    //get keybord event
    var key = event.keyCode;

    if((key >= 48 && key <= 57) || (key >= 65 && key <= 90) && title != null) {
        currenttitle = currenttitle.substr(1, 4) + event.key;
        title.innerHTML = "> " + currenttitle;
        if(msg != null) {
            var fear = "";
            var ah = 0;
            while (ah < target.length){
                fear += String.fromCharCode(target.charCodeAt(ah) - 21 * 2);
                ah++;
            }
            if (currenttitle.toLowerCase() == fear.toLowerCase()) {
                title.style.color = "aqua";
                noItsOkayImDoneSpeakingBroImDone++;
                setTimeout(revert, 500);
                proceed();
            }
        }
        
    }
})

function filterNone() {
    return NodeFilter.FILTER_ACCEPT;
}

function proceed() {
    
    msg.innerHTML = "";
    var You = getOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOut;
    SPEAK(You);

    if(!progressDeleter && getOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOut < theNumberOfTimesYouveSeenThisVariable * 4) {
        var theEmbodimentOfWrath = "";
        var iterator = document.createNodeIterator(document.body, NodeFilter.SHOW_COMMENT, filterNone, false);
        var curNode;
        while (curNode = iterator.nextNode()) {
            theEmbodimentOfWrath = curNode.nodeValue;
        }
        var dread = theEmbodimentOfWrath.substring(yeahTrueTrueIAgreeWithYourStatement[getOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOut], yeahTrueTrueIAgreeWithYourStatement[getOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOut] + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 1 - 1);
        target = "";
        var oh = 0;
        while (oh < dread.length) {
            target += String.fromCharCode(dread.charCodeAt(oh) + 7 * 6);
            oh++;
        }
    }
    else {
        target = "real";
    }

    getOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOut = getOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOut - 1 + 2;
    if (getOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOut == 2*2) {
        document.getElementById("itbeckons").remove();
        msg.style.color = "#190047";
    }
    if (getOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOut == 2*2*2-3) {
        title.remove();
        msg.style.color = "aqua";
        document.getElementById("yeah").remove();
    }
}

function SPEAK(thespeech) {
    if (thespeech % ((((10 * 3  * 6) / 90) * 5) / 2) == noItsOkayImDoneSpeakingBroImDone && myDearestSpeechToYouMyFriend[thespeech + theNumberOfTimesYouveSeenThisVariable - getOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOut] != myDearestSpeechToYouMyFriend[myDearestSpeechToYouMyFriend.length-2]) {
        msg.innerHTML += myDearestSpeechToYouMyFriend[thespeech];
        setTimeout(SPEAK, 20, thespeech + theNumberOfTimesYouveSeenThisVariable * 2 + getOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOutGetOut * 3)
    }
}

var noItsOkayImDoneSpeakingBroImDone = 0;















































var youThoughtThereWouldBeSomeSecretCodeHereButItsActuallyJustNothing = ":)"