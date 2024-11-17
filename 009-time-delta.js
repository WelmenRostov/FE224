/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */
function getTimeDelta(x, y) {
    let starsTime = x.split(':').map(Number)
    let endTime = y.split(':').map(Number)
    starsTime[0] = starsTime[0] * 3600;
    starsTime[1] = starsTime[1] * 60;
    endTime[0] = endTime[0] * 3600;
    endTime[1] = endTime[1] * 60;

    starsTime.reduce((values, item)=>{
        starsTime = values + item;
        if (starsTime < 0){
            throw new Error("Стартовое число меньше 0");
        }
        return starsTime
    },0)
    endTime.reduce((values, item)=>{
        return endTime = values + item;
    },0)
    if (endTime < starsTime){
        throw new Error("Стартовая точка не может быть больше конечной");
    } else {
        return ((starsTime - endTime)*(-1))
    }

}
getTimeDelta('00:00:00', '00:00:01')
module.exports = getTimeDelta;
