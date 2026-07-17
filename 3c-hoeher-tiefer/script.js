let aktuelle = Math.floor(Math.random() * 13) + 1
let punkte = 0
document.getElementById("karte").innerHTML = aktuelle

function raten(wahl) {
  const naechste = Math.floor(Math.random() * 13) + 1

  let richtig = false
  if (wahl === "hoeher" && naechste > aktuelle) richtig = true
  if (wahl === "tiefer" && naechste < aktuelle) richtig = true

  if (richtig) {
    punkte = punkte + 1
  } else {
    punkte = 0
  }

  aktuelle = naechste
  document.getElementById("karte").innerHTML = aktuelle
  document.getElementById("punkte").innerHTML = "Punkte: " + punkte
}
