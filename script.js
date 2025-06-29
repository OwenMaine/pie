document.addEventListener('DOMContentLoaded', function () {

    // --- Mobile Navigation ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // --- Testimonials Slider (SwiperJS) ---
    const swiper = new Swiper('.testimonials-slider', {
        // Optional parameters
        loop: true,
        grabCursor: true,
        spaceBetween: 30,
        
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
            },
             // when window width is >= 992px
            992: {
                slidesPerView: 2,
            }
        }
    });

    // --- Animate on Scroll (AOS) ---
    AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
        once: true, // whether animation should happen only once - while scrolling down
    });

});

// --- Menu Page Filtering ---
const filterContainer = document.querySelector(".menu-filters");

if (filterContainer) {
    const filterBtns = filterContainer.querySelectorAll(".filter-btn");
    const menuItems = document.querySelectorAll(".menu-item-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active class from old button
            filterContainer.querySelector(".active").classList.remove("active");
            // Add active class to new button
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            menuItems.forEach(item => {
                const itemCategory = item.getAttribute("data-category");

                if (filterValue === "all" || filterValue === itemCategory) {
                    item.classList.remove("hide");
                } else {
                    item.classList.add("hide");
                }
            });
        });
    });
}

// --- Locations Page Filtering ---
const locationFilterContainer = document.querySelector(".location-filters");

if (locationFilterContainer) {
    const filterBtns = locationFilterContainer.querySelectorAll(".filter-btn");
    const locationCards = document.querySelectorAll(".location-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Update active state on buttons
            locationFilterContainer.querySelector(".active").classList.remove("active");
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            locationCards.forEach(card => {
                const cardCity = card.getAttribute("data-city");

                if (filterValue === "all" || filterValue === cardCity) {
                    card.classList.remove("hide");
                } else {
                    card.classList.add("hide");
                }
            });
        });
    });
}

// --- Contact Form Submission (Static Site Simulation) ---
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Prevent the default form submission which reloads the page
        e.preventDefault();

        // Simulate sending data and show a confirmation
        alert('Thank you for your message! We will get back to you shortly.');

        // Clear the form fields
        contactForm.reset();
    });
}