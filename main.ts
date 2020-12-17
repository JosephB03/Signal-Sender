radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 45) {
        radio.sendNumber(36)
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.clearScreen()
    }
})
// This sets the radio group and transmit power to allow the signal to be received without interference
radio.setGroup(25)
radio.setTransmitPower(4)
