document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    const resetBtn = document.getElementById('resetBtn');
    const formChildren = form.querySelectorAll('.form-header, .input-group, .btn-container, .footer-text');

    // Inject delay variables for sequential reveal
    formChildren.forEach((child, index) => {
        child.style.setProperty('--delay', index + 1);
    });

    // Reveal form with animation
    setTimeout(() => {
        form.classList.add('revealed');
    }, 200);

    // Sound functionality
    function playSelectionSound() {
        try {
            let audio = new Audio("./assets/aisources/rset.mp3");
            audio.volume = 0.2;
            audio.play().catch(e => console.log('Audio play blocked'));
        } catch (e) { }
    }

    resetBtn.addEventListener('click', (e) => {
        playSelectionSound();
    });

    // Form submission animation
    form.addEventListener('submit', () => {
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.innerHTML = 'Sending... <span class="spinner"></span>';
        submitBtn.disabled = true;
    });
});
