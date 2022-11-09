// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.Используй готовую функцию getRandomHexColor для получения цвета.

const createEl = document.querySelector("button[data-create]");
// console.log("button[data-create]");
const destroyEl = document.querySelector("button[data-destroy]");
// console.log("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");
// console.log(boxes);
const inputEl = document.querySelector("input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const addBoxes = (amount) => {
  const colorBoxArr = [];
  for (let i = 0; i < amount; i += 1) {
    colorBoxArr[i] = document.createElement("div");
    colorBoxArr[i].style.height = `${30 + 10 * i}px`;
    colorBoxArr[i].style.width = `${30 + 10 * i}px`;
    colorBoxArr[i].style.background = getRandomHexColor();
  }
  boxesEl.append(...colorBoxArr);
};

createEl.addEventListener("click", () => {
  addBoxes(inputEl.value);
});

destroyEl.addEventListener("click", () => {
  boxes.innerHTML = "";
  inputEl.value = "";
});
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
