const emptyArray = [];

for (let i = 0; i < 6; i++) {
  const answerUser = parseInt(prompt("inserisci un numero"));
  if (answerUser % 2 === 1) {
    emptyArray.push(answerUser);
  }
}

console.table(emptyArray);
