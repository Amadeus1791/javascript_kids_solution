function spiele(spieler) {
  const optionen = ["Schere", "Stein", "Papier"]
  const computer = optionen[Math.floor(Math.random() * 3)]

  let ergebnis = "Der Computer gewinnt! 😢"
  if (spieler === computer) {
    ergebnis = "Unentschieden! 🤝"
  } else if (
    (spieler === "Schere" && computer === "Papier") ||
    (spieler === "Stein" && computer === "Schere") ||
    (spieler === "Papier" && computer === "Stein")
  ) {
    ergebnis = "Du gewinnst! 🎉"
  }

  document.getElementById("ergebnis").innerHTML =
    "Du: " + spieler + "<br>Computer: " + computer + "<br><b>" + ergebnis + "</b>"
}
