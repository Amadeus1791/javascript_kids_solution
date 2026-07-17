let heldLeben = 100
let monsterLeben = 100
let traenke = 3

function zeige() {
  document.getElementById("held").innerHTML = "Held: " + heldLeben + " Leben"
  document.getElementById("monster").innerHTML = "Monster: " + monsterLeben + " Leben"
}

function angriff() {
  const schaden = Math.floor(Math.random() * 20) + 5
  monsterLeben = monsterLeben - schaden

  const monsterSchaden = Math.floor(Math.random() * 20) + 5
  heldLeben = heldLeben - monsterSchaden

  zeige()

  if (monsterLeben <= 0) {
    document.getElementById("text").innerHTML = "Du hast gewonnen!"
  } else if (heldLeben <= 0) {
    document.getElementById("text").innerHTML = "Das Monster gewinnt!"
  }
}

function heiltrank() {
  if (traenke > 0) {
    const heilung = Math.floor(Math.random() * 20) + 10
    heldLeben = heldLeben + heilung
    if (heldLeben > 100) heldLeben = 100
    traenke = traenke - 1
    document.getElementById("text").innerHTML = "Geheilt! Noch " + traenke + " Tränke."
    zeige()
  } else {
    document.getElementById("text").innerHTML = "Keine Tränke mehr!"
  }
}
