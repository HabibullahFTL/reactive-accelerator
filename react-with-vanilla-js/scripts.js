// For Counter 1
const counterInput1 = document.getElementById('counter-input-1');
const counterButton1 = document.getElementById('counter-button-1');

counterInput1.value = 0;
counterButton1.addEventListener('click', () => {
    let counterValue = Number(counterInput1.value);
    counterValue += 1;
    counterInput1.value = counterValue;
})

// For Counter 2
const counterInput2 = document.getElementById('counter-input-2');
const counterButton2 = document.getElementById('counter-button-2');

counterInput2.value = 0;
counterButton2.addEventListener('click', () => {
    let counterValue = Number(counterInput2.value);
    counterValue += 2;
    counterInput2.value = counterValue;
})