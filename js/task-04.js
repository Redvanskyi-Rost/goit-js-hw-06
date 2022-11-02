// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.

// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.

// Обновляй интерфейс новым значением переменной counterValue.

const decrementBtn = document.querySelector('[data-action="decrement"]');
// console.log(decrementBtn);
const incrementBtn = document.querySelector('[data-action="increment"]');
// console.log(incrementBtn);
const countValue = document.querySelector("#value");
// console.log(countValue);

let counterValue = 0;
// console.log(counterValue);

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  countValue.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  countValue.textContent = counterValue;
});
