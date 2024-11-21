// Nav bar Toogle menu 
function toggleMenu() {
    const nav = document.getElementById("navbarNav");
    nav.classList.toggle("show");
}


// Auto Increment Counter for Stats
function incrementCounter(id, target, duration) {
    let start = 0;
    let end = target;
    let range = end - start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let counter = document.getElementById(id);

    let timer = setInterval(function () {
        start += increment;
        counter.textContent = start;
        if (start === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Calling the increment function on page load
window.onload = function () {
    incrementCounter('projects-count', 100, 2000);
    incrementCounter('clients-count', 50, 2000);
    incrementCounter('experience-count', 5, 2000);
};


document.addEventListener("DOMContentLoaded", function () {
    const skills = {
        html: 90,
        css: 85,
        js: 80,
        bootstrap: 75,
        canva: 70,
        photoshop: 85,
        "facebook-ads": 90,
        "instagram-ads": 80,
        "linkedin-ads": 75,
        "tiktok-ads": 70,
        "youtube-ads": 80,
        "google-ads": 85,
        "google-search-console": 80,
        "google-tag-manager": 75
    };

    // Function to animate progress bars
    function animateProgressBar(skill, targetValue) {
        let progressBar = document.getElementById(skill);
        let percentText = document.getElementById(skill + "-percent");

        let currentValue = 0;

        let interval = setInterval(() => {
            if (currentValue < targetValue) {
                currentValue++;
                progressBar.value = currentValue;
                percentText.textContent = `${currentValue}%`;
            } else {
                clearInterval(interval);
            }
        }, 20);
    }

    // Set up the IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillId = entry.target.id;
                if (skills[skillId]) {
                    animateProgressBar(skillId, skills[skillId]);
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
    });

    // Observe each progress bar element
    for (let skill in skills) {
        const progressBar = document.getElementById(skill);
        if (progressBar) {
            observer.observe(progressBar);
        }
    }
});


// Initialize EmailJS
// Initialize EmailJS
(function () {
    emailjs.init("swDN6Pus3DPylBzr3"); // Replace with your actual EmailJS public key
})();

// Form submission event
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    emailjs.sendForm("service_9w5cxzs", "template_9npplvi", this)
        .then(function (response) {
            // Success SweetAlert
            Swal.fire({
                title: "Message Sent!",
                text: "Thank you for contacting us. Your message has been sent successfully.",
                icon: "success",
                confirmButtonText: "OK",
            });
            document.getElementById("contactForm").reset(); // Reset the form after successful submission
        }, function (error) {
            // Error SweetAlert
            Swal.fire({
                title: "Error!",
                text: "Failed to send your message. Please try again later.",
                icon: "error",
                confirmButtonText: "OK",
            });
            console.error("Failed to send message:", error);
        });
});

