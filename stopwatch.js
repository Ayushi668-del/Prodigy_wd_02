let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStop');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const laps = document.getElementById('laps');

// Function to start the stopwatch
function startStopwatch() {
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        displayTime();
    }, 1000);
}

// Function to display time in HH:MM:SS format
function displayTime() {
    let sec = seconds < 10 ? `0${seconds}` : seconds;
    let min = minutes < 10 ? `0${minutes}` : minutes;
    let hr = hours < 10 ? `0${hours}` : hours;
    display.textContent = `${hr}:${min}:${sec}`;
}

// Toggle start/stop button
startStopBtn.addEventListener('click', () => {
    if (!isRunning) {
        startStopwatch();
        isRunning = true;
        startStopBtn.textContent = 'Stop';
    } else {
        clearInterval(timer);
        isRunning = false;
        startStopBtn.textContent = 'Start';
    }
});

// Reset the stopwatch
resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime();
    startStopBtn.textContent = 'Start';
    laps.innerHTML = '';
});

// Record lap times
lapBtn.addEventListener('click', () => {
    if (isRunning) {
        const lapTime = display.textContent;
        const li = document.createElement('li');
        li.textContent = `Lap: ${lapTime}`;
        laps.appendChild(li);
    }
});

// Initialize display
displayTime();
