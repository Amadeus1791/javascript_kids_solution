let feld = ["", "", "", "", "", "", "", "", ""]

function setze(i) {
  if (feld[i] !== "") return
  feld[i] = "X"
  document.getElementById("z" + i).innerHTML = "X"

  if (gewonnen()) {
    document.getElementById("text").innerHTML = "Du gewinnst!"
    return
  }
  computerZug()
}

function computerZug() {
  let frei = []
  for (let i = 0; i < feld.length; i++) {
    if (feld[i] === "") frei.push(i)
  }
  if (frei.length === 0) {
    document.getElementById("text").innerHTML = "Unentschieden!"
    return
  }
  const wahl = frei[Math.floor(Math.random() * frei.length)]
  feld[wahl] = "O"
  document.getElementById("z" + wahl).innerHTML = "O"

  if (gewonnen()) {
    document.getElementById("text").innerHTML = "Der Computer gewinnt!"
  } else {
    document.getElementById("text").innerHTML = "Du bist dran"
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
