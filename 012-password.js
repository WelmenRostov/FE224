/**
 * Пароль называется криптостойким,
 * если он включает в себя хотя бы одну строчную английскую букву,
 * хотя бы одну заглавную английскую букву и хотя бы одну цифру,
 * при этом его длина должна быть не менее 7 символов.
 *
 * Напишите функцию validatePassword(password) определяющую,
 * является ли переданный пароль криптостойким.
 *
 * Пример:
 *
 * validatePassword('abc4DEFG') === true
 * validatePassword('abcdefg') === false
 * validatePassword('abcdefG') === false
 * validatePassword('abcdef7') === false
 *
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {
    const arrayPassword = password.split('')
    const statusPass = {
        сapitalLetters : false,
        lowercasLetters : false,
        numbers : false
    }
    arrayPassword.reduce((values, item)=>{
        if (item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90) {
            statusPass.сapitalLetters = true;
        }
        if (item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122) {
            statusPass.lowercasLetters = true;
        }
        if (item.charCodeAt(0) >= 48 && item.charCodeAt(0) <= 57) {
            statusPass.numbers = true;
        }
    },0)
    if (Object.values(statusPass).includes(false)){
        //console.log(Object.values(statusPass))
        return false
    } else {

        return true

    }


}
validatePassword('abc4DEFG')
validatePassword('abcdefg')
validatePassword('abcdefG')
validatePassword('abcdef7')
module.exports = validatePassword;
