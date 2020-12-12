input.onButtonPressed(Button.A, function () {
    radio.sendString("Yooo")
    basic.showString("Yooo")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Amigo")
    basic.showString("Amigo")
})
radio.setGroup(255)
