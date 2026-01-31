/**
 * Portfolio Website JavaScript
 * Handles contact form submission and interactions
 */

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Create mailto link with form data
            const mailtoLink = `mailto:atharvabhusari2@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent('Name: ' + formData.name + '\nEmail: ' + formData.email + '\n\nMessage:\n' + formData.message)}`;
            
            // Open default mail client
            window.location.href = mailtoLink;
            
            // Reset form after submission
            form.reset();
        });
    }
});
