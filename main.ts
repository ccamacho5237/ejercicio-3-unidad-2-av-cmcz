let T1 = 0
let T2 = 0
let T3 = 0
let temperatura = 0
function temperatura_Promedio () {
    T1 = input.temperature()
    basic.pause(5000)
    T2 = input.temperature()
    basic.pause(5000)
    T3 = input.temperature()
    return (T1 + (T2 + T3)) / 3
}
basic.forever(function () {
    temperatura = temperatura_Promedio()
    if (temperatura > 25) {
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(200)
    }
    basic.pause(500)
    basic.showNumber(temperatura)
})
