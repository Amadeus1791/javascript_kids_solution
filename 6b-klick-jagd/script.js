let punkte = 0
let zeit = 15
let timer

function start() {
  punkte = 0
  zeit = 15
  timer = setInterval(tick, 1000)
}

function tick() {
  zeit = zeit - 1
  document.getElementById("zeit").innerHTML = "Zeit: " + zeit
  if (zeit <= 0) {
    clearInterval(timer)
    document.getElementById("zeit").innerHTML = "Vorbei! Punkte: " + punkte
  }
}

function klick() {
  punkte = punkte + 1
  document.getElementById("punkte").innerHTML = "Punkte: " + punkte
}
