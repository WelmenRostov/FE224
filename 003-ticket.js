/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */

function hui(acc, currentValue) {
    const numValue = Number(currentValue); // Преобразуем currentValue в число
    if (!isNaN(numValue)) { // Проверяем, является ли numValue числом
        return acc + numValue; // Суммируем с аккумулятором
    } else {
        throw new Error('Некорректное значение: должно быть числом.');
    }
}
function checkTicket(number) {
    let ticketArray = number.split('');
    let oneValues = ticketArray.slice(0, 3).reduce(hui, 0);
    let twoValues = ticketArray.slice(-3).reduce(hui, 0);
    if (oneValues === twoValues){
        return true
    } else {
        return false
    }
}

checkTicket('005 312')
checkTicket('133700')
checkTicket('123032')
module.exports = checkTicket;
