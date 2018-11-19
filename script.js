<<<<<<< HEAD
let showSettingsEffektSound = true;
window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    showStart();
}

function showStart() {
    console.log("showStart");
    document.querySelector("#settings").addEventListener("click", showSettings);
    startGame();
}

function startGame() {
    console.log("start game");
    document.querySelector("#fig1").classList.remove("hide");
    document.querySelector("#fig1").addEventListener("click", showDick);
    document.querySelector("#musik").play();
}



function showSettings() {
    console.log("showSettings");
    document.querySelector("#settings_screen").classList.remove("hide");

    document.querySelector("#settings_close").addEventListener("click", hideSettings);

    document.querySelector("#setting_music").addEventListener("click", toggleMusic);
    document.querySelector("#setting_effekt_sound").addEventListener("click", toggleSounds);
}

function hideSettings() {
    console.log("hideSettings");

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
        document.querySelector("#navn_på_lyd").muted = false;
        document.querySelector("#navn_på_lyd").muted = false;
    } else {
        document.querySelector("#sfx_on").classList.add("hide")
        document.querySelector("#sfx_off").classList.remove("hide")
        document.querySelector("#navn_på_lyd").muted = true;
        document.querySelector("#navn_på_lyd").muted = true;
    }
}

function toggleMusic() {

    console.log("toggleMusic");
    if (document.querySelector("#music_on").classList.contains("hide")) {
        document.querySelector("#music_on").classList.remove("hide")
        document.querySelector("#music_off").classList.add("hide")
        document.querySelector("#musik").muted = false;
    } else {
        document.querySelector("#music_on").classList.add("hide")
        document.querySelector("#music_off").classList.remove("hide")
        document.querySelector("#musik").muted = true;
    }
}

function showDick() {
    document.querySelector("#fig1").classList.add("hide");
    document.querySelector("#fig2").classList.remove("hide");
}
=======
 let showSettingsEffektSound = true;
 //Caroline start//
 window.addEventListener("load", sidenVises);

 function sidenVises() {
     console.log("siden vises");
     showStart();
 }

 function showStart() {
     console.log("showStart");
     document.querySelector("#settings").addEventListener("click", showSettings);
     startGame();

     document.querySelector("#ond").classList.add("gaa");
     document.querySelector("#play").classList.remove("hide");
     document.querySelector("#play").classList.add("pulse");
     document.querySelector("#play").addEventListener("click", hideStart);
 }

 function startGame() {
     console.log("start game");
     document.querySelector("#fig1").classList.remove("hide");
     document.querySelector("#fig1").addEventListener("click", showDick);

 }



 function showSettings() {
     console.log("showSettings");
     document.querySelector("#settings_screen").classList.remove("hide");

     document.querySelector("#settings_close").addEventListener("click", hideSettings);

     document.querySelector("#setting_music").addEventListener("click", toggleMusic);
     document.querySelector("#setting_effekt_sound").addEventListener("click", toggleSounds);
 }

 function hideSettings() {
     console.log("hideSettings");

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
         document.querySelector("#navn_på_lyd").muted = false;
         document.querySelector("#navn_på_lyd").muted = false;
     } else {
         document.querySelector("#sfx_on").classList.add("hide")
         document.querySelector("#sfx_off").classList.remove("hide")
         document.querySelector("#navn_på_lyd").muted = true;
         document.querySelector("#navn_på_lyd").muted = true;
     }
 }

 function toggleMusic() {

     console.log("toggleMusic");
     if (document.querySelector("#music_on").classList.contains("hide")) {
         document.querySelector("#music_on").classList.remove("hide")
         document.querySelector("#music_off").classList.add("hide")
         document.querySelector("#musik").muted = false;
     } else {
         document.querySelector("#music_on").classList.add("hide")
         document.querySelector("#music_off").classList.remove("hide")
         document.querySelector("#musik").muted = true;
     }
 }

 function showDick() {
     document.querySelector("#fig1").classList.add("hide");
     document.querySelector("#fig2").classList.remove("hide");
 }
>>>>>>> origin/master
