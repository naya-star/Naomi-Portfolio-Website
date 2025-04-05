// Trigger scale effect when the page loads
window.addEventListener('load', function() {
    const welcomeText = document.querySelector('.welcome-text');
    
    // Add the 'trigger-scale' class to trigger the scaling inward (shrink effect) on page load
    welcomeText.classList.add('trigger-scale');
});

// Function to show the thank you message and submit the form
function showThankYouMessage(event) {
    event.preventDefault(); // Prevents the form from refreshing the page

    // Show the "Thank You" message
    document.getElementById('thank-you-message').style.display = 'block';

    // Optionally, reset the form fields after submission
    document.querySelector('form').reset();

    // Submit the form to Netlify using the native form submission (without a page refresh)
    const form = event.target;

    // Using the FormData API to get form data and send it to Netlify
    const formData = new FormData(form);

    // Optionally, you can send this data to a backend or service via fetch
    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            console.log('Form submitted successfully!');
        } else {
            console.error('Error during form submission');
        }
    })
    .catch(error => {
        console.error('Form submission error:', error);
    });

    // Ensure that form submission happens to Netlify after displaying the thank-you message
    form.submit();  // Trigger the native form submission to Netlify after the message
}
