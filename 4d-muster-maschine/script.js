const symbole = ["⭐", "❤️", "🌈", "🔥", "🍀"]

function zeichne() {
  let muster = ""
  for (let i = 0; i < 30; i++) {
    muster = muster + symbole[Math.floor(Math.random() * symbole.length)]
  }
  document.getElementById("muster").innerHTML = muster
}
