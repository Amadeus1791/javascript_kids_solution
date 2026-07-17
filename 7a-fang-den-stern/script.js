let x = 100
let y = 100
let zielX = 300
let zielY = 150
let punkte = 0

document.addEventListener("keydown", bewege)

function bewege(event) {
  if (event.key === "ArrowRight") x = x + 20
  else if (event.key === "ArrowLeft")  x = x - 20
  else if (event.key === "ArrowUp")    y = y - 20
  else if (event.key === "ArrowDown")  y = y + 20

  document.getElementById("figur").style.left = x + "px"
  document.getElementById("figur").style.top = y + "px"

  pruefe()
}

function pruefe() {
  const naheX = x > zielX - 30 && x < zielX + 30
  const naheY = y > zielY - 30 && y < zielY + 30
  if (naheX && naheY) {
    fangen()
  }
}

function fangen() {
  punkte = punkte + 1
  document.getElementById("punkte").innerHTML = "Punkte: " + punkte
  zielX = Math.floor(Math.random() * 400)
  zielY = Math.floor(Math.random() * 300)
  document.getElementById("stern").style.left = zielX + "px"
  document.getElementById("stern").style.top = zielY + "px"
}
