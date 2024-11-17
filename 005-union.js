/**
 * Напишите функцию union(a, b) возвращающую упорядоченный по возрастанию массив
 * состоящий из чисел встречающихся в обоих наборах.
 *
 * Пример:
 *
 * union([1, 1, 3, 2, 5], [5, 3, 7, 7]) === [3, 5]
 * union([2, 4, 6, 8, 10, 12, 10, 8, 6, 4, 2], [3, 6, 9, 12, 15, 18]) === [6, 12]
 * union([1, 2, 3], [11, 0, -1]) === []
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
function union(a, b) {
    let resultArray = [];
    let valueMin = a.length + b.length;
    let valuesException = 0;
    let valueMax = 0;
    for (let pereborArray of a){
        if (b.includes(pereborArray)){
            if (pereborArray <= valueMin){
                valuesException = valueMin
                valueMin = pereborArray;
            } else {
                valueMax = pereborArray;
            }
        }
    }
    if (valueMax == 0){
        resultArray.push(valueMin)
        resultArray.push(valuesException)
    } else if (valueMin > 0 && valueMax > 0) {
        resultArray.push(valueMin)
        resultArray.push(valueMax)
    }

    if (valueMin === a.length + b.length && valueMax == 0){
        resultArray = []
    }
    return resultArray;
}

console.log(union([1, 1, 3, 2, 5], [5, 3, 7, 7]))
console.log(union([2, 4, 22, 8, 10, 12, 10, 8, 6, 4, 2], [22, 6, 9, 12, 15, 18]))
console.log(union([5, 3], [5, 3, 7, 7]))
console.log(union([1, 2, 3], [11, 0, -1]))

module.exports = union;
