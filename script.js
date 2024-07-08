// Задание 1
// Примените каждый из этих методов округления к трем числам: 5.4, 5.5, 5.6:
// Math.round(x)
// Math.ceil(x)
// Math.floor(x)
// В комментариях к каждой строке напишите, как работают эти округления.
// let num1 = 5.4;
// let num2 = 5.5;
// let num3 = 5.6;

// console.log(Math.round(num1)); // 5, округляет до ближайшего целого
// console.log(Math.round(num2)); // 6, округляет до ближайшего целого
// console.log(Math.round(num3)); // 6, округляет до ближайшего целого

// console.log(Math.ceil(num1)); // 6, округляет до большего целого
// console.log(Math.ceil(num2)); // 6, округляет до большего целого
// console.log(Math.ceil(num3)); // 6, округляет до большего целого

// console.log(Math.floor(num1)); // 5, округляет до меньшего целого
// console.log(Math.floor(num2)); // 5, округляет до меньшего целого
// console.log(Math.floor(num3)); // 5, округляет до меньшего целого

// Задание 2
// Выведите в консоль фразы в 2 строки:
// Сегодня 27 октября 2022 (здесь будет ваша дата) - используйте options для вывода месяца словом
// 19 часов 20 минут (здесь будет ваше время) - используйте шаблонную строку, в которую подставьте значения с помощью методов getHours() и getMinutes()

// const today = new Date();
// const options = {
//   day: "numeric",
//   month: "long",
//   year: "numeric",
// };
// console.log(`Сегодня ${today.toLocaleDateString("ru-RU", options)}`);

// const hours = today.getHours();
// const minutes = today.getMinutes();
// console.log(`${hours} часов ${minutes} минут`);
