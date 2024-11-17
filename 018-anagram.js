/**
 * Слова-анаграммы — это слова, записанные одними и теми же буквами в разном порядке,
 * регистр букв при этом игнорируется.
 * Анаграммами, например, являются слова «Волос» и «СЛОВО».
 *
 * Напишите функцию anagram(x, y) проверяющую, являются ли x и y словами-анаграммами.
 *
 * Пример:
 *
 * anagram('Волос', 'Слово') === true
 * anagram('Живу', 'Вижу') === true
 *
 * @param {string} x
 * @param {string} y
 * @returns {boolean}
 */
function anagram(x, y) {
    let lengthOneWord = x.length;
    let lengthTwoWord = y.length;

    let values = 0;

    let arrayOne = x.toLowerCase().split('').sort()
    let arrayTwo = y.toLowerCase().split('').sort()
    if (x.length == 0 && y.length == 0){
        return false
    }
    if(JSON.stringify(arrayOne) == JSON.stringify(arrayTwo)) {
        return true
    } else {
        return false
    }
}
console.log(anagram('', ''))
anagram('Живву', 'Вижву')


module.exports = anagram;
