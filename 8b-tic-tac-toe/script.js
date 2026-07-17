let feld = ["", "", "", "", "", "", "", "", ""]
let spieler = "X"

function setze(i) {
  if (feld[i] !== "") return

  feld[i] = spieler
  document.getElementById("z" + i).innerHTML = spieler

  if (gewonnen()) {
    document.getElementById("text").innerHTML = spieler + " gewinnt!"
  } else {
    if (spieler === "X") {
      spieler = "O"
    } else {
      spieler = "X"
    }
    document.getElementById("text").innerHTML = spieler + " ist dran"
  }
}

function gewonnen() {
  let linien = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ]
  for (let i = 0; i < linien.length; i++) {
    let a = linien[i][0]
    let b = linien[i][1]
    let c = linien[i][2]
    if (feld[a] !== "" && feld[a] === feld[b] && feld[b] === feld[c]) {
      return true
    }
  }
  return false
}
