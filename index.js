const pt = document.querySelector(".ling");
const nat = document.querySelector(".nat");
const mat = document.querySelector(".mat");
const hum = document.querySelector(".hum");
const red = document.querySelector(".red");
const resultBox = document.querySelector(".resultado");

const button = document.querySelector(".button");

button.addEventListener("click", somarMedia, { once: true });

function somarMedia(event) {
  event.preventDefault();

  const soma =
    Number.parseInt(pt.value) +
    Number.parseInt(nat.value) +
    Number.parseInt(mat.value) +
    Number.parseInt(hum.value) +
    Number.parseInt(red.value);

  const media = soma / 5;
  console.log(media);

  const resultDiv = document.createElement("div");
  resultDiv.classList.add("result-div");

  const resultSum = document.createElement("h2");
  resultSum.classList.add("result-sum");
  resultBox.appendChild(resultSum);
  resultSum.textContent = media;
}
