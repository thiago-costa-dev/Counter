const counter = document.querySelector('#counter');
const buttons = document.querySelectorAll('button');

let value = 0;

const counterOptions = {
    decreaseValue: function () {
        value--;
        counter.innerHTML = value;
    },

    resetValue: function () {
        value = 0;
        counter.innerHTML = value;
    },

    increaseValue: function () {
        value++;
        counter.innerHTML = value;
    }
}

buttons.forEach(button => {
    const idButton = button.getAttribute('id');

    switch (idButton) {
        case 'decrease':
            button.addEventListener('click', counterOptions.decreaseValue);
            break;
        case 'reset':
            button.addEventListener('click', counterOptions.resetValue);
            break;
        default:
            button.addEventListener('click', counterOptions.increaseValue);
            break;
    }
});