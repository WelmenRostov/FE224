/**
 *
 * Петя, Катя и Сережа делают из бумаги журавликов.
 * Вместе они сделали X журавликов. Сколько журавликов сделал каждый ребенок, если известно,
 * что Петя и Сережа сделали одинаковое количество журавликов,
 * а Катя сделала в два раза больше журавликов, чем Петя и Сережа вместе?
 * (если это возможно, если нет, то у Кати должно быть журавликов минимум в 2 раза больше, как в примере 3)
 *
 * Напишите функцию computeOrizurus(total) которая вычислит
 * сколько журавликов сделал каждый ребенок.
 *
 * Пример:
 *
 * computeOrizurus(6) === [1, 4, 1]
 * computeOrizurus(24) === [4, 16, 4]
 * computeOrizurus(11) === [1, 9, 1]
 *
 * @param {number} total общее количество сделанных журавликов
 * @returns {number[]} массив чисел, где первый элемент это количество журавликов сделанных Петей,
 * второй элемент – Катей, третий – Сережей
 */
function computeOrizurusTwo(all) {
    // (x + x) + 2x  = 24
    // 4x = 24
    // x = 6
    const x = all / 6



    if (Number.isInteger(x)) {
        return {
            s : x,
            p : x,
            k : x * 4
        }
    }

    return {
        s : Math.floor(x),
        p : Math.floor(x),
        k : all - Math.floor(x) * 2
    }
}
console.log(computeOrizurus(21));

function computeOrizurus(all){
    let valuesGuys = all / 6;
    let valuesKatya = 0;
    if (Number.isInteger(valuesGuys)) {
        valuesKatya = valuesGuys * 4;
    }
    else {
        valuesKatya = all - Math.floor(valuesGuys) * 2
        valuesGuys= Math.floor(valuesGuys)
    }
    return [valuesGuys, valuesKatya, valuesGuys]
}

console.log(computeOrizurusTwo(21));


module.exports = computeOrizurus;
