//jshint esversion:9
const containerEl = document.getElementById('container');
const textEl = document.getElementById('text');

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breathAnimation() {
    textEl.innerHTML = 'Breathe In!';
    containerEl.className = 'container grow';
    setTimeout(() => {
        text.innerHTML = 'Hold';

        setTimeout(() => {
            text.innerHTML = 'Breathe Out!';
            containerEl.className = 'container shrink';
        }, holdTime);
    }, breathTime);
}

setInterval(breathAnimation, totalTime);