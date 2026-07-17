let welle = 1
let monsterLeben = 10

function zeigeMonster() {
  let balken = ""
  for (let i = 0; i < monsterLeben; i++) {
    balken = balken + "#"
  }
  document.getElementById("monster").innerHTML = "Welle " + welle + ": " + balken
}

function schlag() {
  monsterLeben = monsterLeben - 1
  if (monsterLeben <= 0) {
    welle = welle + 1
    monsterLeben = 10 + welle * 2
    document.getElementById("text").innerHTML = "Neue Welle: " + welle
  }
  zeigeMonster()
}

zeigeMonster()
