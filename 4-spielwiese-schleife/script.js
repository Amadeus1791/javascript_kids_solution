// 🧪 Spielwiese: probier die for-Schleife aus!

function los() {
  let text = ""
  for (let i = 1; i <= 5; i++) {
    text = text + i + " "
  }
  document.getElementById("text").innerHTML = text
}
