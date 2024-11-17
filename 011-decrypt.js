/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
function decrypt(secret) {
    let arraySecret = []
    let finalArray =[]
    secret = secret.split('')
    for (let valuesLatter of secret){
        valuesLatter = valuesLatter.charCodeAt(0)
        if (valuesLatter < 65){
            arraySecret.push(valuesLatter)
        }
        else if (valuesLatter === 90){
            valuesLatter = 65;
            arraySecret.push(valuesLatter)
        }
        else if (valuesLatter === 122){
            valuesLatter = 97;
            arraySecret.push(valuesLatter)
        }
        else {
            ++valuesLatter;
            arraySecret.push(valuesLatter)
        }
    }
    for (let valuerNumber of arraySecret){
        valuerNumber = String.fromCharCode(valuerNumber);
        finalArray.push(valuerNumber)
    }
    finalArray = finalArray.join('')
    return finalArray;
}
decrypt('zmc vd hfmnqd rozbdr!')
module.exports = decrypt;
