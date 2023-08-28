// Previous Code
// const timer = document.querySelector('.timer');
// const stopwatchBtn = document.querySelectorAll('.stopwatch-btn button');
// let Timer = 0;

// const startTimer = () => {
//     stopwatchBtn[0].addEventListener('click', () => {
//         const startInterval = setInterval(() => {
//             timer.innerHTML = `00:00:${Timer++}`;
//         }, 10);
//         stopTimer(startInterval);
//         resetTimer(startInterval);
//     });
// };
// startTimer();

// const stopTimer = (ClearInterval) => {
//     stopwatchBtn[1].addEventListener('click', () => {
//         clearInterval(ClearInterval);
//     });
// };

// const resetTimer = (ClearInterval) => {
//     stopwatchBtn[2].addEventListener('click', () => {
//         timer.innerHTML = `00:00:${Timer = '000'}`;
//         clearInterval(ClearInterval);
//     });
// };

// Refactor Code
const timer = document.querySelector('.timer');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

let [ms, ss, mm, hh] = [0, 0, 0, 0];
let interval;

function watchcount() {
    ms++;
    if (ms > 999) {
        ms = 0;
        ss++;
        if (ss > 59) {
            ss = 0;
            mm++;
            if (mm > 59) {
                mm = 0;
                hh++;
            }
        }
    }
    hh = String(hh).padStart(2, '0');
    mm = String(mm).padStart(2, '0');
    ss = String(ss).padStart(2, '0');
    ms = String(ms).padStart(3, '0');
    timer.textContent = `${hh}:${mm}:${ss}:${ms}`;
}

start.addEventListener('click', () => {
    if (!interval) {
        interval = setInterval(watchcount, 10);
    };
});

stop.addEventListener('click', () => {
    clearInterval(interval);
    interval = null; // Reset the interval variable
});

reset.addEventListener('click', () => {
    clearInterval(interval);
    interval = null; // Reset the interval variable
    [ms, ss, mm, hh] = [0, 0, 0, 0];
    timer.textContent = '00:00:00:000';
});