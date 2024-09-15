// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Portfolio grid population
const portfolioGrid = document.querySelector('.portfolio-grid');
const portfolioItems = [
    { title: 'Rebranding for XYZ Company', type: 'Brand Identity, Motion Graphics, Video Production', image: 'path-to-image1.jpg' },
    { title: 'Animated Explainer for ABC Startup', type: 'Motion Graphics, Animation', image: 'path-to-image2.jpg' },
    { title: 'Social Media Campaign for LMN Brand', type: 'Digital Design, Motion Graphics', image: 'path-to-image3.jpg' },
    { title: 'Commercial Video for PQR Product', type: 'Video Production, Cinematography', image: 'path-to-image4.jpg' },
    // Add more portfolio items as needed
];

portfolioItems.forEach(item => {
    const portfolioItem = document.createElement('div');
    portfolioItem.classList.add('portfolio-item');
    portfolioItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.type}</p>
    `;
    portfolioGrid.appendChild(portfolioItem);
});

// Testimonial slider
const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonials = [
    { name: 'John Doe', company: 'ABC Corp', quote: 'Working with Kumar has been a game-changer for our brand. His creative vision and attention to detail helped us bring our ideas to life in ways we hadn't imagined.' },
    { name: 'Jane Smith', company: 'XYZ Inc', quote: 'Kumar's ability to understand our brand and translate it into stunning visuals was exceptional. The end result exceeded our expectations!' },
    { name: 'Mike Johnson', company: 'LMN Enterprises', quote: 'The Minimical team delivered beyond our expectations. Their motion graphics work truly brought our product to life.' },
    // Add more testimonials as needed
];

let currentTestimonial = 0;

function showTestimonial() {
    testimonialSlider.innerHTML = `
        <blockquote>${testimonials[currentTestimonial].quote}</blockquote>
        <p class="testimonial-author">- ${testimonials[currentTestimonial].name}, ${testimonials[currentTestimonial].company}</p>
    `;
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial();
}

function previousTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial();
}

showTestimonial(); // Show initial testimonial

// Add navigation buttons for testimonials
const prevButton = document.createElement('button');
prevButton.innerText = 'Previous';
prevButton.addEventListener('click', previousTestimonial);

const nextButton = document.createElement('button');
nextButton.innerText = 'Next';
nextButton.addEventListener('click', nextTestimonial);

testimonialSlider.appendChild(prevButton);
testimonialSlider.appendChild(nextButton);

// Automatic testimonial rotation
setInterval(nextTestimonial, 10000); // Change testimonial every 10 seconds

// Form submission handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    const formData = new FormData(contactForm);
    console.log('Form submitted with the following data:');
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
    
    // Clear the form
    contactForm.reset();
    
    // Show a success message
    alert('Thank you for your message! I will get back to you soon.');
});

// Add scroll-triggered animations
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        if (sectionTop < window.innerHeight && sectionBottom > 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

// Dynamic copyright year
const currentYear = new Date().getFullYear();
document.querySelector('.copyright').innerHTML = `&copy; ${currentYear} Kumar Aman. All Rights Reserved.`;
