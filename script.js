document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Mobile menu toggle
    const nav = document.querySelector(".nav-links");
    const toggleButton = document.querySelector(".menu-toggle");

    toggleButton.addEventListener("click", function() {
        nav.classList.toggle("active");
    });
});
