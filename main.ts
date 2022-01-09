input.onButtonPressed(Button.A, function () {
    coundminus += 1
    basic.showNumber(coundminus)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
    coundminus = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(coundminus)
    coundminus += -1
})
let coundminus = 0
basic.showNumber(0)
basic.forever(function () {
	
})
