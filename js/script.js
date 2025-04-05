// Trigger scale effect when the page loads
window.addEventListener('load', function() {
    const welcomeText = document.querySelector('.welcome-text');
    
    // Add the 'trigger-scale' class to trigger the scaling inward (shrink effect) on page load
    welcomeText.classList.add('trigger-scale');
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thank-you-message');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default Netlify form handling

            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(new FormData(form)).toString(),
            })
            .then(() => {
                form.style.display = 'none'; // Hide the form
                thankYouMessage.style.display = 'block'; // Show the thank you message
            })
            .catch(error => console.error('Error:', error));
        });
    }
});