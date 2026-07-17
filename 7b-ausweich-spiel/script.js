let x = 200
let hindernisX = 100
let hindernisY = 0
let punkte = 0
let tempo = 6
let timer

document.addEventListener("keydown", bewege)

function bewege(event) {
  if (event.key === "ArrowLeft")  x = x - 20
  else if (event.key === "ArrowRight") x = x + 20
  document.getElementById("spieler").style.left = x + "px"
}

function start() {
  timer = setInterval(fallen, 50)
}

function fallen() {
  hindernisY = hindernisY + tempo
  if (hindernisY > 340) {
    hindernisY = 0
    hindernisX = Math.floor(Math.random() * 400)
    punkte = punkte + 1
    tempo = tempo + 1
    document.getElementById("punkte").innerHTML = "Punkte: " + punkte
  }
  document.getElementById("hindernis").style.top = hindernisY + "px"
  document.getElementById("hindernis").style.left = hindernisX + "px"
  pruefe()
}

function pruefe() {
  const naheX = hindernisX > x - 30 && hindernisX < x + 30
  const untenY = hindernisY > 300
  if (naheX && untenY) {
    clearInterval(timer)
    document.getElementById("punkte").innerHTML = "Getroffen! Punkte: " + punkte
  }
}
