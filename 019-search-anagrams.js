/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 *
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */
function searchAnagrams(value) {
    if(value.length == 1){
        return value
    } else if (value.length == 1){
        return
    } else {
        let avalue = value.replace(/[.,!?]/g, '').split(' ');
        let itog = []
        let duplicates = [];

        let test = {
            slovo: '',
            index: 0
        }
        for (let per of avalue) {
            let perInd = per
            per = per.toLowerCase().split('').sort().join('')
            for (let val of avalue) {
                let valInd = val
                val = val.toLowerCase().split('').sort().join('')
                if (per === val && avalue.indexOf(perInd) !== avalue.indexOf(valInd)) {
                    if (!avalue.includes(per)) {
                        duplicates.push(avalue.indexOf(perInd))
                    }
                }
            }
        }
        for (let x of avalue) {
            for (let y of duplicates) {
                if (avalue.indexOf(x) === y) {
                    itog.push(x)
                }
            }
        }
        return itog.join(' ');
    }
}
//console.log(searchAnagrams('Тут вообще нет повторений'))
console.log(searchAnagrams('Вижу апельсин значит живу. Спаниель'))
module.exports = searchAnagrams;
