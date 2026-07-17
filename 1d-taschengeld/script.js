const proWoche = Number(prompt("Wie viel pro Woche?"))
const wochen = Number(prompt("Wie viele Wochen?"))

const gespart = proWoche * wochen
document.getElementById("ergebnis").innerHTML =
  "Nach " + wochen + " Wochen hast du " + gespart + " Euro."
