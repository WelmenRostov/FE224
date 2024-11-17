/**
 * Напишите функцию getPower(n) возвращающую целочисленное значение степени >= 0,
 * в которую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 *
 * @param {number} n
 * @returns {number|undefined}
 */
function getPower(n) {

    let resultValue = 1;
    if (n === 1 || n === 0){
        return 0
    }
    if (n % 2 === 0){
        while (n !== 2){
            n = n / 2;
            ++resultValue
            if( n <= 0){
                return
            }
        }
    } else {
        return
    }
    return resultValue
}
console.log(getPower(3))
module.exports = getPower;






