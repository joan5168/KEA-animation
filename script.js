window.addEventListener("load", sidenVises);
let timeLeft = 10; // variablen viser at den kører 10 gange
let score = 0;

let showSettingsEffektSound = true;
let showSettingsMusic = true;

function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart();

}




function showStart() {
    console.log("show start");

    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);

    document.querySelector("#setting_push1").addEventListener("click", showSettings);
    document.querySelector("#setting_close").addEventListener("click", showSettings);


    document.querySelector("#setting_effekt_sound").addEventListener("click", toggleSounds);
    document.querySelector("#setting_music").addEventListener("click", toggleMusic);


    document.querySelector("#retry").classList.add("hide");
    document.querySelector("#retry2").classList.add("hide");
}




function showSettings() {
    console.log("showSettings");
    //    document.querySelector("#setting_screen").classList.toggle("hide");

    document.querySelector("#setting_screen").classList.remove("hide");
    document.querySelector("#setting_close").addEventListener("click", hideSettings);

    document.querySelector("#sfx").addEventListener("click", toggleSounds);
    document.querySelector("#music").addEventListener("click", toggleMusic);


}


function hideSettings() {
    console.log("hideSettings");
    document.querySelector("#setting_screen").classList.add("hide");
}



function hideStart() {
    console.log("hide start");

    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").removeEventListener("click", hideStart);

    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", startGame);
}



function startGame() {
    console.log("startGame");
    document.querySelector("#start").classList.remove("fade_out");
    document.querySelector("#start").removeEventListener("animationend", startGame)

    document.querySelector("#start").classList.add("hide");

    document.querySelector("#bananskrald").addEventListener("click", plusClickHandler);
    document.querySelector("#drink").addEventListener("click", minusClickHandler);
    document.querySelector("#flaske").addEventListener("click", plusClickHandler);
    document.querySelector("#katon").addEventListener("click", plusClickHandler);
    document.querySelector("#papir").addEventListener("click", plusClickHandler);
    document.querySelector("#plastikpose").addEventListener("click", minusClickHandler);
    document.querySelector("#sug").addEventListener("click", minusClickHandler);
    document.querySelector("#vinflaske").addEventListener("click", plusClickHandler);
    document.querySelector("#aable").addEventListener("click", plusClickHandler);

    document.querySelector("#points").innerHTML = +score;


    document.querySelector("#mymusic").currentTime = 0;
    document.querySelector("#mymusic").play();


    document.querySelector("#setting_push").addEventListener("click", showSettings);
    document.querySelector("#setting_close").addEventListener("click", showSettings);

    document.querySelector("#time").innerHTML = timeLeft;
    timeLeftFc();
}



function plusClickHandler() {
    console.log("plusClickHandler");


    score++;
    document.querySelector("#points").innerHTML = +score;
    console.log(score);

    console.log(this);
    this.classList.add("hide");

    this.removeEventListener("click", plusClickHandler);


    if (this.classList.contains("good")) {
        console.log("good");

        document.querySelector("#sfx1").currentTime = 0;
        document.querySelector("#sfx1").play();



    } else if (this.classList.contains("bad")) {
        console.log("bad");

        document.querySelector("#sfx2").currentTime = 0;
        document.querySelector("#sfx2").play();
    }
}



function minusClickHandler() {
    console.log("minusClickHandler");


    score--;
    document.querySelector("#points").innerHTML = +score;
    console.log(score);

    console.log(this);
    this.classList.add("hide");
    this.removeEventListener("click", minusClickHandler);
    timeLeftFc();


    if (this.classList.contains("good")) {
        console.log("good");

        document.querySelector("#sfx1").currentTime = 0;
        document.querySelector("#sfx1").play();



    } else if (this.classList.contains("bad")) {
        console.log("bad");

        document.querySelector("#sfx2").currentTime = 0;
        document.querySelector("#sfx2").play();

    }
}



function timeLeftFc() {
    console.log("timeLeftFc tilmeldt er" + timeLeft);
    //Console er for at vise hvad variablen er i (undersøg console)


    //timeleft er variablen øverst, som vi har sat i minus, fordi siden skal falde.

    document.querySelector("#time").innerHTML = timeLeft;


    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(timeLeftFc, 1000);
    } else {
        gameStatus();
    }
}



