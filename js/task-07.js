// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
//  В результате при перетаскивании ползунка будет меняться размер текста.

const inputSize = document.querySelector("#font-size-control");
// console.log(inputSize);
const inputStyle = document.querySelector("#text");
// console.log(text);

inputSize.addEventListener(
  "input",
  () => (inputStyle.style.fontSize = `${inputSize.value}px`)
);
