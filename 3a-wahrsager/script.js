const antworten = ["Ja, sicher!", "Auf keinen Fall.", "Vielleicht."]

function frage() {
  const i = Math.floor(Math.random() * antworten.length)
  document.getElementById("antwort").innerHTML = antworten[i]
}
