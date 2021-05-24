const person = {
  nome: "Sam",
  age: 10,
  animal: "cat",
};

//Usando tamplete string para concatenação

console.log(
  `${person.nome} is ${person.age} years old nd her favorete animal is a ${person.animal}`
);

//calculador de média
const nota1 = Number(window.prompt(`Digite sua primeira nota`));
const nota2 = Number(window.prompt(`Digite a sua segunda nota`));

// usando conversão de dados

const soma = nota1 + nota2;
const media = soma / 2;

document.write(`sua média foi: ${media}`);

//const form = document.querySelector("#form");
//const notes = document.querySelector("#notes");
//form.appendChild(notes);

// console.log(pt.value);
// console.log(nat.value);

// if (!isNaN(soma)) {
//   document.getElementById("res").innerHTML = "Sua nota é" + soma;
//   console.log(soma);
// }

// console.log(hum.value);
// console.log(mat.value);
// console.log(red.value);
