const loader = document.querySelector('.loading-screen');
const dots = document.getElementById('dots');
let dotCount = 0;

// Animate dots while loading
const dotInterval = setInterval(() => {
    dotCount = (dotCount + 1) % 4;
    dots.textContent = '.'.repeat(dotCount);
}, 300);

// Hide loader after page fully loads
window.addEventListener('load', () => {
    clearInterval(dotInterval);  // stop dot animation
    loader.style.opacity = '0';  // fade out
    setTimeout(() => {
        loader.style.display = 'none';  // remove from view
    }, 500);
});
