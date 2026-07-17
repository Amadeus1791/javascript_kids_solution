let startZeit = 0

function starte() {
  document.getElementById("feld").innerHTML = "Warte auf Gruen..."
  document.getElementById("feld").style.backgroundColor = "red"
  const wartezeit = Math.floor(Math.random() * 3000) + 1000
  setTimeout(gruen, wartezeit)
}

function gruen() {
  document.getElementById("feld").innerHTML = "JETZT klicken!"
  document.getElementById("feld").style.backgroundColor = "green"
  startZeit = Date.now()
}

function klick() {
  const zeit = Date.now() - startZeit
  document.getElementById("feld").innerHTML = "Deine Zeit: " + zeit + " ms"
}
