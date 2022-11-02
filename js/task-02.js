// Напиши скрипт, который для каждого элемента массива ingredients:

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ref = document.querySelector("#ingredients");

const newIngredients = ingredients.map((ingredient) => {
  // Создаст отдельный элемент <li>. Обзательно используй метод document.createElement()
  const newEl = document.createElement("li");
  // Добавит название ингредиента как его текстовое содержимое.
  newEl.textContent = ingredient;
  // Добавит элементу класс item.
  newEl.className = "item";

  return newEl;
});
// После чего вставит все <li> за одну операцию в список ul#ingredients.
ref.append(...newIngredients);
