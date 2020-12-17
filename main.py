# This waits 10 seconds before sending the signal, which should be enough time for them to jump.

def on_button_pressed_a():
    basic.pause(10000)
    radio.send_string("hi")
input.on_button_pressed(Button.A, on_button_pressed_a)

# This simply sets the radio group and the transmit power for the other microbit
radio.set_group(25)
radio.set_transmit_power(4)