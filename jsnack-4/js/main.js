// ^jack-4
const emptyArray = [];

for (let i = 0; i < 6; i++) {
  const answerUser = parseInt(prompt("inserisci un numero"));
  if (answerUser % 2 === 1) {
    emptyArray.push(answerUser);
  }
}

console.table(emptyArray);

//^ jack 5
const n = prompt("di quanti numeri vuoi il cubo");

for (let i = 0; i < n; i++) {
  console.log(i * i * i);
}

// ^jack 7

const fourNuber = prompt("massimo 4 cifre");

let sumNumb = 0;
// console.log(fourNuber);
if (fourNuber.length <= 4) {
  for (let i = 0; i < fourNuber.length; i++) {
    const currentNumber = parseInt(fourNuber[i]);
    console.log("currentNumber", currentNumber);
    sumNumb += currentNumber;
  }
  console.log(alert(sumNumb));
} else {
  console.log(alert("troppe cifre"));
}
