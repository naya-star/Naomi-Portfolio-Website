// Trigger scale effect when the page loads
window.addEventListener('load', function() {
    const welcomeText = document.querySelector('.welcome-text');
    
    // Add the 'trigger-scale' class to trigger the scaling inward (shrink effect) on page load
    welcomeText.classList.add('trigger-scale');
});

// Function to show the thank you message and prevent form submission
function showThankYouMessage(event) {
    event.preventDefault(); // Prevents the form from refreshing the page
    document.getElementById('thank-you-message').style.display = 'block'; // Show the message
    document.querySelector('form').reset(); // Optional: Reset form fields after submission
}
