const wheel = document.querySelector('.wheel');
const spinButton = document.querySelector('.spin-button');
const options = document.querySelectorAll('.option');

const optionCount = options.length;
const angle = 360 / optionCount;

options.forEach((option, i) => {
    option.style.setProperty('--i', i);
    option.style.setProperty('--clr', i % 2 === 0 ? '#ffc107' : '#e91e63');
    const span = option.querySelector('span');
    span.style.transform = `rotate(${angle * i + angle / 2}deg)`;
});

let isSpinning = false;
let currentRotation = 0;

spinButton.addEventListener('click', () => {
    if (isSpinning) return;

    isSpinning = true;
    options.forEach(option => option.classList.remove('selected'));

    const randomRotations = Math.ceil(Math.random() * 5) + 3;
    const randomStopAngle = Math.random() * 360;
    const totalRotation = (randomRotations * 360) + randomStopAngle;

    currentRotation += totalRotation;
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    setTimeout(() => {
        isSpinning = false;
        const finalRotation = currentRotation % 360;
        const selectedIndex = Math.floor((360 - finalRotation) / angle);
        options[selectedIndex].classList.add('selected');
    }, 5000);
});
