'use strict'

// Exemple #1
// хочу купить картошку фри и гамбургер и если все есть то я остаюсь.
// важно помнить что если название переменной без цифры то оно всегда равно =1

// const hamburger = 2;
// const fries = 1;

// if (hamburger && fries) {
// console.log('well done');
// } else {
//     console.log('I go away')
// }



// Exemple #2
// В заведении с Двумя друзьями и должно каждый хочет сьесть по гамбуреру и только я хочу картошку, тоесть картошка должна быть хотябы одна

// const hamburger = 3;
// const fries = 1;

// if (hamburger === 3 && fries) {
// console.log('we go eating');
// } else {
//     console.log('we go another place')
// }



// Extmple #3 Добавляем Колу к списку продуктов и смотрим на каком моменте у нас останавливается выполнение проверки. Тоесть Анализ останавливается при первом невыполнении условия.


// const hamburger = 4;
// const fries = 2;
// const cola = 1;

// console.log(hamburger === 4 && cola && fries)

// if (hamburger === 4 && cola === 1 && fries === 2) {
//     console.log('we stay at this plase');
// } else {
//     console.log('we dont stay')
// }



// Примечание: Тут показано на каком моменте заканчивается проверка кода. Так как все условия выполнены то проверка заканчивается на последнем условии на fries -которых в количестве 2 и в консоле будет выдваться 2.

// const hamburger = 4;
// const fries = 2;
// const cola = 1;

// console.log(hamburger === 4 && cola && fries)


// Exemple #4 сравниваем числа и смотрим на каком месте заканчивается определение. Там где 0 , nan , null , und . Процес будет остановлен.

// console.log(1 && 0);
// console.log(null && 4);
// console.log(5 && 'single');
// console.log(0 && 'exemple');


// Exemple #5 Уже добавлен оператор или , когда хотыбы одно условие выполняется.
// Условие что бы было хотябы или кола или фрии

// const hamburger = 0;
// const fries = 0;
// const cola = null;

// if (hamburger || fries || cola) {
//     console.log('we stay in cafe')
// } else {
//     console.log('we go away')
// }
// console.log(hamburger || fries || cola)

// Примечание в последней строке показано в какой момент процес заканчивает выполнение. 

//Exemple #6 
//нужен отчет хотябы от отдного сотрудника и тогда условие выполнено

// let alexa, robert, nik, margaret = 'done';
// console.log(alexa || robert || nik || margaret);

//Exemple #6 
// добавляем условие когда должно быть два елемента сразу и гамбургер и сола допустим или фрии и нагетс


// const hamburger = 2;
// const fries = 2;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola === 3 || fries === 2 && nuggets || cola) {
//     console.log('we stay in cafe')
// } else {
//     console.log('we go away')
// }
// // примимчание - указано на каком моменте останавливается проверка
// console.log(hamburger && cola === 3 || fries === 2 && nuggets || cola)