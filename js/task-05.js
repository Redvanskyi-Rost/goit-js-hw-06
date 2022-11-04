// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее значение в span#name - output.
//  Если инпут пустой, в спане должна отображаться строка "Anonymous".

const userInput = document.querySelector("#name-input");
const userOutput = document.querySelector("#name-output");
console.log(userInput, userOutput);

userInput.addEventListener("input", (event) => {
  userOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") userOutput.textContent = "Anonymous";
});
