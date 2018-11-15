let showSettingsEffektSound = true;

//Natalie S. Start

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    showStart();
}

function showStart() {
    console.log("showStart");
    document.querySelector("#settings").addEventListener("click", showSettings);
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


//Natalie S. slut
