/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
    let whoWon = 0;
    for (let valueArray of points){
        whoWon = whoWon + eval(valueArray);

    }
    if (whoWon > 0){
       return 1
    }
    else if (whoWon === 0) {
        return undefined
    }
    else {
        return 2
    }
}
getWinner(['23-26', '24-30', '30-27', '35-31'])
getWinner(['36-32', '32-24', '20-28', '30-26'])
getWinner(['36-18', '22-31', '27-21', '19-34'])
module.exports = getWinner;
