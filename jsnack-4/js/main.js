const emptyArray = [];

let outputText = "";

for (let i = 0; i <= 6; i++) {
  const answerUser = Number(prompt("inserisci un numero"));
  if (answerUser / 2 === 1) {
    outputText = emptyArray[answerUser];
  }
}

console.log(outputText);
