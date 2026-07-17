const reihe = 7

function einmaleins() {
  let text = ""
  for (let i = 1; i <= 10; i++) {
    text = text + i + " x " + reihe + " = " + (i * reihe) + "<br>"
  }
  document.getElementById("tafel").innerHTML = text
}
