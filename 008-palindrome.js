/**
 * Напишите функцию isPalindrome(value) определяющую,
 * является ли переданная строка палиндромом, то есть строкой,
 * которая одинаково читается слева направо и справа налево.
 *
 * Пример:
 *
 * isPalindrome('121') === true
 * isPalindrome('boob') === true
 * isPalindrome('true') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function isPalindrome(value) {

    let oneArray=[]
    let twoArray
    let newArray = value.split("")
    let delValuesArray
    if(newArray.length % 2 === 0){
        oneArray = newArray.splice(newArray.length / 2)
        oneArray.sort()
        newArray.sort()
        if (JSON.stringify(oneArray) === JSON.stringify(newArray)){
            return true
        }
        else {
            return false
        }
    } else if(newArray.length % 2 != 0){
        delValuesArray = Math.floor(newArray.length / 2)
        newArray.splice(delValuesArray, 1)
        oneArray = newArray.splice(newArray.length / 2)
        oneArray.sort()
        newArray.sort()
        if (JSON.stringify(oneArray) === JSON.stringify(newArray)){
            return true
        }
        else {
            return false
        }
    }
}

console.log(isPalindrome('bo1 11b'))
module.exports = isPalindrome;


/// BOOB
//BO
//OB
