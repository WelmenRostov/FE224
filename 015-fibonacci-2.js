/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {
    /*let minus = ((value * value * 5) + 4)
    let plus = ((value * value * 5) - 4)
    minus = Math.sqrt(minus)
    plus = Math.sqrt(plus)
    console.log(minus, plus)
    if (minus % 1 === 0){
        return minus
    }*/
    let arrayFibonacci = ['0','1']
    let shag = 0
    let list = []
    let srtaroeChislo = 0;
        if (value === 0){
        return 0
    }
    while (true){
        list.push(srtaroeChislo)
        srtaroeChislo = Number(arrayFibonacci[1])
        let novoeChislo = Number(arrayFibonacci[0]) + Number(arrayFibonacci[1])

        arrayFibonacci[0] = srtaroeChislo;
        arrayFibonacci[1] = novoeChislo
        shag++
        if (novoeChislo > value ) {
            list.push(srtaroeChislo)
            break
        }
    }
    if (list.includes(value)){
        return list.indexOf(value)
    } else {
        return
    }
    if (value === 1){
        return 1
    }
}

console.log(isFibonacci(55))
console.log(isFibonacci(1))
console.log(isFibonacci(2))
console.log(isFibonacci(3))
console.log(isFibonacci(5))
console.log(isFibonacci(8))
console.log(isFibonacci(13))
console.log(isFibonacci(21))
console.log(isFibonacci(34))
console.log(isFibonacci(42))
module.exports = isFibonacci;
