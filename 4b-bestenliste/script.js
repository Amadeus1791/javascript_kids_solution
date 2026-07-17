const namen = ["Mia", "Tom", "Lena", "Ben"]

function zeigeListe() {
  let text = ""
  for (let i = 0; i < namen.length; i++) {
    text = text + (i + 1) + ". " + namen[i] + "<br>"
  }
  document.getElementById("liste").innerHTML = text
}
