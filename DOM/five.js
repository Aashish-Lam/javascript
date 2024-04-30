let startTime;
let updatedTime;
let difference;
let timerInterval;

const timeDisplay = document.getElementById('timeDisplay');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

function startTimer() {
    startTime = new Date().getTime() - (difference || 0);
    timerInterval = setInterval(updateDisplay, 100);
    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopTimer() {
    clearInterval(timerInterval);
    difference = new Date().getTime() - startTime;
    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    timeDisplay.textContent = '00:00:00';
    difference = 0;
    startButton.disabled = false;
    stopButton.disabled = true;
}

function updateDisplay() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let seconds = Math.floor((difference / 1000) % 60);

    let formattedTime = 
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;

    timeDisplay.textContent = formattedTime;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
