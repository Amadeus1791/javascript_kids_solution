let count = 0

function klick() {
  count = count + 1
  document.getElementById("anzeige").innerHTML = count
}

function zurueck() {
  count = 0
  document.getElementById("anzeige").innerHTML = count
}
