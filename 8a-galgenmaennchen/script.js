let woerter = ["KATZE", "HUND", "MAUS", "PFERD", "VOGEL"]
let wort = woerter[Math.floor(Math.random() * woerter.length)]
let geraten = []
let fehler = 0

function zeigeWort() {
  let anzeige = ""
  for (let i = 0; i < wort.length; i++) {
    if (geraten.includes(wort[i])) {
      anzeige = anzeige + wort[i] + " "
    } else {
      anzeige = anzeige + "_ "
    }
  }
  document.getElementById("wort").innerHTML = anzeige
}

function rate(buchstabe) {
  geraten.push(buchstabe)
  if (wort.includes(buchstabe) === false) {
    fehler = fehler + 1
  }
  document.getElementById("fehler").innerHTML = "Fehler: " + fehler + " / 6"
  zeigeWort()

  if (fehler >= 6) {
    document.getElementById("text").innerHTML = "Verloren! Das Wort war " + wort
  }

  let gewonnen = true
  for (let i = 0; i < wort.length; i++) {
    if (geraten.includes(wort[i]) === false) gewonnen = false
  }
  if (gewonnen) {
    document.getElementById("text").innerHTML = "Gewonnen! Das Wort war " + wort
  }
}

zeigeWort()
