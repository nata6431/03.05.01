let showSettingsEffektSound = true;

window.addEventListener("load", sidenVises);
"use strict";
let life = 3;
let points = 0;

function sidenVises() {
    console.log("siden vises");
    showStart();
}

function showStart() {
    console.log("showStart");
    document.querySelector("#liv").classList.add("hide");
    document.querySelector("#liv").style.zIndex = "-1";

    document.querySelector("#settings").addEventListener("click", showSettings);

    document.querySelector("#points").innerHTML = points;

    document.querySelector("#pige3").classList.remove("hide");
    document.querySelector("#pige2").classList.remove("hide");
    document.querySelector("#pige1").classList.remove("hide");
    document.querySelector("#ond").classList.remove("hide");
    document.querySelector("#fig1").classList.add("hide");
    document.querySelector("#ond").classList.add("gaa");
    document.querySelector("#play").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#headline").classList.remove("hide");

    document.querySelector("#menu_background").classList.remove("hide");


    document.querySelector("#play").addEventListener("click", startGame);
    document.querySelector("#play").addEventListener("click", snapChat);

}

function startGame() {
    console.log("start game");
    document.querySelector("#play").removeEventListener("click", startGame);
    document.querySelector("#liv").style.zIndex = "0";
    document.querySelector("#pige3").classList.add("hide");
    document.querySelector("#pige2").classList.add("hide");
    document.querySelector("#pige1").classList.add("hide");
    document.querySelector("#ond").classList.add("hide");
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#play").classList.add("hide");
    document.querySelector("#ond").classList.remove("gaa");
    document.querySelector("#headline").classList.add("hide");

    document.querySelector("#menu_background").classList.add("hide");
    document.querySelector("#game_background").classList.remove("hide");


    document.querySelector("#pointsholder").classList.remove("hide");
    document.querySelector("#points").classList.remove("hide");

    document.querySelector("#points").innerHTML = points;
    document.querySelector("#musik").play();
    document.querySelector("#click").play();

}

function snapChat() {
    console.log("snapChat");
    document.querySelector("#fig1").classList.remove("hide");
    document.querySelector("#fig1").addEventListener("click", showDick);
}

function showDick() {
    console.log("showDick");
    document.querySelector("#menu_background").classList.add("hide");

    document.querySelector("#fig1").classList.add("hide");
    document.querySelector("#fig2").classList.remove("hide");
    document.querySelector("#fig15").classList.remove("hide");

    document.querySelector("#fig15").addEventListener("click", questionOne);
    document.querySelector("#click").play();
}

function questionOne() {
    console.log("questionOne");
    document.querySelector("#fig2").classList.add("hide");
    document.querySelector("#fig15").classList.add("hide");

    document.querySelector("#fig4").classList.remove("hide");

    document.querySelector("#fig6").classList.remove("hide");
    document.querySelector("#fig9").classList.remove("hide");
    document.querySelector("#fig10").classList.remove("hide");

    document.querySelector("#fig9").addEventListener("click", questionTwo);
    document.querySelector("#fig10").addEventListener("click", questionTwo);
    document.querySelector("#fig9").addEventListener("click", clickHandler);
    document.querySelector("#fig10").addEventListener("click", clickHandler);

    document.querySelector("#click").play();
}

function questionTwo() {
    console.log("questionTwo");
    document.querySelector("#fig6").classList.add("hide");
    document.querySelector("#fig9").classList.add("hide");
    document.querySelector("#fig10").classList.add("hide");
    document.querySelector("#fig4").classList.add("hide");

    document.querySelector("#fig3").classList.remove("hide");

    document.querySelector("#fig7").classList.remove("hide");
    document.querySelector("#fig11").classList.remove("hide");
    document.querySelector("#fig12").classList.remove("hide");

    document.querySelector("#fig11").addEventListener("click", questionThree);
    document.querySelector("#fig12").addEventListener("click", questionThree);
    document.querySelector("#fig11").addEventListener("click", clickHandler);
    document.querySelector("#fig12").addEventListener("click", clickHandler);
}

function questionThree() {
    console.log("questionThree");
    document.querySelector("#fig3").classList.add("hide");
    document.querySelector("#fig7").classList.add("hide");
    document.querySelector("#fig11").classList.add("hide");
    document.querySelector("#fig12").classList.add("hide");

    document.querySelector("#fig5").classList.remove("hide");

    document.querySelector("#fig8").classList.remove("hide");
    document.querySelector("#fig13").classList.remove("hide");
    document.querySelector("#fig14").classList.remove("hide");

    document.querySelector("#fig13").addEventListener("click", clickHandlerSlut);
    document.querySelector("#fig14").addEventListener("click", clickHandlerSlut);


}

