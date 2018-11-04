window.addEventListener("load", sidenVises);
let timeLeft = 10; // variablen viser art dert kører 10 gange
let score = 0;

function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart();

}


function showStart() {
    console.log("show start");

    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#start").addEventListener("click", hideStart);
}


function hideStart() {
    console.log("hide start");


    //document.querySelector("#start").classList.add("hide");
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").removeEventListener("click", hideStart);

    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", startGame)
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
}





function timeLeftFc() {
    console.log("timeLeftFc tilmeldt er" + timeLeft);
    //Console er for at vise hvad variablen er i (undersøg console)


    //timeleft er variablen øverst, som vi har sat i minus, fordi siden skal falde.


    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(timeLeftFc, 1000);
    } else {
        gameStatus();
    }
}



function gameStatus() {
    console.log("gameStatus");
    console.log(score);
    if (score == 0) {
        document.querySelector("#gameover").classList.remove("hide");
    } else if (score == 5) // antal for at vinde
        document.querySelector("#levelcomplete").classList.remove("hide");
}




function gameover() {
    console.log("gameover");

    document.querySelector("#gameover").classList.add("hide");
}
