/**
 * Напишите функцию sortTimestamps(list) сортирующую список временных моментов.
 *
 * Пример:
 *
 * sortTimestamps(['23:02:59', '02:07:00']) === ['02:07:00', '23:02:59']
 *
 * @param {string[]} list массив временных моментов представленных в виде строк в формате 'HH:MM:SS'
 * @returns {string[]} отсортированный по возрастанию массив временных моментов
 */
function sortTimestamps(list) {
    if (list.length < 1){
        return []
    } else if (list.length === 1){
        return list
    } else {
        let arrayTime = []
        let counter = 1
        let plugEnumeration;

        for (let value of list) {
            value = Number(value.replace(/:/g, '').split(":"))
            arrayTime.push(value)
        }
        for (let item of arrayTime) {
            if (item > arrayTime[counter]) {

                //проверка по клону
                plugEnumeration = arrayTime[counter]
                arrayTime[counter - 1] = plugEnumeration
                arrayTime[counter] = item

                //перебор оригинала
                plugEnumeration = list[counter]
                item = list[counter - 1]
                list[counter - 1] = plugEnumeration
                list[counter] = item

                counter++
            }
        }

        return list
    }
}
console.log(sortTimestamps([]))
console.log(sortTimestamps(['00:13:37']))
console.log(sortTimestamps(['00:00:42', '00:00:07']))
console.log(sortTimestamps(['00:13:37', '00:04:20']))
console.log(sortTimestamps(['19:00:00', '00:59:59']))
console.log(sortTimestamps(['19:00:00', '00:04:20', '00:59:59']))
module.exports = sortTimestamps;
