//Caroline start//

function startGame() {
    console.log("start game");
    document.querySelector("#fig1").classList.remove(hide);
    document.querySelector("#fig1").addEventListener("click", showDick);

}

function showDick() {
    document.querySelector("#fig1").classList.add(hide);
    document.querySelector("#fig2").classList.remove(hide);
}

//Caroline slut//
