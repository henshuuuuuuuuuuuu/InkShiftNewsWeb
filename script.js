document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loading-screen');

    // Fade out smoothly
    loader.style.transition = 'opacity 0.8s ease';
    loader.style.opacity = '0';

    // Remove from view after transition
    setTimeout(() => {
        loader.style.display = 'none';
    }, 800);
});
