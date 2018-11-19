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
     document.querySelector("#settings").addEventListener("click", showSettings);
     startGame();

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
     document.querySelector("#fig15").classList.remove("hide");
     document.querySelector("#fig16").classList.remove("hide");

     document.querySelector("#fig16").addEventListener("click", questionOne);

 }

 function questionOne() {
     document.querySelector("#fig2").classList.add("hide");
     document.querySelector("#fig15").classList.add("hide");
     document.querySelector("#fig16").classList.add("hide");

     document.querySelector("#fig4").classList.remove("hide");

     document.querySelector("#fig6").classList.remove("hide");
     document.querySelector("#fig9").classList.remove("hide");
     document.querySelector("#fig10").classList.remove("hide");

     document.querySelector("#fig9").addEventListener("click", questionTwo);
     document.querySelector("#fig10").addEventListener("click", questionTwo);
     document.querySelector("#fig9").addEventListener("click", clickHandler);
     document.querySelector("#fig10").addEventListener("click", clickHandler);



 }

 function questionTwo() {
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
     document.querySelector("#fig3").classList.add("hide");
     document.querySelector("#fig7").classList.add("hide");
     document.querySelector("#fig11").classList.add("hide");
     document.querySelector("#fig12").classList.add("hide");

     document.querySelector("#fig5").classList.remove("hide");

     document.querySelector("#fig8").classList.remove("hide");
     document.querySelector("#fig13").classList.remove("hide");
     document.querySelector("#fig14").classList.remove("hide");

     document.querySelector("#fig13").addEventListener("click", clickHandler);
     document.querySelector("#fig14").addEventListener("click", clickHandler);


 }

 function clickHandler() {
     console.log(clickHandler);
     if (this.classList.contains("right")) {
         console.log("right");

         //        this.classList = "";
         //        this.classList.add("dissappear");
         //        points++;
         //        document.querySelector("#points").innerHTML = points;

     } else if (this.classList.contains("wrong")) {
         console.log("wrong");

         this.classList = "";
         this.classList.add("dissappear");
         document.querySelector("heart" + life).classList.add("dissappear");

         life--;
     }
     //     this.classList.add("dissappear");
     //
     //    if (life === 0) {
     //        gameOver();
     //    } else if (points === 10) {
     //        levelComplete();
     //    }

 }
