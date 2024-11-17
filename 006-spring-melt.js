/**
 * Уставшие от необычно теплой зимы, жители решили узнать,
 * действительно ли это самая длинная оттепель за всю историю наблюдений за погодой.
 * Они обратились к синоптикам, а те, в свою очередь,
 * занялись исследованиями статистики за прошлые годы.
 * Их интересует, сколько дней длилась самая длинная оттепель.
 *
 * Напишите функцию getSpringMeltStreak(temperature) помогающую синоптикам вычислить самый длинный период,
 * в который среднесуточная температура ежедневно превышала 0 градусов Цельсия
 *
 * Пример:
 *
 * getSpringMeltStreak([-20, 30, -40, 50, 10, -10]) === 2
 * getSpringMeltStreak([10, 20, 30, 1, -10, 1, 2, 3]) === 4
 * getSpringMeltStreak([-10, 0, -10, 0, -10]) === 0
 *
 * @param {number[]} temperature массив чисел, где каждое – среднесуточная температура в соответствующий день
 * @returns {number}
 */
function getSpringMeltStreak1(temperature) {
    let valueHeatLength = 0;
    let figureEsterday = 0
    for (let temperatureIndicator of temperature){
        if (temperatureIndicator > 0 && figureEsterday <= 0){
            valueHeatLength++;
        }
        figureEsterday = temperatureIndicator;
    }
    return valueHeatLength;
}
console.log(getSpringMeltStreak([-10,1,0,10, 20, 30, -10, 1, 2,4,3,3, -10, 1, 2, 3]))
module.exports = getSpringMeltStreak;


function getSpringMeltStreak(temperature) {
   let valueHeatLength = 0;
   let figureWasEsterday = 0;
   let dayCounter = 0;

   for(let temperatureIndicator of temperature){
       if (temperatureIndicator >= figureWasEsterday && figureWasEsterday <= 0){
           dayCounter++

       }
       if (temperatureIndicator <= 0){
           dayCounter = 0;
       }
       if (dayCounter > valueHeatLength){
           valueHeatLength++
       }
   }

   return valueHeatLength;
}
