alert("Гра вгадай число");
const access = confirm("Чи розпочати гру?");

if (access) {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const userInput = Number(prompt("Введіть число 1-10:"));

  if (randomNumber === userInput) {
    alert(`Вітаю з перемогою ви ввели правильне число: ${userInput}`);

  } else {

    alert(`На жаль ви не вгадали, правильне число: ${randomNumber}`);
  }

  alert("Дякуємо за гру, приходьте ще");

} else {

  alert("Можливо, в інший раз. До побачення!");
}
