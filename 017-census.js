/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */
function census(list) {
    let maxAge = 0;
    let indexMaxAge
    for (let values of list){
        if (values.age > maxAge && values.gender == 'Male'){
            maxAge = values.age
            indexMaxAge = list.indexOf(values)+1
        }
        if (list.length == 1) {
            return
        }
    }
    return indexMaxAge
}

console.log(census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]))
console.log(census([{ age: 40, gender: 'Female' }]))
module.exports = census;
