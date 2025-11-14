const dots = document.getElementById('dots');
let dotCount = 0;
const dotInterval = setInterval(() => {
    dotCount = (dotCount + 1) % 4; // cycles 0-3 dots
    dots.textContent = '.'.repeat(dotCount);
}, 300);

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loading-screen');
    clearInterval(dotInterval);
    loader.style.transition = 'opacity 0.5s ease';
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 500);
});
