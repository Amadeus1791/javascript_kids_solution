function spielen() {
  const zahl = Math.floor(Math.random() * 100) + 1
  let tipp = Number(prompt("Rate eine Zahl von 1 bis 100:"))

  while (tipp !== zahl) {
    if (tipp < zahl) {
      tipp = Number(prompt("Zu klein! Nochmal:"))
    } else {
      tipp = Number(prompt("Zu gross! Nochmal:"))
    }
  }

  alert("Richtig! Die Zahl war " + zahl)
}
