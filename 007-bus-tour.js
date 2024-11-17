/**
 * На экскурсионном маршруте автобусу высотой 512 см встречаются несколько мостов.
 *
 * Напишите функцию checkBusTour(bridges) вычисляющую номер моста под которым не сможет проехать автобус.
 *
 * Пример:
 *
 * checkBusTour([600, 512]) === 2
 * checkBusTour([600, 1024]) === undefined  # Автобус успешно проедет по маршруту
 *
 * @param {number[]} bridges высоты мостов встречающихся на маршруте
 * @returns {undefined|number}
 */
function checkBusTour(bridges) {
    const busHeight = 512;
    let busDontDrive = []
    for (let namberBright of bridges){
        if (namberBright <= busHeight){
            busDontDrive.push(bridges.indexOf(namberBright) + 1)
        }
    }
    return busDontDrive[0];
}
console.log(checkBusTour([600, 500, 400]))

module.exports = checkBusTour;