function toggleSounds() {
    console.log("toggleSounds");

    if (showSettingsEffektSound == false) {
        showSettingsEffektSound = true;
        document.querySelector("#sfx_sprite").classList.add("off_on");
        document.querySelector("#sfx_sprite").classList.remove("off");
        document.querySelector("#sfx_sprite").addEventListener("animationend", soundsOn); // slutte for lyden

        //        soundsOff();
    } else {
        showSettingsEffektSound = false;
        document.querySelector("#sfx_sprite").classList.add("on_off");
        document.querySelector("#sfx_sprite").classList.remove("off_on");
        document.querySelector("#sfx_sprite").addEventListener("animationend", soundsOff); //tænde for lyden

        //        soundsOn();
    }
}

function soundsOff() {
    console.log("soundsOff function værdi er " + showSettingsEffektSound);
    document.querySelector("#sfx_sprite").removeEventListener("animationend", soundsOff); //ryd op

    document.querySelector("#sfx_sprite").classList.remove("on_off");
    document.querySelector("#sfx_sprite").classList.add("off");

    //    her slukkes for efx
    document.querySelector("#sfx1").muted = true;
    document.querySelector("#sfx2").muted = true;

}

function soundsOn() {
    console.log("soundsOn function værdi er " + showSettingsEffektSound);
    document.querySelector("#sfx_sprite").removeEventListener("animationend", soundsOn); //ryde op

    document.querySelector("#sfx_sprite").classList.remove("off_on");
    document.querySelector("#sfx_sprite").classList.add("on");

    //    her tændes for sfx
    document.querySelector("#sfx1").muted = false;
    document.querySelector("#sfx2").muted = false;
}

function toggleMusic() {
    console.log("showSettingsMusic function " + showSettingsMusic);
    //    showSettingsMusic = !showSettingsMusic;

    if (showSettingsMusic == true) {
        (showSettingsEffektSound == false)
        showSettingsEffektSound = false;

        document.querySelector("#music_sprite").classList.add("off_on");
        document.querySelector("#music_sprite").classList.remove("off");
        document.querySelector("#music_sprite").addEventListener("animationend", soundsOn); // slutte for lyden

        //        musicOn();

    } else

        showSettingsEffektSound = false; {
        document.querySelector("#music_sprite").classList.add("on_off");
        document.querySelector("#music_sprite").classList.remove("off_on");
        document.querySelector("#music_sprite").addEventListener("animationend", soundsOff); //tænde for lyden
        //        musicOff();
    }
}

function musicOff() {
    console.log("musicOff function værdi er " + showSettingsMusic);

    //    her slukkes for musikken

    document.querySelector("#musik").pause();

    document.querySelector("#music_sprite").classList.remove("on_off");
    document.querySelector("#music_sprite").classList.add("off");

    //    her slukkes for sfx
    document.querySelector("#sfx1").muted = true;
    document.querySelector("#sfx2").muted = true;
}

function musicOn() {
    console.log("musicOn function værdi er " + showSettingsMusic);

    //    her tændes for musikken



    document.querySelector("#music_sprite").classList.remove("off_on");
    document.querySelector("#music_sprite").classList.add("on");

    //    her tændes for sfx
    document.querySelector("#sfx1").muted = false;
    document.querySelector("#sfx2").muted = false;




    document.querySelector("#musik").play();
}

function gameStatus() {
    console.log("gameStatus");
    console.log(score);
    if (score == 0) {
        document.querySelector("#gameover").classList.remove("hide");
        document.querySelector("#mymusic").pause();

        document.querySelector("#sfx4").currentTime = 0;
        document.querySelector("#sfx4").play();

        document.querySelector("#retry").addEventListener("click", showStart);
        document.querySelector("#retry").classList.remove("hide");

        document.querySelector("#retry").addEventListener("click", newGame);

        //ryd op
        document.querySelector("#retry2").classList.add("hide");

        //ryd op

    } else if (score == 5) { // antal for at vinde
        document.querySelector("#levelcomplete").classList.remove("hide");

        document.querySelector("#mymusic").pause();


        document.querySelector("#sfx1").pause();
        document.querySelector("#sfx2").pause();

        document.querySelector("#sfx3").currentTime = 0;
        document.querySelector("#sfx3").play();

        document.querySelector("#retry").addEventListener("click", showStart);
        document.querySelector("#retry2").classList.remove("hide");
    }
}



function gameover() {
    console.log("gameover");

    document.querySelector("#gameover").classList.remove("hide");
}


function newGame() {
    console.log("newGame");
    location = location.href;
}
