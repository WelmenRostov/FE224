/**
 * Последовательностью Фибоначчи называется последовательность чисел
 * a0, a1, ..., an, ..., где
 * a0 = 0,
 * a1 = 1,
 * ak = ak-1 + ak-2 (k > 1).
 *
 * Напишите функцию fibonacci(n) вычисляющую n-ное число последовательности
 *
 * Пример:
 *
 * fibonacci(2) === 1
 * fibonacci(3) === 2
 * fibonacci(7) === 13
 *
 * @param {number} n >= 0
 * @returns {number}
 */
function fibonacci(n) {
    let arrayFibonacci = ['0','1']
    let shag = 0
    // 0 + 1
    // 1
    // 1

    // 1 + 1
    // 1
    // 2

    //1 + 2
    //2
    //3
    if (n === 0){
        return 0
    }
    while (true){
        let srtaroeChislo = Number(arrayFibonacci[1])
        let novoeChislo = Number(arrayFibonacci[0]) + Number(arrayFibonacci[1])
        arrayFibonacci[0] = srtaroeChislo;
        arrayFibonacci[1] = novoeChislo
        shag++
        if (shag === n) {
            break
        }
    }
    return arrayFibonacci[0]

}
console.log(fibonacci(2))
module.exports = fibonacci;
