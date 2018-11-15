//Natalie S. Start

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");

    function showStart() {
        console.log("showStart");
        document.querySelector("#settings").addEventListener("click", showSettings);
    }

    function showSettings() {
        console.log("showSettings");
        document.querySelector("#settings_screen").classList.remove("hide");

        document.querySelector("#settings_close").addEventListener("click", hideSettings);
    }

    function hideSettings() {
        console.log("hideSettings");

        document.querySelector("#settings_screen").classList.add("hide");
        document.querySelector("#settings_close").removeEventListener("click", hideSettings);
    }

    //Natalie S. slut
