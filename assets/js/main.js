// HTML Elemente
const resultsBox = document.querySelector(".results");
const count = document.querySelector(".counter-box");
const yourCount = document.querySelector(".counter-box span:nth-of-type(1)");
const cpuCount = document.querySelector("#count");
const rounds = document.querySelector("#rounds");
const chooseWeapon = document.querySelector("header h3");

// Spielstand Counter
let yourCountNew = 0;
let cpuCountNew = 0;
let roundsPlayed = 0;

// Computerauswahl
const randomCpuChoice = () => {
  const choices = ["scissors", "stone", "paper"];
  //   Generiert über Zufall die Auswahl des CPU
  const resultChoices = choices[Math.floor(Math.random() * 3)];
  return resultChoices;
};

const go = (event) => {
  // Übernimmt die ID's der IMG's, um die Wahl des Spielers auszugeben
  const userInput = event.target.id;
  //   Übernimmt die Wahl des CPU
  const computerInput = randomCpuChoice();
  //   Leert die Result Box
  resultsBox.innerHTML = " ";
  //   Fügt nach jedem Spiel +1 dem Runden Counter hinzu und gibt es aus
  roundsPlayed++;
  rounds.innerText = roundsPlayed;
  //   Abfrage für Unentschieden
  if (userInput === computerInput) {
    resultsBox.innerHTML += `<h3> You choose: ${userInput}  </h3>`;
    resultsBox.innerHTML += `<h3> CPU choose: ${computerInput}  </h3>`;
    resultsBox.innerHTML +=
      "<h3 style='background-color: orange;'> Result: Draw </h3>";
    //   Abfrage für Sieg Spieler
  } else if (
    (userInput === "stone" && computerInput === "scissors") ||
    (userInput === "scissors" && computerInput === "paper") ||
    (userInput === "paper" && computerInput === "stone")
  ) {
    resultsBox.innerHTML += `<h3> You choose: ${userInput}  </h3>`;
    resultsBox.innerHTML += `<h3> CPU choose: ${computerInput}  </h3>`;
    resultsBox.innerHTML +=
      "<h3 style='background-color: green;'> Result: You win </h3>";
    // Spielstand Counter für den Spieler
    yourCountNew++;
    yourCount.innerText = yourCountNew;
    // Abfrage Sieg CPU
  } else {
    resultsBox.innerHTML += `<h3> You choose: ${userInput}  </h3>`;
    resultsBox.innerHTML += `<h3> CPU choose: ${computerInput}  </h3>`;
    resultsBox.innerHTML +=
      "<h3 style='background-color: red;'> Result: CPU wins </h3>";
    // Spielstand Counter für CPU
    cpuCountNew++;
    cpuCount.innerText = cpuCountNew;
  }
};

// Refresh der Seite über Button
const resetGame = () => {
  window.location.reload();
};

// ! Vor Kürzung, erster funktionierender Entwurf

// const goRock = () => {
//   const randomNumber = randomNum();
//   resultsBox.innerHTML = " ";
//   resultsBox.innerHTML += "<h3> You choose: rock </h3>";
//   if (randomNumber == 1) {
//     resultsBox.innerHTML += "<h3> CPU choose: rock </h3>";
//     resultsBox.innerHTML += "<h3> Result: Draw </h3>";
//     chooseWeapon.innerHTML = " ";
//   } else if (randomNumber == 2) {
//     resultsBox.innerHTML += "<h3> CPU choose: paper </h3>";
//     resultsBox.innerHTML += "<h3> Result: CPU wins </h3>";
//     chooseWeapon.innerHTML = " ";
//   } else if (randomNumber == 3) {
//     resultsBox.innerHTML += "<h3> CPU choose: scissor </h3>";
//     resultsBox.innerHTML += "<h3> Result: You win </h3>";
//     chooseWeapon.innerHTML = " ";
//   }
// };
// const goPaper = () => {
//   const randomNumber = randomNum();
//   resultsBox.innerHTML = " ";
//   resultsBox.innerHTML += "<h3> You choose: paper </h3>";
//   if (randomNumber == 1) {
//     resultsBox.innerHTML += "<h3> CPU choose: rock </h3>";
//     resultsBox.innerHTML += "<h3> Result: You win </h3>";
//     chooseWeapon.innerHTML = " ";
//   } else if (randomNumber == 2) {
//     resultsBox.innerHTML += "<h3> CPU choose: paper </h3>";
//     resultsBox.innerHTML += "<h3> Result: Draw </h3>";
//     chooseWeapon.innerHTML = " ";
//   } else if (randomNumber == 3) {
//     resultsBox.innerHTML += "<h3> CPU choose: scissor </h3>";
//     resultsBox.innerHTML += "<h3> Result: CPU wins </h3>";
//     chooseWeapon.innerHTML = " ";
//   }
// };
// const goScissor = () => {
//   const randomNumber = randomNum();
//   resultsBox.innerHTML = " ";
//   resultsBox.innerHTML += "<h3> You choose: scissor </h3>";
//   if (randomNumber == 1) {
//     resultsBox.innerHTML += "<h3> CPU choose: rock </h3>";
//     resultsBox.innerHTML += "<h3> Result: CPU wins </h3>";
//     chooseWeapon.innerHTML = " ";
//   } else if (randomNumber == 2) {
//     resultsBox.innerHTML += "<h3> CPU choose: paper </h3>";
//     resultsBox.innerHTML += "<h3> Result: You win </h3>";
//     chooseWeapon.innerHTML = " ";
//   } else if (randomNumber == 3) {
//     resultsBox.innerHTML += "<h3> CPU choose: scissor </h3>";
//     resultsBox.innerHTML += "<h3> Result: Draw </h3>";
//     chooseWeapon.innerHTML = " ";
//   }
// };
