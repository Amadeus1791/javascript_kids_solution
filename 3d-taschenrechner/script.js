let anzeige = ""
let ersteZahl = 0
let rechenart = ""

function tippe(ziffer) {
  anzeige = anzeige + ziffer
  document.getElementById("display").innerHTML = anzeige
}

function waehle(art) {
  ersteZahl = Number(anzeige)
  rechenart = art
  anzeige = ""
}

function rechne() {
  const zweite = Number(anzeige)
  let ergebnis = 0
  if (rechenart === "+") {
    ergebnis = ersteZahl + zweite
  } else if (rechenart === "-") {
    ergebnis = ersteZahl - zweite
  }
  document.getElementById("display").innerHTML = ergebnis
}
