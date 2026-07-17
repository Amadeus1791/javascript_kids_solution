let symbole = ["🍎","🍎","⭐","⭐","🐶","🐶","🌈","🌈"]
symbole.sort(function() { return Math.random() - 0.5 })

let erste = -1
let zweite = -1
let sperre = false

function klick(i) {
  if (sperre) return
  const karte = document.getElementById("k" + i)
  if (karte.innerHTML !== "?") return
  karte.innerHTML = symbole[i]

  if (erste === -1) {
    erste = i
  } else {
    pruefe(i)
  }
}

function pruefe(i) {
  zweite = i
  if (symbole[erste] === symbole[zweite]) {
    erste = -1
    zweite = -1
  } else {
    sperre = true
    setTimeout(klappeZurueck, 800)
  }
}

function klappeZurueck() {
  document.getElementById("k" + erste).innerHTML = "?"
  document.getElementById("k" + zweite).innerHTML = "?"
  erste = -1
  zweite = -1
  sperre = false
}