function clickHandlerSlut() {
    console.log("clickHandlerSlut");
    if (this.classList.contains("right")) {
        console.log("right");
        document.querySelector("#jaLyd").play();


        this.classList = "";
        this.classList.add("hide");
        points++;
        document.querySelector("#points").innerHTML = points;

    } else if (this.classList.contains("wrong")) {
        console.log("wrong");
        document.querySelector("#buzz").play();

        this.classList = "";
        this.classList.add("hide");
        console.log("heart" + life);
        document.querySelector("#heart" + life).classList.add("hide");

        life--;
    }

    gameStatus();
}

function clickHandler() {
    console.log("clickHandler");
    if (this.classList.contains("right")) {
        console.log("right");
        document.querySelector("#jaLyd").play();


        this.classList = "";
        this.classList.add("hide");
        points++;
        document.querySelector("#points").innerHTML = points;

    } else if (this.classList.contains("wrong")) {
        console.log("wrong");
        document.querySelector("#buzz").play();

        this.classList = "";
        this.classList.add("hide");
        console.log("heart" + life);
        document.querySelector("#heart" + life).classList.add("hide");

        life--;
    }
}

function gameStatus() {
    console.log("gamestatus")
    if (points > 1) {
        levelComplete();
    } else if (life < 2) {
        gameOver();
    }

    document.querySelector("#click").play();

}

//level complete og gameover

function levelComplete() {
    console.log("levelComplete");
    document.querySelector("#levelcomplete").classList.remove("hide");
    document.querySelector("#dans").classList.remove("hide");
    document.querySelector("#dans").classList.add("danse");

    document.querySelector("#fig13").classList.add("hide");
    document.querySelector("#fig14").classList.add("hide");
    document.querySelector("#fig5").classList.add("hide");
    document.querySelector("#fig17").classList.remove("hide");
    document.querySelector("#replaycomplete").classList.remove("hide");
    document.querySelector("#linkcomplete").classList.remove("hide");
    document.querySelector("#click").play();
    document.querySelector("#winning").play();
    document.querySelector("#musik").pause();
    document.querySelector("#jaLyd").pause();



    replay();
}

function gameOver() {
    console.log("gameOver");
    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#replaygameover").classList.remove("hide");
    document.querySelector("#linkgameover").classList.remove("hide");
    document.querySelector("#click").play();
    document.querySelector("#loose").play();
    document.querySelector("#musik").pause();
    document.querySelector("#buzz").pause();



    replay();
}

function replay() {
    console.log("replay");

    document.querySelector("#click").play();

    document.querySelector("#replaycomplete").addEventListener("click", showStart);

}

function showSettings() {
    console.log("showSettings");

    document.querySelector("#click").play();
    document.querySelector("#settings_screen").classList.remove("hide");

    document.querySelector("#settings_close").addEventListener("click", hideSettings);

    document.querySelector("#setting_music").addEventListener("click", toggleMusic);
    document.querySelector("#setting_effekt_sound").addEventListener("click", toggleSounds);
}

function hideSettings() {
    console.log("hideSettings");

    document.querySelector("#click").play();
    document.querySelector("#settings_screen").classList.add("hide");
    document.querySelector("#settings_close").removeEventListener("click", hideSettings);

    document.querySelector("#setting_music").removeEventListener("click", toggleMusic);
    document.querySelector("#setting_effekt_sound").removeEventListener("click", toggleSounds);
}

function toggleSounds() {

    console.log("toggleSounds");
    if (document.querySelector("#sfx_on").classList.contains("hide")) {
        document.querySelector("#sfx_on").classList.remove("hide")
        document.querySelector("#sfx_off").classList.add("hide")
        document.querySelector("#click").muted = false;
        document.querySelector("#buzz").muted = false;
        document.querySelector("#jaLyd").muted = false;
    } else {
        document.querySelector("#sfx_on").classList.add("hide")
        document.querySelector("#sfx_off").classList.remove("hide")
        document.querySelector("#click").muted = true;
        document.querySelector("#buzz").muted = true;
        document.querySelector("#jaLyd").muted = true;

    }

    document.querySelector("#click").currentTime;
    0;
    document.querySelector("#buzz").currentTime;
    0;
    document.querySelector("#jaLyd").currentTime;
    0;
}

function toggleMusic() {

    console.log("toggleMusic");

    document.querySelector("#musik").currentTime;
    0;

    if (document.querySelector("#music_on").classList.contains("hide")) {
        document.querySelector("#music_on").classList.remove("hide")
        document.querySelector("#music_off").classList.add("hide")
        document.querySelector("#musik").muted = false;
    } else {
        document.querySelector("#music_on").classList.add("hide")
        document.querySelector("#music_off").classList.remove("hide")
        document.querySelector("#musik").muted = true;
        document.querySelector("#loose").muted = true;
        document.querySelector("#winning").muted = true;


    }
}
