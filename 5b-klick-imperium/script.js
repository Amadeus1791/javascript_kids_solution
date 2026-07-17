let punkte = 0
let proKlick = 1
let preisMaus = 10
let preisFabrik = 100

function zeigeAlles() {
  document.getElementById("punkte").innerHTML = punkte
  document.getElementById("proKlick").innerHTML = proKlick
  document.getElementById("preisMaus").innerHTML = preisMaus
  document.getElementById("preisFabrik").innerHTML = preisFabrik
}

function klick() {
  punkte = punkte + proKlick
  zeigeAlles()
}

function kaufeMaus() {
  if (punkte >= preisMaus) {
    punkte = punkte - preisMaus
    proKlick = proKlick + 1
    preisMaus = preisMaus * 2
    zeigeAlles()
  } else {
    alert("Nicht genug Punkte!")
  }
}

function kaufeFabrik() {
  if (punkte >= preisFabrik) {
    punkte = punkte - preisFabrik
    proKlick = proKlick + 10
    preisFabrik = preisFabrik * 2
    zeigeAlles()
  } else {
    alert("Nicht genug Punkte!")
  }
}

zeigeAlles()
