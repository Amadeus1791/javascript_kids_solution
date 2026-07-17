// 🧪 Spielwiese: probier if / else aus!

function pruefe() {
  let zahl = Number(prompt("Gib eine Zahl ein:"))
  if (zahl > 10) {
    document.getElementById("text").innerHTML = "Das ist gross!"
  } else {
    document.getElementById("text").innerHTML = "Das ist klein!"
  }
}
