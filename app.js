function generatePin() {
    let pin = Math.round(Math.random() * 10000);
    pin = pin + '';
    while (pin.length != 4) {
        return generatePin();
    }
    // console.log(pin);
    return pin;
}
function displayPin() {
    pin = generatePin();
    document.getElementById('display-pin').value = pin;
    document.getElementById('display-number').value = '';
    document.getElementById('notify').innerText = ''
}

// Type number
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const display = document.getElementById('display-number');
    if (isNaN(number)) {
        if (number == 'C') {
            display.value = '';
        }
        else if (number == '<') {
            const displayedNum = display.value;
            display.value = displayedNum.slice(0, number.length - 2)
        }
    }
    else {
        const newNumber = display.value + number;
        display.value = newNumber;
    }

})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('display-number').value;
    if (pin == typedNumber) {
        document.getElementById('notify').innerText = "✅ Pin Matched... Secret door is opening for you";
    }
    else {
        document.getElementById('notify').innerText = "❌ Pin Didn't Match, Please try again";
    }
}