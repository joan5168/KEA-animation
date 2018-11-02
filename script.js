let score = 0;

window.addEventListener("load", sidenVises);

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
    console.log("start game");

    document.querySelector("#start").classList.remove("fade_out");
    document.querySelector("#start").removeEventListener("animationend", startGame)

    document.querySelector("#start").classList.add("hide");


    document.querySelector("#points").innerHTML = "Score" + score;
    document.querySelector("#bananskrald").addEventListener("click", bananskraldClickHandler);
    document.querySelector("#drink").addEventListener("click", drinkClickHandler);
    document.querySelector("#flaske").addEventListener("click", flaskeClickHandler);
    document.querySelector("#katon").addEventListener("click", katonkClickHandler);
    document.querySelector("#papir").addEventListener("click", papirClickHandler);
    document.querySelector("#plastikpose").addEventListener("click", plastikposeClickHandler);
    document.querySelector("#sug").addEventListener("click", sugClickHandler);
    document.querySelector("#vinflaske").addEventListener("click", vinflaskeClickHandler);
    document.querySelector("#aable").addEventListener("click", aableClickHandler);



}


function bananskraldClickHandler() {
    console.log("bananskraldClickHandler");


    score++;
    document.querySelector("#points").innerHTML = "Score" + score;
    console.log(score);



    console.log(this);
    this.classList.add("hide");

    this.removeEventListener("click", bananskraldClickHandler);


}

//}
//
//function drinkClickHandler() {
//    console.log("-1point");
//
//
//    score--;
//    console.log(score);
//
//    document.querySelector("#points").innerHTML = "Score" + score;
//
//    console.log(this);
//    this.classList.add("hide");
//
//    this.removeEventListener("click", drinkClickHandler);
//
//
//}
//
//function flaskeClickHandler() {
//    console.log("1point");
//
//
//    score++;
//    console.log(score);
//
//    document.querySelector("#points").innerHTML = "Score" + score;
//
//    console.log(this);
//    this.classList.add("hide");
//
//    this.removeEventListener("click", flaskeClickHandler);
//
//
//}
//
//function katonClickHandler() {
//    console.log("1point");
//
//
//    score++;
//    console.log(score);
//
//    document.querySelector("#points").innerHTML = "Score" + score;
//
//    console.log(this);
//    this.classList.add("hide");
//
//    this.removeEventListener("click", katonClickHandler);
//
//
//}
//
//function papirClickHandler() {
//    console.log("1point");
//
//
//    score++;
//    console.log(score);
//
//    document.querySelector("#points").innerHTML = "Score" + score;
//
//    console.log(this);
//    this.classList.add("hide");
//
//    this.removeEventListener("click", papirClickHandler);
//
//
//}
//
//function plastikposeClickHandler() {
//    console.log("-1point");
//
//
//    score--;
//    console.log(score);
//
//    document.querySelector("#points").innerHTML = "Score" + score;
//
//    console.log(this);
//    this.classList.add("hide");
//
//    this.removeEventListener("click", plastikposeClickHandler);
//
//
//}
//
//function sugClickHandler() {
//    console.log("-1point");
//
//
//    score--;
//    console.log(score);
//
//    document.querySelector("#points").innerHTML = "Score" + score;
//
//    console.log(this);
//    this.classList.add("hide");
//
//    this.removeEventListener("click", sugClickHandler);
//
//
//}
//
//function vinflaskeClickHandler() {
//    console.log("1point");
//
//
//    score++;
//    console.log(score);
//
//    document.querySelector("#points").innerHTML = "Score" + score;
//
//    console.log(this);
//    this.classList.add("hide");
//
//    this.removeEventListener("click", vinflaskeClickHandler);
//
//
//}
//
//function aableClickHandler() {
//    console.log("1point");
//
//
//    score++;
//    console.log(score);
//
//    document.querySelector("#points").innerHTML = "Score" + score;
//
//    console.log(this);
//    this.classList.add("hide");
//
//    this.removeEventListener("click", aableClickHandler);
//
//
//}
