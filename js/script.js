// Trigger scale effect when the page loads
window.addEventListener('load', function() {
    const welcomeText = document.querySelector('.welcome-text');
    
    // Add the 'trigger-scale' class to trigger the scaling inward (shrink effect) on page load
    welcomeText.classList.add('trigger-scale');
});
