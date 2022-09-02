const btnRed = document.getElementById("btn-red");
const btnBlue = document.getElementById("btn-blue");

let compteur = 0;
let titre = document.getElementById(".titre");

btnRed.addEventListener("click", function () {
  add();
});

btnBlue.addEventListener("click", function () {
  add();
});

function add() {
  compteur = compteur + 1;
  console.log(compteur, "compteur");
  titre.innerText = compteur;
}

setTimeout(function () {
  btnBlue.remove();
  btnRed.remove();
}, 10000);
