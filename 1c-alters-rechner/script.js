let jahr = Number(prompt("In welchem Jahr bist du geboren?"))
let alter = 2026 - jahr
let tage = alter * 365

document.getElementById("ergebnis").innerHTML =
  "Du bist " + alter + " Jahre alt, das sind " + tage + " Tage!"
