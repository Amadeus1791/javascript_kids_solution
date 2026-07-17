const symbole = ["Kirsche", "Stern", "Glocke"]

function dreh() {
  const a = symbole[Math.floor(Math.random() * 3)]
  const b = symbole[Math.floor(Math.random() * 3)]
  const c = symbole[Math.floor(Math.random() * 3)]
  document.getElementById("rad").innerHTML = a + " " + b + " " + c

  if (a === b && b === c) {
    document.getElementById("text").innerHTML = "JACKPOT!"
  } else {
    document.getElementById("text").innerHTML = "Nochmal!"
  }
}
