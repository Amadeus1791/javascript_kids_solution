const fragen = ["Was ist 5 + 3?", "Farbe von Schnee?", "Was ist 10 - 4?"]
const antworten = ["8", "weiss", "6"]

function starte() {
  let punkte = 0
  for (let i = 0; i < fragen.length; i++) {
    const antwort = prompt(fragen[i])
    if (antwort === antworten[i]) {
      punkte = punkte + 1
      alert("Richtig!")
    } else {
      alert("Leider falsch. Richtig war: " + antworten[i])
    }
  }
  document.getElementById("ergebnis").innerHTML =
    "Du hast " + punkte + " von " + fragen.length + " richtig!"
}
